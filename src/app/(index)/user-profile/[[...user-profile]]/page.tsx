import { UserProfile } from "@clerk/nextjs";
import React from "react";

const UserProfilePage = async () => {
  return (
    <React.Fragment>
      <main className="flex justify-center items-center bg-slate-800 p-8">
        <UserProfile path="/user-profile" />
        {/* <UserProfile /> */}
      </main>
    </React.Fragment>
  );
};

export default UserProfilePage;
