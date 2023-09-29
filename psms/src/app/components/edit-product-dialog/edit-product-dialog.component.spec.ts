import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { EditProductDialogComponent } from './edit-product-dialog.component'
import { Product } from '../../classes/Product'

describe('EditProductDialogComponent', () => {
  let component: EditProductDialogComponent
  let fixture: ComponentFixture<EditProductDialogComponent>
  let dialogRef: MatDialogRef<EditProductDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductDialogComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: new Product('', '', 0, 0) }
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductDialogComponent)
    component = fixture.componentInstance
    dialogRef = TestBed.inject(MatDialogRef)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})