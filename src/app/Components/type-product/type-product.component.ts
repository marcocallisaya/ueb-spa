import { Component, OnInit } from '@angular/core';
import {TypeProductServiceService} from 'src/app/type-product-service.service';

@Component({
  selector: 'app-type-product',
  templateUrl: './type-product.component.html',
  styleUrls: ['./type-product.component.scss']
})
export class TypeProductComponent implements OnInit {

  constructor(private type: TypeProductServiceService) { }

  data ;
  ngOnInit(): void {
    // cargando informacion
    this.loadData();
    
  }

  loadData() {
    this.type.getAll().subscribe((res: any) => { this.data = res.data; console.log(res); });
  }


  //funcion para eliminar
  delete(id) {
    this.type.delete(id).subscribe(res => {this.loadData(); });
  }

}
