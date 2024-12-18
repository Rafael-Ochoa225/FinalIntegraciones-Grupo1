import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListModalComponent } from './cliente-list-modal.component';

describe('ClienteListModalComponent', () => {
  let component: ClienteListModalComponent;
  let fixture: ComponentFixture<ClienteListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteListModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
