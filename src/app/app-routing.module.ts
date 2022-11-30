import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { CompletePageComponent } from './pages/complete-page/complete-page.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormPageComponent
  },
  {
    path: 'complete',
    component: CompletePageComponent
  },
  {
    path: 'step1',
    component: Step1Component
  },
  {
    path: 'step2',
    component: Step2Component
  },
  {
    path: 'step3',
    component: Step3Component
  },
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
