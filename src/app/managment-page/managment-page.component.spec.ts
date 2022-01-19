import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentPageComponent } from './managment-page.component';

describe('ManagmentPageComponent', () => {
  let component: ManagmentPageComponent;
  let fixture: ComponentFixture<ManagmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
