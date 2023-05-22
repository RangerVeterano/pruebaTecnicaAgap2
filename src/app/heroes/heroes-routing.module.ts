import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path : '',
    children: [
      {
        path : '',
        component : HomeComponent,
      },
      {
        path: 'add',
        component: FormComponent
      },
      {
        path : 'edit/:id',
        component : EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
