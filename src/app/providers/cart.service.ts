import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    newItem: any = {
        qty: 0,
        product: {}
    };


    items: any[] = [];

    constructor(public storage: StorageService) {
        this.items = storage.get('cart') || [];
    }

    // ajouter un item au panier
    add(item: any = {}) {
        return new Promise((resolve, reject) => {

            if (!item.id) {
                reject('add an item !');
            } else {
                let exists = false;

                this.items.map((row) => {

                    if (row.product.id == item.id) {
                        row.qty++;
                        exists = true;
                    }
                });


                if (!exists) {
                    this.newItem.product = item;
                    this.newItem.qty = 1;
                    this.items.push(this.newItem);
                }

                this.storage.set('cart', this.items);
                resolve(this.items);
            }
        });
    }

    clear() {
        this.storage.set('cart', []);
        this.items = [];
        console.info('Cart is empty');
    }
}
