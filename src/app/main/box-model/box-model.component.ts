import { Component, EventEmitter, Input, Output } from '@angular/core';
import Box from 'src/app/models/box.model';

@Component({
  selector: 'app-box-model',
  templateUrl: './box-model.component.html',
  styleUrls: ['./box-model.component.css']
})
export class BoxModelComponent {
  @Input()
  index = 0


  @Input()
  openModal = false;
  @Input()
  listingImageUrl: string | undefined = ''

  @Input()
  boxes: Array<Box> | undefined = []
  @Input()
  selectedId: string | undefined = ''

  @Input()
  selectedBox: undefined | Box = undefined

  @Output()
  onSelectedBox = new EventEmitter<any>();

  @Output()
  onSelectedIndexE = new EventEmitter<any>();

  closeModal() {
    this.openModal = !this.openModal;
  }
  onSelctedBox(box: Box) {
    this.selectedBox = box;
    this.selectedId = box.id;
    this.onSelectedBox.emit(box);

  }
  onSelectedIndex(index: number) {
    this.index = index;
    this.onSelectedIndexE.emit(index);
  }


  calculateAllProducts() {
    let total = 0;
    let availableTotal = 0
    
  }
  ngOnInit() {
    console.log( this.selectedId)
    } 
  
  
}
