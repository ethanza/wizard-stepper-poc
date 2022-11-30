import { Component, OnInit } from '@angular/core';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  constructor(
    private stepsService: StepsService
  ) { }

  ngOnInit(): void {
  }

  public nextStep(): void {
    this.stepsService.updateNextDynamicStep();
  }

}
