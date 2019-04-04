import {Component} from '@angular/core';
import {StorageService} from './providers/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public storage: StorageService) {
        // storage.setDrive('local'); // local (storage) ou session (storage)
    }
}
