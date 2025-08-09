import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";

const DashboardPage = async () => {
  const authUser = await auth();
  const currentUserObj = await currentUser(); //in client use -> useUser and useAuth hooks

  return (
    <React.Fragment>
      <main className="w-full h-screen flex flex-col space-y-5">
        <h3 className="text-3xl underline underline-offset-8 decoration-indigo-300 capitalize text-center font-bold p-3 text-indigo-500">
          Welcome {currentUserObj?.fullName}
        </h3>
        <pre>{JSON.stringify(authUser, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default DashboardPage;
