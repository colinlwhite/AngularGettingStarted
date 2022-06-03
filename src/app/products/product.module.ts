import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';
import { RouterModule, CanActivate } from '@angular/router';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpaces,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent },
    ])
  ]
})
export class ProductModule { }
