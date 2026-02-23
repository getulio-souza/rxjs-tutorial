import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipUntilOperatorComponent } from './skip-until-operator.component';

describe('SkipUntilOperatorComponent', () => {
  let component: SkipUntilOperatorComponent;
  let fixture: ComponentFixture<SkipUntilOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkipUntilOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipUntilOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
