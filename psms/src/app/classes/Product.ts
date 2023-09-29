/*
    A generic Product class representing all products stored in the inventory
*/
export class Product {

    _id?: String
    name: String
    tag: String
    price: number
    quantity: number

    constructor(name: String, tag: String, quantity: number, price: number, _id?: String) {
        this.name = name
        this.tag = tag
        this.price = price
        this.quantity = quantity
        if (_id) { this._id = _id }
    }

}
