import { Component, EventEmitter, Input, Output } from '@angular/core';
import Box from 'src/app/models/box.model';

@Component({
  selector: 'app-box-model-product',
  templateUrl: './box-model-product.component.html',
  styleUrls: ['./box-model-product.component.css']
})
export class BoxModelProductComponent {
  @Input()
  index = 0
  @Input()
  listingImageUrl: string | undefined = ''

  @Input()
  box: Box | any = null
  totalProducts = 0;
  totalAvailableProducts = 0;

  @Input()
  selectedId: undefined | string =''

  @Input()
  selectedIndex = 0
  @Input()
  selectedBox: undefined | Box = undefined
  @Output() 
  selectedBoxChange = new EventEmitter<any>();

  @Output()
  selectedIndexChange = new EventEmitter<any>();

  ngOnInit() {
    console.log(this.box.id === this.selectedBox?.id)
    console.log(this.box.id)
    this.calculateAllProducts()
  }
  calculateAllProducts() {
    let total = 0;
    let availableTotal = 0
    this.box.products.forEach((product: any) => {
      total += product.ini_amount
      availableTotal += product.amount
    })
    this.totalProducts = total;
    this.totalAvailableProducts = availableTotal;
  }

  transformLevel(level: number) {

    switch (level) {
      case 0:
        return 'A'
      case 1:
        return 'B'
      case 2:
        return 'C'
      case 3:
        return 'D'
      case 4:
        return 'E'
      case 5:
        return 'F'
      case 6:
        return 'G'
      case 7:
        return 'H'
      case 8:
        return 'I'
      case 9:
        return 'J'
      case 10:
        return 'K'
      case 11:
        return 'L'
      case 12:
        return 'M'
      case 13:
        return 'N'
      case 14:
        return 'O'
      case 15:
        return 'P'
      case 16:
        return 'Q'
      case 17:
        return 'R'
      case 18:
        return 'S'
      case 19:
        return 'T'
      case 20:
        return 'U'
      case 21:
        return 'V'
      case 22:
        return 'W'
      case 23:
        return 'X'
      case 24:
        return 'Y'
      case 25:
        return 'Z'
      default:
        return 'Last Level'
    }
  }

  selectBox() {
    this.selectedBox = this.box;
    this.selectedId = this.box.id
    this.selectedBoxChange.emit(this.box)
    this.selectedIndexChange.emit(this.index + 1)
    console.log(this.index)
  }
  showId() {
    console.log(`
    MY BOX ID: ${this.box.id}
    SELECTED BOX ID: ${this.selectedBox?.id}
    `)
  }

  
}
