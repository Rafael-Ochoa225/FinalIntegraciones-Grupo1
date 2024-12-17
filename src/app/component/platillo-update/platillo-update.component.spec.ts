import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloUpdateComponent } from './platillo-update.component';

describe('PlatilloUpdateComponent', () => {
  let component: PlatilloUpdateComponent;
  let fixture: ComponentFixture<PlatilloUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatilloUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatilloUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
