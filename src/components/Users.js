import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase.config";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const auth = getAuth();

export default function Users() {
  const [usercollection, setUsercollection] = useState([]);

  useEffect(() => {
    if (!auth.currentUser) {
      return;
    }

    const userKeeperref = collection(db, "Users");
    const w = query(userKeeperref, where("uid", "!=", auth.currentUser.uid));

    // eslint-disable-next-line
    const unsub = onSnapshot(w, (snapshot) => {
      setUsercollection(
        snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
          };
        })
      );
    });

    
  }, []);
  

  useEffect(()=>{
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }
    (shuffleArray(usercollection))
  }, [usercollection])


  return (
    <div className="mx-10 mt-4">
      <h1 className="mb-3 mt-1 font-semibold text-2xl">Some other users <span className="text-base">(Random)</span>:</h1>
      
      <div className="users">
      {usercollection.map(
        (users, i) =>
          i <= 6 && (
            <div key={users.uid} className='border-2 font-semibold border-white rounded-3xl p-3 bg-white'>
              
                {users.name}
              
            </div>
          )
      )}
      </div>
    </div>
  );
}
