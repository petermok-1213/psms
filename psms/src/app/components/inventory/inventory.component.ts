/**
 * Refactor to ListView later
 */

import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/api.service'

import { Product } from '../../classes/Product'
import { EditProductDialogComponent } from '../edit-product-dialog/edit-product-dialog.component'
import { MatDialog } from '@angular/material/dialog'

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

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) { }

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
        let id = item._id
        return new Product(item.name, item.tag, item.quantity, item.price, id)
      })
    })
  }

  /**
   * Adds a new product to the inventory using the API service and updates the inventory array.
   */
  addProduct() {
    this.newProduct.price = Number(this.newProduct.price)
    this.newProduct.quantity = Number(this.newProduct.quantity)
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

  /**
   * Updates the given product in the inventory using the API service.
   * @param product The product to update.
   */
  updateProduct(product: Product) {
    product.price = Number(product.price)
    product.quantity = Number(product.quantity)
    this.apiService.updateProduct(product).subscribe({
      next: (response: any) => {
        console.log('Product updated:', response)
        this.fetchInventory()
      },
      error: (error: any) => {
        console.error('Error updating product:', error)
      }
    })
  }

  /**
   * Increases the quantity of the given product by 1.
   * @param product The product to increase the quantity of.
   */
  moreQty(product: Product) {
    product.quantity++
    this.updateProduct(product)
  }

  /**
   * Decreases the quantity of the given product by 1.
   * @param product The product to decrease the quantity of.
   */
  lessQty(product: Product) {
    if (product.quantity > 0) {
      product.quantity--
      this.updateProduct(product)
    }
  }
  
  /**
   * Opens the edit product dialog for the given product.
   * @param product The product to edit.
   */
  editProduct(product: Product) {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      width: '400px',
      data: product
    })

    dialogRef.afterClosed().subscribe((result: Product | undefined) => {
      if (result) {
        this.updateProduct(result)
      }
    })
  }

  /**
   * Deletes the given product from the inventory.
   * @param product The product to delete.
   */
  deleteProduct(product: Product) {
    this.apiService.deleteProduct(product).subscribe({
      next: (response) => {
        console.log('Product deleted:', response)
        this.fetchInventory()
      },
      error: (error: any) => {
        console.error('Error deleting product:', error)
      }
    })
  }

}
