import { Component, OnInit } from '@angular/core'
import { MatCardModule } from '@angular/material/card';
import { ApiService } from 'src/app/api.service'

import { Product } from '../../classes/Product'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  inventory: Array<Product> = []
  newProduct: Product = new Product('', '', 0, 0)

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchInventory()
  }

  fetchInventory() {
    this.apiService.getInventory().subscribe((response: any) => {
      this.inventory = response.map((item: any) => {
        return new Product(item.name, item.tag, item.quantity, item.price)
      })
    })
  }

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
