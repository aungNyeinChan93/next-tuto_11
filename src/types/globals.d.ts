export { };

export type Role = 'admin' | 'user' | 'guest';

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Role
        }
    }

}