import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  orderBy,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import "../index.css";
import spinner from "../images/spinner.png";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const [notecollection, setNotecollection] = useState([]);
  const [isfilled, setisfilled] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  

  useEffect(() => {
    let unsub;
    if (auth.currentUser) {
      const noteKeeperref = collection(db, "NoteKeeper");
      const q = query(
        noteKeeperref,
        orderBy("createdAt"),
        where("Uid", "==", auth.currentUser.uid)
      );
      unsub = onSnapshot(q, (snapshot) => {
        if (snapshot.size < notecollection.length) {
          setisfilled(false);
        } else {
          setisfilled(true);
        }
        setNotecollection(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      });
    } else {
      setNotecollection([]);
    }

    return unsub;
  }, [auth.currentUser, loggedin, notecollection.length]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedin(true);
      } else {
        setLoggedin(false);
      }
    });
  }, [auth]);


  useEffect(() => {
    if (!auth.currentUser) {
      return;
    }

    setDoc(
      doc(db, "Users", auth.currentUser.uid),
      { name: auth.currentUser.displayName, uid: auth.currentUser.uid },
      { merge: true }
    );
  }, [auth.currentUser]);

  useEffect(() => {
    if(notecollection.length <= 0 && isfilled){
        navigate('/home')
    }
  }, [isfilled, navigate, notecollection.length]);

  const deleter = (id) => {
    deleteDoc(doc(db, "NoteKeeper", id));
  };


  const reversed = [...notecollection].reverse();
  return (
    <div className="bg-purple-400">
      <div className="maincontent">
        {isfilled && reversed.length > 0 && (
          <div
            className="oldnotes mx-10 mt-4 gap-3"
          >
            {reversed.map(
              (notes) =>
              
                 
                  <div key={notes.id}>
                    <div className="notes bg-red-400 text-left rounded-lg px-3  overflow-y-auto">
                      {" "}
                      <div className="heading w-full text-2xl mt-2 font-semibold flex gap-[60%]">
                        <span className="head w-[100%]">{notes.heading}</span>{" "}
                        <span>
                        <button
                        type="submit"
                        onClick={() => deleter(notes.id)}
                        >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                        </span>
                      </div>
                      <div className="py-3">
                        {notes.Note}
                      </div>
                    </div>
                  </div>
                
            )}
          </div>
        )}

        {!isfilled && (
          <div>
            <img src={spinner} alt="Loading Loading" />
          </div>
        )}

      </div>
    </div>
  );
}
