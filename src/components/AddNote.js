import React from "react";

export default function AddNote(handleAddSubmit){
    return (
        <>
        <h3> Add Note Form</h3> 
        <form onSubmit={handleAddSubmit}>
            Title <input type={"text"} name={"title"} />
            Description <input type={"text"} name={"description"} />
            
            <button type="submit">Submit</button>
        </form>
        </>
    )
}