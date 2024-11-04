import { useState } from "react";
import { motion } from "framer-motion";

export default function Account() {
  const [activeTab, setActiveTab] = useState("signIn");
  return (
    <div className="mx-auto my-10 flex w-3/4 flex-col items-center justify-center overflow-hidden outline">
      <div className="flex w-full justify-evenly p-16">
        <motion.button
          onClick={() => setActiveTab("signIn")}
          className="m-5 mx-auto border py-2 uppercase"
          animate={{
            paddingLeft: activeTab === "signIn" ? "5em" : "2em",
            paddingRight: activeTab === "signIn" ? "5em" : "2em",
            backgroundColor: activeTab === "signIn" ? "black" : "transparent",
            color: activeTab === "signIn" ? "white" : "black",
          }}
        >
          Sign In
        </motion.button>
        <motion.button
          onClick={() => setActiveTab("signUp")}
          className="m-5 border py-2 uppercase"
          animate={{
            paddingLeft: activeTab === "signUp" ? "5em" : "2em",
            paddingRight: activeTab === "signUp" ? "5em" : "2em",
            backgroundColor: activeTab === "signUp" ? "black" : "transparent",
            color: activeTab === "signUp" ? "white" : "black",
          }}
        >
          Sign Up
        </motion.button>
      </div>
      {/* SIGN IN */}
      <div
        className={`${activeTab === "signIn" ? "flex" : "hidden"} w-full flex-col items-center justify-start`}
      >
        <input
          className="my-2 h-12 w-3/4 border px-6 uppercase"
          placeholder="*E-mail Address"
        />

        <input
          className="my-2 h-12 w-3/4 border px-6 uppercase"
          placeholder="*Password"
        />

        <div className="my-2 flex w-3/4 items-center justify-center">
          <input type="checkbox" className="mx-6" />
          <p className="text-sm">
            Remember me - I want Ralph Lauren to personalize my shopping
            experience
          </p>
        </div>
        <button className="m-6 w-3/4 border bg-[#041E3A] px-6 py-3 uppercase text-white">
          Sign In
        </button>
      </div>
      {/* SIGN UP */}
      <div
        className={`${activeTab === "signUp" ? "flex" : "hidden"} w-full flex-col items-center justify-start`}
      >
        <input
          className="my-2 h-12 w-3/4 border px-6 uppercase"
          placeholder="*E-mail Address"
        />

        <input
          className="my-2 h-12 w-3/4 border px-6 uppercase"
          placeholder="*Confirm E-mail Address"
        />
        <input
          className="my-2 h-12 w-3/4 border px-6 uppercase"
          placeholder="*Password"
        />
        <input
          className="my-2 h-12 w-3/4 border px-6 uppercase"
          placeholder="*Confirm Password"
        />
        <input
          className="my-2 h-12 w-3/4 border px-6 uppercase"
          placeholder="*First Name"
        />
        <input
          className="my-2 h-12 w-3/4 border px-6 uppercase"
          placeholder="*Last Name"
        />
        <div className="my-2 flex w-3/4 items-center justify-center">
          <input type="checkbox" className="mx-6" />
          <p className="text-sm">
            I have read and agree to Ralph Lauren&apos;s Privacy Notice and
            Terms of Use.
          </p>
        </div>
        <button className="m-6 w-3/4 border bg-[#041E3A] px-6 py-3 uppercase text-white">
          Create Account
        </button>
      </div>
    </div>
  );
}
