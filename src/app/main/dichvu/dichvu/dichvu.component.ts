import { Component,Injector,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { BaseComponent } from 'src/app/lib/base.component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;

@Component({
  selector: 'app-dichvu',
  templateUrl: './dichvu.component.html',
})
export class DichvuComponent extends BaseComponent implements OnInit {

  public dichvu: any;
  public dichvus: any;
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
      'tendichvu': ['']    
    });

   this.search();
  }

  loadPage(page) { 
    this._api.post('/api/DichVu/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.dichvus = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  } 

  search() { 
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/DichVu/search',{page: this.page, pageSize: this.pageSize, tendichvu: this.formsearch.get
      ('tendichvu').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.dichvus = res.data;
      console.log(this.dichvus);
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
          tendichvu:value.tendichvu,
          };
          console.log(tmp);
      this._api.post('/api/DichVu/create-dv',tmp).takeUntil(this.unsubscribe).subscribe(res => {
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
          tendichvu:value.tendichvu,
          id:this.dichvu.id,          
          };
          console.log(tmp);
        this._api.post('/api/DichVu/update-dv',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal();
          });
      });
    }
  } 

  onDelete(row) { 
    this._api.post('/api/DichVu/delete-dv',{id:row.id}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search(); 
      });
  }

  Reset() {  
    this.dichvu = null;
    this.formdata = this.fb.group({
      'tendichvu': ['', Validators.required],
    }); 
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.dichvu = null;
    setTimeout(() => {
      $('#createUserModal').modal('toggle');
      this.formdata = this.fb.group({
        'tendichvu': [''],
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
      this._api.get('/api/DichVu/get-by-id/'+ row.id).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.dichvu = res; 
          this.formdata = this.fb.group({
            'tendichvu': [this.dichvu.tendichvu,Validators.required],
          }); 
          this.doneSetupForm = true;
        }); 
    }, 700);
  }

  closeModal() {
    $('#createUserModal').closest('.modal').modal('hide');
  }
}