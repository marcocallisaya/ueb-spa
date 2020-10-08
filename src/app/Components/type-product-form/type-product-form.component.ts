import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TypeProductServiceService } from 'src/app/type-product-service.service';

@Component({
  selector: 'app-type-product-form',
  templateUrl: './type-product-form.component.html',
  styleUrls: ['./type-product-form.component.scss']
})
export class TypeProductFormComponent implements OnInit {


 // Variables
 name = '';
 description = '';
 code ;
 button = false;

  constructor(private router: Router, private route: ActivatedRoute, private type: TypeProductServiceService) { }

  ngOnInit(): void {
     this.route.paramMap.subscribe((params: Params) => {
       const id = params.get('id');

       if (id != null) {
         this.code = id;
         this.button = true;
         this.type.getOne(id).subscribe((res: any) => {this.name = res.name; this.description = res.description; });
       }

     });
  }

  send(): void{
    const type = {name: this.name, description: this.description};
    console.log(type);
    this.type.send(type).subscribe(res => {console.log(res); alert('Nuevo registro exitoso'); });
    // limpiando campos
    this.name = '';
    this.description = '';
  }

    update(): void {
      console.log(this.code) ;
      const type = {name: this.name, description: this.description};
      console.log(type);
      this.type.update(type, this.code).subscribe(res => {console.log(res); alert('Actualizacion exitosa'); });
      // limpiando campos
      this.name = '';
      this.description = '';
  }

   back(): void{
    this.router.navigate(['/type']);
  }
}
