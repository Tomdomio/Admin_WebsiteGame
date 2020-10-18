import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemComponent } from './them.component';

describe('ThemComponent', () => {
  let component: ThemComponent;
  let fixture: ComponentFixture<ThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
