import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproducsComponent } from './showproducs.component';

describe('ShowproducsComponent', () => {
  let component: ShowproducsComponent;
  let fixture: ComponentFixture<ShowproducsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowproducsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowproducsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
