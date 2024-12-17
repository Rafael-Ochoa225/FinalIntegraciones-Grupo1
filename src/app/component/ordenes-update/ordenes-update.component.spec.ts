import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesUpdateComponent } from './ordenes-update.component';

describe('OrdenesUpdateComponent', () => {
  let component: OrdenesUpdateComponent;
  let fixture: ComponentFixture<OrdenesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
