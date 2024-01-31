import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMonedasComponent } from './detalle-monedas.component';

describe('DetalleMonedasComponent', () => {
  let component: DetalleMonedasComponent;
  let fixture: ComponentFixture<DetalleMonedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleMonedasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleMonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
