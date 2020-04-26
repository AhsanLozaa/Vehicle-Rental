import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbikeComponent } from './listbike.component';

describe('ListbikeComponent', () => {
  let component: ListbikeComponent;
  let fixture: ComponentFixture<ListbikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
