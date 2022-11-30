import { Component, OnInit } from '@angular/core';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  constructor(
    private stepsService: StepsService
  ) { }

  ngOnInit(): void {
  }

  
  public nextStep(): void {
    this.stepsService.updateNextDynamicStep();
  }

}
