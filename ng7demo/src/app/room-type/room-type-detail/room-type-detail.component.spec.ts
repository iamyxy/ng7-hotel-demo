import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeDetailComponent } from './room-type-detail.component';

describe('RoomTypeDetailComponent', () => {
  let component: RoomTypeDetailComponent;
  let fixture: ComponentFixture<RoomTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
