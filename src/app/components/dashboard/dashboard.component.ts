import { Component } from '@angular/core';
import { GoalWidgetComponent } from '../ui-components/goal-widget/goal-widget.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GoalWidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
