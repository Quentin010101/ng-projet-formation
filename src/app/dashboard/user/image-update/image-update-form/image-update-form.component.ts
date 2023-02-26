import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { empty } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Image } from 'src/app/model/image';
import { CategoryService } from 'src/app/service/category.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-image-update-form',
  templateUrl: './image-update-form.component.html',
  styleUrls: ['./image-update-form.component.scss'],
})
export class ImageUpdateFormComponent {
  public file: File;
  public title: string;
  public description: string;
  public previewSrc: string;
  public errorMessage: string;
  public message: string;
  public categories: Category[];
  public listCategoryId = new Array();

  constructor(
    private _imageservice: ImageService,
    private _categoryservice: CategoryService
  ) {}

  ngOnInit() {
    this._categoryservice.getAllCategory().subscribe({
      next: (data) => (this.categories = data),
    });
  }

  selectFile($event: Event) {
    const files: FileList | null = ($event.target as HTMLInputElement).files;

    if (files && files[0]) {
      this.file = files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => (this.previewSrc = reader.result as string);
    }
  }
  onSubmit(form: NgForm) {
    this.message = '';
    this.errorMessage = '';

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('title', this.title);
    formData.append('description', this.description);
    for(let i = 0; i < this.listCategoryId.length; i++){
      formData.append('categories', this.listCategoryId[i]);
    }

    this._imageservice.saveImage(formData).subscribe({
      next: (data) => {
        if (data.bool) {
          this.message = data.message;
          form.resetForm();
          this.previewSrc = '';
        } else {
          this.errorMessage = data.message;
        }
      },
    });
  }

  clearForm(form: NgForm) {
    this.title = '';
    this.description = '';
    this.previewSrc = '';
    form.reset();
  }

  onCheckboxChange(e: Event) {
    if ((e.target as HTMLInputElement)?.checked) {
      this.listCategoryId.push(Number((e.target as HTMLInputElement)?.value));
    } else {
      this.listCategoryId = this.listCategoryId.filter((c) => {
        return c != Number((e.target as HTMLInputElement)?.value);
      });
    }
  }
}
