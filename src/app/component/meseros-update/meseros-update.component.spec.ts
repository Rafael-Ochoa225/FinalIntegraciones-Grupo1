import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeserosUpdateComponent } from './meseros-update.component';

describe('MeserosUpdateComponent', () => {
  let component: MeserosUpdateComponent;
  let fixture: ComponentFixture<MeserosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeserosUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeserosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
