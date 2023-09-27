import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/api.service'

import { Product } from '../../classes/Product'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  // An array of Product objects representing the current inventory.
  inventory: Array<Product> = []
  // A new Product object representing the product to be added.
  newProduct: Product = new Product('', '', 0, 0)

  constructor(private apiService: ApiService) { }

  /**
   * Initializes the component by fetching the current inventory.
   */
  ngOnInit(): void {
    this.fetchInventory()
  }

  /**
  * Fetches the current inventory from the API service and updates the inventory array.
  */
  fetchInventory() {
    this.apiService.getInventory().subscribe((response: any) => {
      this.inventory = response.map((item: any) => {
        return new Product(item.name, item.tag, item.quantity, item.price)
      })
    })
  }

  /**
   * Adds a new product to the inventory using the API service and updates the inventory array.
   */
  addProduct() {
    this.apiService.addProduct(this.newProduct).subscribe({
      next: (response: any) => {
        console.log('Product added:', response)
        this.newProduct = new Product('', '', 0, 0)
        this.fetchInventory()
      },
      error: (error: any) => {
        console.error('Error adding product:', error)
      }
    })
  }
}
