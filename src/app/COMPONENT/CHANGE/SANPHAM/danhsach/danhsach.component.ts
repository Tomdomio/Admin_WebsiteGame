import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../../SINGGUMNOPROXY/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-danhsach',
  templateUrl: './danhsach.component.html',
})
export class DanhsachComponent extends BaseComponent implements OnInit {

  danhsachsp: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._api.get('api/SanPham/get-sanpham').takeUntil(this.unsubscribe).subscribe(res => {
      this.danhsachsp = res;
    }); 
  }
}
