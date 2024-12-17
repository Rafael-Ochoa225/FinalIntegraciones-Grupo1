import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeserosCreateComponent } from './meseros-create.component';

describe('MeserosCreateComponent', () => {
  let component: MeserosCreateComponent;
  let fixture: ComponentFixture<MeserosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeserosCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeserosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
