/* eslint-disable @typescript-eslint/no-explicit-any */
import { removeRole, setRole } from "@/app/(admin)/actions/actions";
import React from "react";

const UserTable = async ({ users }: { users: any }) => {
  return (
    <React.Fragment>
      <main>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 whitespace-nowrap">
              <tr>
                <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Joined At
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
              {users &&
                users?.map((user: any, idx: string | number) => {
                  return (
                    <tr key={idx}>
                      <td className="px-4 py-4 text-sm text-slate-900 font-medium">
                        {user?.fullName} || {user.id}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                        {user?.emailAddresses[0]?.emailAddress}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                        {(user?.publicMetadata!.role as string) ?? "guest"}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                        {/* {new Date(
                          user?.updatedAt.toString()
                        ).toLocaleDateString()} */}
                      </td>
                      <td className="px-4 py-4 text-sm ">
                        <div className="flex">
                          <form action={setRole}>
                            <input type="hidden" name="id" value={user.id} />
                            <input type="hidden" name="role" value={"admin"} />
                            <button
                              type="submit"
                              className="cursor-pointer text-blue-600 text-xs  font-medium mr-4"
                            >
                              Make Admin
                            </button>
                          </form>
                          <form action={setRole}>
                            <input type="hidden" name="id" value={user.id} />
                            <input type="hidden" name="role" value={"user"} />
                            <button
                              type="submit"
                              className="cursor-pointer text-blue-600 font-medium mr-4 text-xs"
                            >
                              Make User
                            </button>
                          </form>
                          <form action={removeRole}>
                            <input type="hidden" name="id" value={user.id} />
                            <button
                              type="submit"
                              className="cursor-pointer text-red-600 font-medium text-xs"
                            >
                              Remove Role
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </main>
    </React.Fragment>
  );
};

export default UserTable;
