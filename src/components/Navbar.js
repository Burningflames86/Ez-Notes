import { React, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../index.css";

export default function Navbar() {
  const auth = getAuth();
  const [user, setUser] = useState()
  let photoUrl;

  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {

    if(user){
        setUser(user);
    }
    },
    );
  }, [auth])
  
  if (user) {
    photoUrl = user.photoURL;
  }

  return (
    
       <header>   
       
                  <nav className="pt-5 pb-3 mx-10  flex gap-[30%]">
                  <div className="text-4xl font-bold w-[70%] text-white">Ez-Notes</div>
                  <div className="w-[50px] h-[50px]">
                  {user && (
                    <img
                      src={photoUrl}
                      alt="Pfp"
                      className="border-[3px] border-violet-300"
                      style={{
                        height: "100%",
                        width: "120%",
                        borderRadius: "50%",
                      }}
                    />
                  )}</div>
                  </nav>
                
    </header>
  );
}
