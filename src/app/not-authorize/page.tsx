import Link from "next/link";
import React from "react";

const NotAuthorize = async () => {
  return (
    <React.Fragment>
      <main className="w-full h-screen flex justify-center items-center bg-slate-800  ">
        <div className="text-2xl text-red-600 p-3 font-semibold">
          403 Unauthorize to this Page{" "}
          <Link
            className=" text-sm text-indigo-400 underline underline-offset-8"
            href={"/"}
          >
            Refresh
          </Link>{" "}
        </div>
      </main>
    </React.Fragment>
  );
};

export default NotAuthorize;
