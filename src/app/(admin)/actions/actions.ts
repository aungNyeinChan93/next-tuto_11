'use server'

import { Role } from "@/types/globals";
import { auth, clerkClient } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";

export const client = await clerkClient()

export async function setRole(formData: FormData) {
    try {
        const { sessionClaims, userId } = await auth();

        // !admin -> throw err
        if (sessionClaims?.metadata?.role !== 'admin') throw new Error('User Admin Only / status -403 UnAuthorized');


        // update user
        const id = formData.get('id') as string;
        const role = formData.get('role') as Role;

        if (userId == id) throw new Error('can not modify own account');

        await client.users.updateUser(id, {
            publicMetadata: { role }
        })

        revalidatePath('/admin/user-lists')

    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message)
        }
    }
};


export async function removeRole(formData: FormData) {
    try {

        const { sessionClaims, userId } = await auth();

        // !admin -> throw err
        if (sessionClaims?.metadata?.role !== 'admin') throw new Error('User Admin Only / status -403 UnAuthorized');

        // update user
        const id = formData.get('id') as string;

        if (userId == id) throw new Error('can not modify own account');

        await client.users.updateUser(id, {
            publicMetadata: { role: null }
        })

        revalidatePath('/admin/user-lists')

    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message)
        }
    }
}