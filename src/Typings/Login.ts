export type LoginPayload = {
    user: string,
    password: string
}

export type LoginResponse = {
    ok: boolean,
    message : string
}