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

  }

}
