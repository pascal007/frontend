import React from "react";

export default function EditNote(handleEditSubmit, selectedEditData){
    return (
        <>
        <h3> Edit Note Form</h3> 
        <form onSubmit={(e)=>handleEditSubmit(e, selectedEditData.note_id)}>
            Title <input type={"text"} name={"title"} defaultValue={selectedEditData.title}/>
            Description <input type={"text"} name={"description"} defaultValue={selectedEditData.description}/>
            completed <input type={"checkbox"} name={"completed"} defaultValue={selectedEditData.completed}/>
            
            <button type="submit">EDIT</button>
        </form>
        </>
    )
}