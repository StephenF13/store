import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {LogoComponent} from './components/logo/logo.component';
import {SearchbarComponent} from './components/searchbar/searchbar.component';
import {CartbarComponent} from './components/cartbar/cartbar.component';
import {BannerComponent} from './components/banner/banner.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {FofPageComponent} from './pages/fof-page/fof-page.component';
import {CartService} from './providers/cart.service';
import {MenuService} from './providers/menu.service';
import {ProductsService} from './providers/products.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        LogoComponent,
        SearchbarComponent,
        CartbarComponent,
        BannerComponent,
        ProductListComponent,
        ProductCardComponent,
        FooterComponent,
        HomePageComponent,
        ProductsPageComponent,
        ProductPageComponent,
        FofPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [CartService, MenuService, ProductsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
