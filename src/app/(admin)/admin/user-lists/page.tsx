import React from "react";
import { clerkClient } from "@clerk/nextjs/server";
import UserTable from "@/components/UserTable";

const UserLists = async () => {
  const client = await clerkClient();
  const users = await client.users
    .getUserList()
    .then((res) => res.data)
    .catch((err) => err instanceof Error && err.message);

  // console.log(users);

  return (
    <React.Fragment>
      <main className="">
        <p className="p-2 text-center underline underline-offset-8 decoration-amber-500 text-2xl font-semibold">
          User Lists
        </p>
        <section className="p-4 my-3">
          {users && Array.isArray(users) && <UserTable users={users} />}
        </section>
      </main>
    </React.Fragment>
  );
};

export default UserLists;
