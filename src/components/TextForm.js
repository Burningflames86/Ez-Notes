import React from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import {db} from '../firebase.config'
import { getAuth } from "firebase/auth";

export default function TextForm() {
  const auth = getAuth();
  const user = auth.currentUser;
  const noteKeeperref = collection(db, "NoteKeeper");
  const [notecollector, setNotecollector] = useState({Note: "", createdAt: Timestamp, heading:"", Uid: ""}); 
  const [heading, setHeading] = useState("Heading")
  const [note, setNote] = useState(" ")
  const submitHandler = (e) => {
    e.preventDefault();
    addDoc(noteKeeperref, notecollector);
  };
  const changeHandler = (e) => {
    setNote(e.target.value)
    setNotecollector({Note: e.target.value, createdAt: Timestamp.fromDate(new Date()), heading: heading, Uid:user.uid});
  };

  const headingHandler = (e) => {
    setHeading(e.target.value)
    setNotecollector({Note: note, createdAt: Timestamp.fromDate(new Date()), heading: e.target.value, Uid:user.uid});
  }

  return (
    <>
      <h1 style={{fontWeight:'400'}} className="mx-10 mt-5 text-xl text-center">Create Your Note</h1>
      <form className="mt-3">
        <div className=" mb-4 rounded-lg bg-yellow-200">
          
          <div className="px-4 py-2  rounded-b-lg light:bg-gray-800">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <textarea name="" id="" rows="3" value={heading} style={{resize:'none', outline: 'none'}} className="block bg-transparent w-full text-2xl mt-4 font-semibold h-10 text-gray-800  border-0 light:bg-gray-800  light:text-white light:placeholder-gray-400" onChange={headingHandler}></textarea>
            <textarea
              id="editor"
              rows="5"
              className="pub block w-full bg-transparent px-0 text-sm font-semibold text-gray-800 mt-4  border-0 light:bg-gray-800  light:text-white light:placeholder-gray-400"
              placeholder="Note..."
              required 
              onChange={changeHandler}
              style={{outline:'none'}}
            >
            </textarea>
          </div>
        </div>
        <button
          type="submit"
          className="font-bold border-2 px-3 py-1 border-white bg-purple-400 rounded-2xl transition-all ease-linear duration-100 hover:bg-white"
          onClick={submitHandler}
        >
          Add Note
        </button>
      </form>
    </>
  );
}
