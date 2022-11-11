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

  tagSet = new Set()
  filterDict = new Map()
  outList = this.tempDb;

  constructor() { }

  ngOnInit(): void {
    this.tempDb.forEach((item) => {
      this.tagSet.add(item.tag)
    })
    this.tagSet.forEach((tag) => {
      this.filterDict.set(tag, false)
    })
  }

  // Called upon + button of each card is clicked
  onClickMinus(item: any) {
    item.qty -= 1
  }

  // Called upon - button of each card is clicked
  onClickPlus(item: any) {
    item.qty += 1
  }

  // Filter tempDb based on the values of each tag in tagDict
  filterList() {
    if (!this.hasFilter())                    // No filter, return whole list
      this.outList = this.tempDb
    else {                                    // Return a filtered list
      this.outList = new Array()
      this.tempDb.forEach((item) => {
      if (this.filterDict.get(item.tag)) {
          this.outList.push(item)
        }
      })   
    }
  }

  // Called upon selection of checkbox
  onSelectionChange(tag: any) {
    this.filterDict.set(tag, !this.filterDict.get(tag))   // toggle filter
    this.filterList()
  }

  // For "All" radio, return true if there is at least 1 filter, false otherwise
  hasFilter() {
    let filter = false
    this.filterDict.forEach((value) => {
      filter = filter || value
    })
    return filter
  }

  // Called upon "ClearFilterButton" is clicked, removes all filters
  clearFilter() {
    for (let key of this.filterDict.keys()) {
      this.filterDict.set(key, false)
    }
    this.filterList()
  }



}
