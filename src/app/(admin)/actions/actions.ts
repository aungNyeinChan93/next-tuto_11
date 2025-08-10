'use server'

import { Role } from "@/types/globals";
import { auth, clerkClient } from "@clerk/nextjs/server"


export async function setRole(formData: FormData) {
    try {
        const client = await clerkClient()
        const { sessionClaims } = await auth();

        // !admin -> throw err
        if (sessionClaims?.metadata?.role !== 'admin') throw new Error('User Admin Only / status -403 UnAuthorized');


        // update user
        const id = formData.get('id') as string;
        const role = formData.get('role') as Role;

        await client.users.updateUser(id, {
            publicMetadata: { role }
        })

    } catch (error) {
        console.error(error)
    }
};


export async function removeRole(formData: FormData) {
    try {
        const client = await clerkClient()
        const { sessionClaims } = await auth();

        // !admin -> throw err
        if (sessionClaims?.metadata?.role !== 'admin') throw new Error('User Admin Only / status -403 UnAuthorized');


        // update user
        const id = formData.get('id') as string;

        await client.users.updateUser(id, {
            publicMetadata: { role: null }
        })

    } catch (error) {
        console.error(error)
    }
}