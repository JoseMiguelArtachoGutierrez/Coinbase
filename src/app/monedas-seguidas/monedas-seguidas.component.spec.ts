import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedasSeguidasComponent } from './monedas-seguidas.component';

describe('MonedasSeguidasComponent', () => {
  let component: MonedasSeguidasComponent;
  let fixture: ComponentFixture<MonedasSeguidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonedasSeguidasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonedasSeguidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
