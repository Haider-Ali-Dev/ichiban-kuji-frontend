import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-generate-image-link',
  templateUrl: './generate-image-link.component.html',
  styleUrls: ['./generate-image-link.component.css']
})
export class GenerateImageLinkComponent {
  imageLink = ""
  fileForm = new FormData();

  constructor(private admin: AdminService) {}

  changeFile(event: any) {
    this.fileForm.append('file', event.target.files[0]);
  
  }

  generateLink() {
    this.admin.generateImageLink(this.fileForm).subscribe((data: any) => {
      console.log(data)
      this.imageLink = data;
    });
  }




}
