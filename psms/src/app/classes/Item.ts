/*
    A generic Item class representing all item stored in the inventory
*/
class Item {
    name: String;           // Item name
    tag: String;            // a category of the Item ("Meat", "Veggies")
    quantity: number;       // Item's quantity
    serves: number|Object;  // may or may not be null

    constructor(name: String, tag: String, quantity: number, serves: number|Object) {
        this.name = name;
        this.tag = tag;
        this.quantity = quantity;
        this.serves = serves;
    }

    /*
        If given a newProductName,
            return a new Item with its tag inherited from this item,
            and quantity = servers = this.quanity/serverPerQty;
        otherwise,
            make this.serves = this.quanity/serverPerQty and
            this.quantity = remainder of this.quanity/serverPerQty
    */
    process(serverPerQty: number, newProductName?: string) {
        if (newProductName) {
            return new Item(newProductName, this.tag, this.quantity / serverPerQty, this.quantity / serverPerQty)
        }
        this.serves = this.quantity / serverPerQty
        this.quantity = this.quantity % serverPerQty;
        return null
    }

}