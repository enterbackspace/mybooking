import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattComponent } from './tatt.component';

describe('TattComponent', () => {
  let component: TattComponent;
  let fixture: ComponentFixture<TattComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TattComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
