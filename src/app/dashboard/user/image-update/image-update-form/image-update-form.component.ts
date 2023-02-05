import { compileDeclarePipeFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { empty } from 'rxjs';
import { Image } from 'src/app/model/image';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-image-update-form',
  templateUrl: './image-update-form.component.html',
  styleUrls: ['./image-update-form.component.scss']
})
export class ImageUpdateFormComponent {
  public file: File
  public title: string
  public description: string
  public previewSrc: string
  public errorMessage: string
  public message: string


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
  onSubmit(form: NgForm) {
    this.message = ''
    this.errorMessage = ''

    const formData = new FormData()
    formData.append('file', this.file)
    formData.append('title', this.title)
    formData.append('description', this.description)

    this._imageservice.saveImage(formData).subscribe({
      next: () => this.clearForm(form),
      error: (error) => this.errorMessage = error

    });

  }

  clearForm(form: NgForm){
    this.message = "Your image as been upload!"
    this.title = ''
    this.description= ''
    this.previewSrc= ''
    form.reset()
  }
}
