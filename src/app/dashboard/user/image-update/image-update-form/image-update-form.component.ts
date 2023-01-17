import { Component } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-image-update-form',
  templateUrl: './image-update-form.component.html',
  styleUrls: ['./image-update-form.component.scss']
})
export class ImageUpdateFormComponent {
  file: File
  title: string
  description: string
  previewSrc: string


  constructor(private _imageservice: ImageService) { }

  selectFile($event: Event) {
    const files: FileList | null = ($event.target as HTMLInputElement).files

    if (files && files[0]) {
      this.file = files[0]

      const reader = new FileReader();
      reader.readAsDataURL(this.file)
      reader.onload = () => this.previewSrc = reader.result as string
    }

  }
  onSubmit() {

    const formData = new FormData()
    formData.append('newImage', this.file)

    this._imageservice.uploadImage(formData, this.title, this.description)
  }
}
