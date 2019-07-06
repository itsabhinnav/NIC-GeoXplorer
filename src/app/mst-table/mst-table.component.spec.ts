import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstTableComponent } from './mst-table.component';

describe('MstTableComponent', () => {
  let component: MstTableComponent;
  let fixture: ComponentFixture<MstTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
