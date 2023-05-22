import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  
  @Input() hero : heroe | undefined;

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
  });


  constructor(
    private fb : FormBuilder,
    private hs :HeroesService,
    private router : Router
    ) { }

  ngOnInit(): void {

    if(this.hero){
      this.miFormulario.controls['name'].patchValue(this.hero.name);
    }
  }

  guardar(){

    if(!this.miFormulario.controls['name'].errors){

      if(this.hero){
        //editar
        this.hs.editHeroe({name : this.miFormulario.value.name, id: this.hero.id });
      }else  {
        //crear
        this.hs.addHeroe({name : this.miFormulario.value.name, id: new Date().getTime() });
      }
      this.miFormulario.reset();
      this.router.navigateByUrl('/heroes')

    }
  }

}
