import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-header-home-en',
    templateUrl: './headerHomeEn.component.html',
    styleUrls: ['./headerHomeEn.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class HeaderHomeEnComponent {

    constructor(
        private router: Router
    ) { }

    change(lang: string) {
        if (lang === 'tr') { this.router.navigateByUrl('/anasayfa'); } else {
            this.router.navigateByUrl('/home');
        }
    }

}
