import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesCreateComponent } from './ordenes-create.component';

describe('OrdenesCreateComponent', () => {
  let component: OrdenesCreateComponent;
  let fixture: ComponentFixture<OrdenesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
