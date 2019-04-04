import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from '../../providers/products.service';
import {CartService} from '../../providers/cart.service';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

    @Input() product: any = {};
    @Input() view: boolean = false;

    constructor(public products: ProductsService, public cart: CartService) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.products.scrollTop();
        }, 0);

    }


    addToCart(item: any) {
        this.cart.add(item).then(() => {
            console.info(item.name + ' added/updated to cart');
        }).catch(console.warn);
    }

}
