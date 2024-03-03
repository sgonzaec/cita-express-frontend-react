export type ClientResponse = {
    client: client,
}

type client = {
    address: string,
    city: string,
    country: string,
    cp: string,
    email: string,
    id_client: number,
    image: string,
    lastname: string,
    name: string,
    phone: string
}