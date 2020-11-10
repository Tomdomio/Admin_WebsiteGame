import { Component,Injector,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import {FileUploadModule} from 'primeng/fileupload';
import { BaseComponent } from 'src/app/lib/base.component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent extends BaseComponent implements OnInit {

  public theloai: any;
  public sanphams: any;
  public sanpham: any;
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
      'rank': [''],
      'giaban': [''],     
    });

    this._api.get('/api/TheLoai/get-theloai').takeUntil(this.unsubscribe).subscribe(res => {this.theloai = res;});
   this.search();
  }

  loadPage(page) { 
    this._api.post('/api/SanPham/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.sanphams = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  } 

  search() { 
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/SanPham/search',{page: this.page, pageSize: this.pageSize, rank: this.formsearch.get('rank').value,
      giaban: this.formsearch.get('giaban').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.sanphams = res.data;
      console.log(this.sanphams);
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  pwdCheckValidator(control){
    var filteredStrings = {search:control.value}
    var result = (new RegExp('[' + filteredStrings.search + ']', 'g') || []);
    if(control.value.length > 5 || control.value.length < 10 || !result){
        return {tennv: true};
    }
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
          tennv:value.tennv,
          account:value.account,
          password:value.password,
          rank:value.rank,
          skin:value.skin,
          giaban:value.giaban,
          id_theloai: value.id_theloai,
          trangthai:value=1,
          };
          console.log(tmp);
      this._api.post('/api/sanpham/create-sanpham',tmp).takeUntil(this.unsubscribe).subscribe(res => {
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
          tennv:value.tennv,
          account:value.account,
          password:value.password,
          rank:value.rank,
          skin:value.skin,
          giaban:value.giaban,
          id_theloai:value.id_theloai, 
          trangthai:value = 1,
          id:this.sanpham.id,          
          };
        this._api.post('/api/sanpham/update-sanpham',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal();
          });
      });
    }
  } 

  onDelete(row) { 
    this._api.post('/api/sanpham/delete-sanpham',{id:row.id}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search(); 
      });
  }

  Reset() {  
    this.sanpham = null;
    this.formdata = this.fb.group({
      'tennv': ['', Validators.required],
      'account': ['', Validators.required],
      'password': ['', Validators.required],
      'rank': ['', Validators.required],
      'skin': ['',Validators.required,],
      'id_theloai': ['', Validators.required],
      'giaban': ['', Validators.required],
      'trangthai': "1",
    }); 
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.sanpham = null;
    setTimeout(() => {
      $('#createUserModal').modal('toggle');
      this.formdata = this.fb.group({
        'tennv': [''],
        'account': ['', Validators.required],
        'password': ['', Validators.required],
        'rank': ['', Validators.required],
        'skin': ['',Validators.required,],
        'id_theloai': ['', Validators.required],
        'giaban': ['', Validators.required],
        'trangthai': "1",
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
      this._api.get('/api/sanpham/get-by-id/'+ row.id).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.sanpham = res; 
          this.formdata = this.fb.group({
            'tennv': [this.sanpham.tennv,Validators.required],
            'account': [this.sanpham.account,Validators.required],
            'password': [this.sanpham.password,  Validators.required],
            'id_theloai': [this.sanpham.id_theloai,  Validators.required],
            'skin': [this.sanpham.skin,Validators.required],
            'rank': [this.sanpham.rank, Validators.required],
            'giaban': [this.sanpham.giaban, Validators.required],
          }); 
          this.doneSetupForm = true;
        }); 
    }, 700);
  }

  closeModal() {
    $('#createUserModal').closest('.modal').modal('hide');
  }
}