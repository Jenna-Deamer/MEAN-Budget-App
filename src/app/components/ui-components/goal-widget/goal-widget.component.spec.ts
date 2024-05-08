import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalWidgetComponent } from './goal-widget.component';

describe('GoalWidgetComponent', () => {
  let component: GoalWidgetComponent;
  let fixture: ComponentFixture<GoalWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
