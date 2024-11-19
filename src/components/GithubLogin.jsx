import React from "react";
import { FaGithub } from "react-icons/fa6";
import supabase from "../../utils/supabase/config";


async function signInWithGithubH() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  if (error) {
    toast.error("ناموفق");
  }
  if (data) {
    data;
  }
}

export default function GithubLogin() {
  return (
    <>
      <div
        className="flex justify-center items-center gap-1 bg-[#0C0D0E] text-white py-2 px-4 rounded mb-3"
        onClick={signInWithGithubH}
      >
        <FaGithub className="w-5 h-5" />
        <button className="">ورود با گیت هاب</button>
      </div>
      <div className="flex items-center gap-2 mt-4 mb-3">
        <hr className="h-[1.5px] w-full bg-[#CDCFD2] rounded-full" />
        <span className="text-[#696C6F]">یا</span>
        <hr className="h-[1.5px] w-full bg-[#CDCFD2] rounded-full" />
      </div>
    </>
  );
}
