/* eslint-disable @typescript-eslint/no-explicit-any */
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
                        {user?.fullName}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                        {user?.emailAddresses[0]?.emailAddress}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                        {user?.publicMetadata!.role ?? "user"}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                        {/* {new Date(
                          user?.updatedAt.toString()
                        ).toLocaleDateString()} */}
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <button className="cursor-pointer text-blue-600 font-medium mr-4">
                          Edit
                        </button>
                        <button className="cursor-pointer text-red-600 font-medium">
                          Delete
                        </button>
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
