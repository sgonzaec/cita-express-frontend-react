export const DecodeImage = (base64: string | undefined): string | undefined => {
    if (!base64) return undefined
    return atob(base64)
}