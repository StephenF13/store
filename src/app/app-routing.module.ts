import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {FofPageComponent} from './pages/fof-page/fof-page.component';

const routes: Routes = [
    // homepage
    {path: '', component: HomePageComponent},
    // products
    {path: 'products', component: ProductsPageComponent},
    {path: 'products/:slug/:id', component: ProductPageComponent},
    //  404
    {path: '**', component: FofPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
