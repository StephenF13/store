import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import {MenuService} from '../../providers/menu.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
    modal: boolean = false;
    constructor(public menu: MenuService) { }

    ngOnInit() {
        document.addEventListener('scroll', (e) => {
            if (document.body.scrollTop > 65) {
                $('app-header nav').addClass('fixed');
            } else {
                $('app-header nav').removeClass('fixed');
            }
            this.menu.fix();
        }, true);
    }

    hideSearch() {
        this.modal = false;
    }

    showSearch() {
        this.modal = true;
    }
}