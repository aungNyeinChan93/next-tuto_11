"use client";

import React, { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const { userId, isLoaded, sessionId } = useAuth();
  const { user, isSignedIn } = useUser();

  //   console.log({ token: getToken().then((res) => res), user, isSignedIn });

  //   if (!userId || !isLoaded) return null;

  return (
    <React.Fragment>
      <main className="w-full h-screen flex flex-col justify-center items-center space-y-6">
        <div className="counter p-4 text-center flex gap-9 items-center ">
          <p className="text-3xl">{count}</p>
          <button
            className="py-2 px-4 rounded-2xl border border-red-500"
            type="button"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div className="user">
          {userId && isLoaded && isSignedIn && (
            <>
              {userId} || isLoaded ={isLoaded ? " true" : " fasle"} ||{" "}
              {sessionId} || name = {user?.lastName}
            </>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Counter;
