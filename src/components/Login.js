import React from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("A");
        navigate("/home");
      } else {
        console.log("B");
        navigate("/");
      }
    });
  }, [auth, navigate]);

  const loginHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
      return;
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className=" b" style={{backgroundColor: "rgb(196 181 253)" ,backgroundRepeat:"no-repeat", marginTop: '-20px', paddingBottom: '3.3rem' ,backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh"}}>
      <div className="text-center">
        <h1 className="text-7xl mt-3 pt-3 font-semibold">Ez-Notes</h1>
        <div className="protext mx-auto w-[95vw] mt-5 text-left">
          Make, track and maintain your notes and check how many other people are
          using this app. This project was made
          using React, Tailwind and Firebase.There are pretty good alternatives than this but I didn't have anything else to do so yes. 
        </div>
        <h1 className="text-3xl mt-5 font-semibold prohead">Some epic examples of Ez-notes:</h1>

        <div className="lognotes min-h-40 mx-auto mt-10">
          <div
            className="w-96 lognoter log1 bg-red-400 text-left rounded-lg"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "10px",
            }}
          >
            <div className="flex justify-center pb-2 border-b-2 border-violet-200 gap-[70%] w-[100%] mt-1">
              {" "}
              <span> Ez-Notes </span>{" "}
              <span>
                <i className="fa-sharp fa-solid fa-pencil"></i>
              </span>
            </div>
            <div className="bg-transparent w-[98%] rounded-lg pl-2 mb-2">
              <div className="pb-1 ">
                {" "}
                <i className="fa-solid fa-check"></i>{" "}
                <span className="border-b-[1.5px] ml-2 border-black">
                  {" "}
                  I should write a book{" "}
                </span>
              </div>
              <div className="pb-1">
                {" "}
                <i className="fa-solid fa-check"></i>{" "}
                <span className="border-b-[1.5px] ml-2 border-black">
                  {" "}
                  Book should be about Firebase{" "}
                </span>
              </div>
              <div className="pb-1">
                {" "}
                <i className="fa-solid fa-check"></i>{" "}
                <span className="border-b-[1.5px] ml-2 border-black">
                  {" "}
                  There must be some sort of protagonist{" "}
                </span>
              </div>
              <div className="pb-1">
                {" "}
                <i className="fa-solid fa-check"></i>{" "}
                <span className="border-b-[1.5px] ml-2 border-black">
                  {" "}
                  Or I can write a poem{" "}
                </span>
              </div>
              <div className="pb-1">
                {" "}
                <i className="fa-solid fa-check"></i>{" "}
                <span className="border-b-[1.5px] ml-2 border-black">
                  {" "}
                  But Why I am typing all this in Notes 😭?{" "}
                </span>
              </div>
            </div>
          </div>
          <div
            className="w-80 lognoter log2 bg-blue-400 text-left rounded-lg"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "10px",
            }}
          >
            <div className="flex justify-center pb-2 border-b-2 border-violet-200 gap-[70%] w-[100%] mt-1">
              {" "}
              <span> Ez-Notes </span>{" "}
              <span>
                <i className="fa-sharp fa-solid fa-pencil"></i>
              </span>
            </div>
            <div className="bg-transparent w-[98%] rounded-lg pl-2 mb-2">
              <div className="pb-1 ">
                {" "}
                <i className="fa-solid fa-check"></i>{" "}
                <span className="border-b-[1.5px] ml-2 border-black">
                  {" "}
                  Groceries at 6a.m{" "}
                </span>
              </div>
              <div className="pb-1">
                {" "}
                <i className="fa-solid fa-check"></i>{" "}
                <span className="border-b-[1.5px] ml-2 border-black">
                  {" "}
                  Workout at 8a.m{" "}
                </span>
              </div>
              <div className="pb-1">
                {" "}
                <i className="fa-solid fa-check"></i>{" "}
                <span className="border-b-[1.5px] ml-2 border-black">
                  {" "}
                  Meeting at 9a.m{" "}
                </span>
              </div>
              <div className="pb-1">
                {" "}
                <i className="fa-solid fa-check"></i>{" "}
                <span className="border-b-[1.5px] ml-2 border-black">
                  {" "}
                  Gaming at 4p.m{" "}
                </span>
              </div>
              <div className="pb-1">
                {" "}
                <i className="fa-solid fa-check"></i>{" "}
                <span className="border-b-[1.5px] ml-2 border-black">
                  {" "}
                  Productivity goes Brr 😀{" "}
                </span>
              </div>
            </div>
          </div>
          <div
            className="w-80 lognoter log3 bg-violet-400 text-left rounded-lg"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="flex justify-center pb-2 border-b-2 border-violet-200 gap-[70%] w-[100%] mt-1">
              {" "}
              <span> Ez-Notes </span>{" "}
              <span>
                <i className="fa-sharp fa-solid fa-pencil"></i>
              </span>
            </div>
            <div className="bg-transparent w-[98%] rounded-lg pl-2 mb-2">
              <div className="pb-1">
                {" "}
                <i className="fa-sharp fa-regular fa-circle-dot"></i>{" "}
                <span className=" ml-2 ">
                  {" "}
                  Day 1 of using Firebase. Pretty great BAAS for side projects. Where it used to take hours to write boiler plater code for small things such as login or register, now it can be done easily using built in auth commands.{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <button onClick={loginHandler} className='button mt-20 pb-2 border-black'>
          <i className="fa-brands fa-google"></i> Login Or Register
        </button>
      </div>
    </div>
  );
}
