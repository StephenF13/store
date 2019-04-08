import {Component, OnInit} from '@angular/core';

import * as $ from 'jquery';
import {MenuService} from '../../providers/menu.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
    modal: boolean = false;

    constructor(public menu: MenuService) {
    }

    ngOnInit() {
    }

    hideSearch() {
        this.modal = false;
    }

    showSearch() {
        this.modal = true;
    }
}