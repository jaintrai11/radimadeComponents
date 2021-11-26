import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts$: Observable<ProductModel[]>;
  productService: EntityCollectionService<ProductModel>; //This variable represents our 'Product' entity collection. This variable will 
  //be our key to interact with the EntityCollection of our store. Using the 'EntityCollectionService' we can use predefined 'dispatchers' and 'selectors$' to communicate with the store.
  constructor(entityCollectionServiceFactory: EntityCollectionServiceFactory) {    
    this.productService =
      entityCollectionServiceFactory.create<ProductModel>("Product");
    this.allProducts$ = this.productService.entities$;
   }

  ngOnInit(): void {
    this.productService.getAll();
  }

}
