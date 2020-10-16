import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { BaseComponent } from '../../../SinGGumNoProxy/base-component';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/combineLatest';
declare var $: any;

@Component({
  selector: 'app-them',
  templateUrl: './them.component.html',
})
export class ThemComponent extends BaseComponent implements OnInit {
  ThemComponent;
  public uploadedFiles: any[] = [];
  public formdata: any;
  public doneSetupForm: any; 
  public theloai: any;
  public isCreate:any;
  submitted = false;
  @ViewChild(FileUpload, { static: false }) file_image: FileUpload;

  constructor( private fb: FormBuilder, injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
  }

  onSubmit(value) {
    this.submitted = true;
    if (this.formdata.invalid) {
      return;
    }
    if(this.isCreate) { 
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
          image:data_image,
          TenTheLoai:value.TenTheLoai    
          };
        this._api.post('/api/TheLoai/create-theloai',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm thành công');
          });
      });
    } else { 
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
           image:data_image,
           TenTheLoai:value.TenTheLoai,
           id:this.theloai.id,          
          };
        this._api.post('/api/TheLoai/update-theloai',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          });
      });
    }
   
  } 
}