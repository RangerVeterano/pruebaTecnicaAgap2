import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './components/list/list.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';


@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,
    ListComponent,
    HeroFormComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class HeroesModule { }
