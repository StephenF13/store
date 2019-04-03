import {Injectable} from '@angular/core';

import * as _ from 'lodash';
import * as $ from 'jquery';

let products = require('./products.json');
let BASEURL = window.location.href;
BASEURL = BASEURL.substring(0, BASEURL.length - 1);


@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor() {
    }

    list() {
        return new Promise((resolve, reject) => {

            products.map((product, i) => {
                // transforme pour slug
                products[i].titleSlug = _.kebabCase(product.name);
                // la route
                products[i].router = '/products/' + products[i].titleSlug + '/' + products[i].id;
                // l'url
                products[i].url = BASEURL + products[i].router;
            });

            resolve(products); // retourne les posts
        });
    }

    view(id: any) {
        return new Promise((resolve, reject) => {
            this.list().then((products: any[]) => {
                let product = _.find(products, (p) => {
                    return p.id == id;
                });

                return product ? resolve(product) : reject('product not found');
            });
        });
    }

    search(keyword: string) {
        return new Promise((resolve, reject) => {
            this.list().then((products: any[]) => {
                let items: any[];
                if (products.length) {
                    items = _.filter(products, (p) => {
                        return p.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
                    });
                }
                resolve(items);
            });
        });
    }

    scrollTop() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    }
}
