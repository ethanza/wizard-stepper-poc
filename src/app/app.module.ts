import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { StepsComponent } from './components/steps/steps.component';
import { StepTemplateComponent } from './components/step-template/step-template.component';
import { CompletePageComponent } from './pages/complete-page/complete-page.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    StepsComponent,
    StepTemplateComponent,
    CompletePageComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
