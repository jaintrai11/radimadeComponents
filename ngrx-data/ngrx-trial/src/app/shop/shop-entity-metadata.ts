import { EntityMetadataMap } from "@ngrx/data";
import { ProductModel } from "./products/product.model";
 
export const shopEntityMetaData:EntityMetadataMap ={
    Product:{
        selectId: (prodcut:ProductModel) => prodcut.productId,
        /*
          Options props
          ==================
          filterFn,
          sortComparer,
          etc
         */
    }
}