import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../providers/products.service';
import {CartService} from '../../providers/cart.service';
import {MenuService} from '../../providers/menu.service';

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent implements OnInit {

    product: any = {};

    constructor(
        public activatedRoute: ActivatedRoute,
        public router: Router,
        public products: ProductsService,
        public cart: CartService,
        public menu: MenuService
    ) {

        this.activatedRoute
            .params

            .subscribe(
                params => {
                    let id = params['id'];
                    this.products.view(id)
                        .then((product: any) => {
                            this.product = product;
                        })
                        .catch((e) => {
                            console.error(e);
                            this.router.navigate(['/404']);
                        });
                });
    }

    ngOnInit() {
    }

}
