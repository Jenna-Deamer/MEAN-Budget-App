import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private http: HttpClient) {}
  // Set API URL class level so all methods share it
  serverUrl: string = environment.serverUrl;
  
  // GET all goals
  getGoals() {
    // Use HttpClient to call express API
    return this.http.get(`${this.serverUrl}/api/goals`);
  }

  // POST a new goal
  addGoal(goal: any) {
    // Pass URL & data we want to submit
    return this.http.post(`${this.serverUrl}/api/goals`, goal);
  }

  // GET a single goal by ID
  getGoalById(goalId: string) {
    return this.http.get(`${this.serverUrl}/api/goals/${goalId}`);
  }

  // PUT update a goal
  updateGoal(goal: any) {
    console.log('Goal Update service called');

    return this.http.put(
      `${this.serverUrl}/api/goals/${goal._id}`,
      goal
    );
  }
}
