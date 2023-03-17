import { Component, Input } from '@angular/core';
import Listing from 'src/app/models/listing.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.css']
})
export class BoxFormComponent {
  @Input()
  listings: Array<Listing> = [];
  @Input()
  productList: Array<{ title: string, description: string, level: number, amount: number }> = [];
  title = new FormControl('', [
    Validators.required
  ])
  description = new FormControl('',  [
    Validators.required
  ])
  level = new FormControl(0,  [
    Validators.required
  ])
  amount = new FormControl(0,  [
    Validators.required,
    Validators.min(1)
  ])
  listingForm = new FormGroup({
    title: this.title,
    description: this.description,
    level: this.level,
    amount: this.amount
  })

  addProduct() {
    this.productList.push({
      title: this.title.value as string,
      description: this.description.value as string,
      level: Number(this.level.value),
      amount: this.amount.value as number
    })
    this.listingForm.reset()
  }
}
