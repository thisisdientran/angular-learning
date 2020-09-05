import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1NewComponent } from './baitap1-new.component';

describe('Baitap1NewComponent', () => {
  let component: Baitap1NewComponent;
  let fixture: ComponentFixture<Baitap1NewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1NewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
