import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProUpadteComponent } from './pro-upadte.component';

describe('ProUpadteComponent', () => {
  let component: ProUpadteComponent;
  let fixture: ComponentFixture<ProUpadteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProUpadteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProUpadteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
