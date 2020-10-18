import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../../SINGGUMNOPROXY/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-danhsach',
  templateUrl: './danhsach.component.html',
})
export class DanhsachComponent extends BaseComponent implements OnInit {

  danhsachloai: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._api.get('api/TheLoai/get-theloai').takeUntil(this.unsubscribe).subscribe(res => {
      this.danhsachloai = res;
     
      console.log(this.danhsachloai);
    }); 
  }
}
