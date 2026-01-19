import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToObservableComponent } from './convert-to-observable.component';

describe('ConvertToObservableComponent', () => {
  let component: ConvertToObservableComponent;
  let fixture: ComponentFixture<ConvertToObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertToObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertToObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
