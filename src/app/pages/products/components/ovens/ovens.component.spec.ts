import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvensComponent } from './ovens.component';

describe('RestaurantComponent', () => {
  let component: OvensComponent;
  let fixture: ComponentFixture<OvensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OvensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
