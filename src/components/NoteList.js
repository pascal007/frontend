import React, { useEffect, useState } from "react"
import { getnote, addnote, editnote } from "../services/ApiService"
import AddNote from "./AddNote"
import EditNote from "./EditNote"

export default function NoteList(){
    const [notes, setNotes] = useState([])
    const [showAddNoteForm, setShowAddNoteForm] = useState(false)
    const [showEditNoteForm, setShowEditNoteForm] = useState(false)
    const [selectedEditData, setSelectedEditData] = useState()
    useEffect(() =>{
        let mount = true
        getnote()
        .then(res => {
            setNotes(res)
            return() => mount = false

        })
    }, [])

    const handleAddSubmit = (e) => {
        addnote(e.target)
        .then(res => {
            setNotes(res)
        })
    }

    const handleEditSubmit = (e, id) => {
        editnote(id, e.target)
        .then(res =>{
            setNotes(res)
        })
    }

    const handleEditBtn = (note) => {
        setSelectedEditData = note
        setShowEditNoteForm = true
        setShowAddNoteForm = false
    }
    return (
        <>
        <h3> Note List</h3>
        <table border={"2px"} cellPadding={"10px"}>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Completed</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {notes.map(note => {
                return <tr key={note.id}>
                <td>{note.title}</td>
                <td>{note.description}</td>
                <td>{note.completed}</td>
                <td><button onClick={() => handleEditBtn(note)}>Edit</button><button>Delete</button></td>
                </tr>
                })}
                
            </tbody>
        </table>
        <button onClick={()=>setShowAddNoteForm(true)}>Add new note</button>
        {showAddNoteForm && <AddNote handleAddSubmit={handleAddSubmit}/>}
        {showEditNoteForm && <EditNote handleEditSubmit={handleEditSubmit} selectedEditData = {selectedEditData}/>}
        </>
    )
}