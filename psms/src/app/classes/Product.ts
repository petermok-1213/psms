/*
    A generic Product class representing all products stored in the inventory
*/
export class Product {

    name: String
    tag: String
    price: number
    quantity: number

    constructor(name: String, tag: String, quantity: number, price: number) {
        this.name = name
        this.tag = tag
        this.price = price
        this.quantity = quantity
    }

}
