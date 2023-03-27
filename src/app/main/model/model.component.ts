import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.openModel, 'FROM_MODEL')
  }
  @Input()
  content = 'attention'
  @Input()
  openModel = true

  
  controlModel() {
    this.openModel = !this.openModel
  }
}
