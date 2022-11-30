import { Component, OnInit } from '@angular/core';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  constructor(
    private stepsService: StepsService
  ) { }

  ngOnInit(): void {

  }

  public nextStep(): void {
    this.stepsService.updateNextDynamicStep();
  }

}
