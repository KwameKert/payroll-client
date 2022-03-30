import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputFieldComponent } from './base-input-field.component';

describe('BaseInputFieldComponent', () => {
  let component: BaseInputFieldComponent;
  let fixture: ComponentFixture<BaseInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseInputFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
