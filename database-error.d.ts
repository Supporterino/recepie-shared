export interface DatabaseError extends Error {
    database: string;
}
