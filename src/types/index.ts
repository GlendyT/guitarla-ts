export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}


/*agrega los atributos que quieres gregar al CartItem
export type CartItem = Pick<Guitar, "id" | "name" | "price"> & {
    quantity: number
}


remueve los atributos que quieres gregar al CartItem
export type CartItem = Omit<Guitar, "id" | "name" | "price"> & {
    quantity: number
}*/


