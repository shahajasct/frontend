import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiComponent } from './noti.component';

describe('NotiComponent', () => {
  let component: NotiComponent;
  let fixture: ComponentFixture<NotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
