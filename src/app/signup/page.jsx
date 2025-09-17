"use client";

import { useState } from "react";
import { useEffect } from "react";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Signup() {
  const [user, setuser] = useState({
    email: "",
    username: "",
    name: "",
    password: "",
    role: "employee",
  });
  // const authverification = async () => {
  //   const axiosres = await axios.get("/api/get-user-account-details");
  //   if (axiosres)
  //     return NextResponse.json(
  //       { message: "something went wrong" },
  //       { status: 500 }
  //     );
  //   router.push("/home");
  // };
  // useEffect(() => {
  //   authverification();
  // });
  const router = useRouter();
  const authuser=async()=>{
    const axiosres=await axios.get("/api/get-user-account-details");
    if(axiosres){
      router.push("/home");
    }
  }
  useEffect(()=>{
    authuser()
  },[])
  const signuphandler = async (e) => {
    e.preventDefault();
    console.log(user);
    const axiosres = await axios.post("/api/signup", user);
    console.log(axiosres);
  };
  return (
    <>
      <form
        onSubmit={signuphandler}
        className="parent w-screen h-screen bg-gradient-to-bl from-green-800 via-green-950 to-green-800 flex justify-center items-center "
      >
        <div className="relative py-3 sm:max-w-xs sm:mx-auto">
          <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-green-600  rounded-xl shadow-lg">
            <div className="flex flex-col justify-center items-center h-full select-none">
              <div className="flex flex-col items-center justify-center gap-2 mb-8">
                <h1 className="text-white text-3xl mb-4 font-bold">App Name</h1>
                <p className="m-0 text-[16px] font-semibold dark:text-white">
                  Login to your Account
                </p>
                <span className="m-0 text-xs max-w-[90%] text-center text-amber-950">
                  Get started with our app, just start section and enjoy
                  experience.
                </span>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-xs text-black ">
                  Email address
                </label>
                <input
                  onChange={(e) => setuser({ ...user, email: e.target.value })}
                  className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-green-800"
                  placeholder="Email address"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-xs text-black ">
                  name
                </label>
                <input
                  onChange={(e) => setuser({ ...user, name: e.target.value })}
                  className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-green-800"
                  placeholder="name"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-xs text-black ">
                  Username
                </label>
                <input
                  onChange={(e) =>
                    setuser({ ...user, username: e.target.value })
                  }
                  className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-green-800"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-black ">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setuser({ ...user, password: e.target.value })}
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-green-800"
                placeholder="••••••••"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-black ">Role</label>
              <select
                onChange={(e) => setuser({ ...user, role: e.target.value })}
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-green-800"
              >
                <option value="employee">Employee</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>

            <div className="mt-5">
              <button
                onClick={() => router.push("/signin")}
                type="submit"
                className="py-1 px-8 bg-green-500 hover:bg-green-700 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
              >
                Signup
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-5">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-green-800 hover:text-green-700 transition duration-200"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}