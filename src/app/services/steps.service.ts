import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepModel } from '../models/step.model';
import { Router } from '@angular/router';

const STEPS = [
  { stepIndex: 1, isComplete: false },
  { stepIndex: 2, isComplete: false },
  { stepIndex: 3, isComplete: false }
];

const routesConfig: Array<any> = [
  {
    route: '/step1',
    rules: []
  },
  {
    route: '/step2',
    rules: []
  },
  {
    route: '/step3',
    rules: []
  },
]

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  steps: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
  currentStep: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(null);

  dynamicSteps: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
  currentDynamicStep = 0;

  constructor(
    private router: Router
  ) {
    this.currentStep.next(this.steps.value[0]);
  }

  setCurrentStep(step: StepModel): void {
    this.currentStep.next(step);
  }

  getCurrentStep(): Observable<StepModel> {
    return this.currentStep.asObservable();
  }

  getSteps(): Observable<StepModel[]> {
    return this.steps.asObservable();
  }

  moveToNextStep(): void {
    const index = this.currentStep.value.stepIndex;

    if (index < this.steps.value.length) {
      this.currentStep.next(this.steps.value[index]);
    }
  }

  isLastStep(): boolean {
    return this.currentStep.value.stepIndex === this.steps.value.length;
  }

  public updateNextDynamicStep(): void {
    let routeLength = routesConfig.length;
    this.router.navigateByUrl(routesConfig[this.currentDynamicStep].route);
    this.currentDynamicStep = this.currentDynamicStep + 1;
  }
}
