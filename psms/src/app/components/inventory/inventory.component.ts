import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  tempDb = [
    {
      name: "Coffee",
      qty: 10,
      tag: "coffee"
    },
    {
      name: "Beef",
      qty: 1,
      tag: "meat"
    },
    {
      name: "Pork",
      qty: 2,
      tag: "meat"
    }
  ]

  onClickMinus(item: any) {
    item.qty -= 1
  }

  onClickPlus(item: any) {
    item.qty += 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
