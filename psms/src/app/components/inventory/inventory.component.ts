import { Component, OnInit } from '@angular/core'
import { MatCardModule } from '@angular/material/card';
import { ApiService } from 'src/app/api.service'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  inventory: any = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getInventory().subscribe(
      (inventory) => { this.inventory = inventory }
    )
  }

  onClickGetInventory() {
    this.apiService.getInventory().subscribe(
      (inventory) => { console.log(inventory) }
    )
  }

}
