import { Component,Injector,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { BaseComponent } from 'src/app/lib/base.component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;

@Component({
  selector: 'app-imagesp',
  templateUrl: './imagesp.component.html',
})
export class ImagespComponent extends BaseComponent implements OnInit {

  public image: any;
  public images: any;
  public totalRecords:any;
  public pageSize = 3;
  public page = 1;
  public uploadedFiles: any[] = [];
  public formsearch: any;
  public formdata: any;
  public doneSetupForm: any;  
  public showUpdateModal:any;
  public isCreate:any;
  submitted = false;
  @ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  
  constructor(injector: Injector, private fb: FormBuilder) {
    super(injector);
  }

  ngOnInit(): void {
    this.formsearch = this.fb.group({
      'id_sanpham': ['']    
    });

   this.search();
  }

  loadPage(page) { 
    this._api.post('/api/ImageSP/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.images = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  } 

  search() { 
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/ImageSP/search',{page: this.page, pageSize: this.pageSize, id_sanpham: this.formsearch.get
      ('id_sanpham').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.images = res.data;
      console.log(this.images);
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }
}