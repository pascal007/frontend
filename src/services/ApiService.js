import axios from "axios";

export function getnote(){
    return axios.get("http://127.0.0.1:8000/note/")
    .then(res => {
        return res.data
    })
}

export function addnote(note){
    return axios.post("http://127.0.0.1:8000/note/",
    {
     note_id: null,
     title: note.title.value,
     description: note.description.value,
     completed: false
   
    })
    .then(res => {
        return res.data
    })
}

export function editnote(note, id){
    return axios.put("http://127.0.0.1:8000/note/"+id+"/",
    {
     title: note.title.value,
     description: note.description.value,
     completed: false
   
    })
    .then(res => {
        return res.data
    })
}
