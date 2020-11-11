import { Component,Injector,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { BaseComponent } from 'src/app/lib/base.component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;

@Component({
  selector: 'app-cate',
  templateUrl: './cate.component.html',
})
export class CateComponent extends BaseComponent implements OnInit {

  public theloai: any;
  public theloais: any;
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
      'tentheloai': ['']    
    });

   this.search();
  }

  loadPage(page) { 
    this._api.post('/api/TheLoai/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.theloais = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  } 

  search() { 
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/TheLoai/search',{page: this.page, pageSize: this.pageSize, tentheloai: this.formsearch.get
      ('tentheloai').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.theloais = res.data;
      console.log(this.theloais);
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  get f() { return this.formdata.controls; }

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
          tentheloai:value.tentheloai,
          };
          console.log(tmp);
      this._api.post('/api/TheLoai/create-theloai',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm thành công');
          this.search();
          this.closeModal();
          });
      });
    } else { 
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
          image:data_image,
          tentheloai:value.tentheloai,
          id:this.theloai.id,          
          };
        this._api.post('/api/TheLoai/update-theloai',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal();
          });
      });
    }
  } 

  onDelete(row) { 
    this._api.post('/api/TheLoai/delete-theloai',{id:row.id}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search(); 
      });
  }

  Reset() {  
    this.theloai = null;
    this.formdata = this.fb.group({
      'tentheloai': ['', Validators.required],
    }); 
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.theloai = null;
    setTimeout(() => {
      $('#createUserModal').modal('toggle');
      this.formdata = this.fb.group({
        'tentheloai': [''],
      });
      this.doneSetupForm = true;
    });
  }

  public openUpdateModal(row) {
    this.doneSetupForm = false;
    this.showUpdateModal = true; 
    this.isCreate = false;
    setTimeout(() => {
      $('#createUserModal').modal('toggle');
      this._api.get('/api/TheLoai/get-by-id/'+ row.id).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.theloai = res; 
          this.formdata = this.fb.group({
            'tentheloai': [this.theloai.tentheloai,Validators.required],
          }); 
          this.doneSetupForm = true;
        }); 
    }, 700);
  }

  closeModal() {
    $('#createUserModal').closest('.modal').modal('hide');
  }
}