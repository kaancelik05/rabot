import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-header-en',
    templateUrl: './headerEn.component.html',
    styleUrls: ['./headerEn.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class HeaderEnComponent {

    constructor(
        private router: Router
    ) { }

    change(lang: string) {
        if (lang === 'tr') { this.router.navigateByUrl('/anasayfa'); } else {
            this.router.navigateByUrl('/home');
        }
    }

}
