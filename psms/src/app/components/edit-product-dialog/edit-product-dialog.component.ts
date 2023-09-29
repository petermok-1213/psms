import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Product } from '../../classes/Product'

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) { }

  /**
   * Saves the changes made to the product and closes the dialog.
   */
  save() {
    this.dialogRef.close(this.data)
  }

  /**
   * Closes the dialog without saving any changes.
   */
  cancel() {
    this.dialogRef.close()
  }

}