import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from '../../providers/products.service';
import {CartService} from '../../providers/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

    // declarando uma váriavel objeto do tipo any que irá armazenar o produto assim que for resolvido pelo provider mais a frente
    @Input() product: any = {};
    @Input() view: boolean = false;

    constructor(
        // instanciando nossos providers
        public products: ProductsService,
        public cart: CartService
    ) {

    }

    ngOnInit() {
        setTimeout(() => {
            // scroll to top
            this.products.scrollTop();
        }, 0);

    }

    // adiciona ao carrinho
    addToCart(item: any) {
        this.cart.add(item).then(() => {
            console.info(item.name + ' adicionado/atualizado no carrinho');
        }).catch(console.warn);
    }

}
