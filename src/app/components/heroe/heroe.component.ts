import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              // tslint:disable-next-line: variable-name
              private _heroesService: HeroesService
     ){
     // concepto observador

  this.activatedRoute.params.subscribe(params => {
    // console.log( params.id );
    this.heroe = this._heroesService.getHeroe( params.id);
    console.log( this.heroe);

   });

  }


}
