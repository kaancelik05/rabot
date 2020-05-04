import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-header-home',
    templateUrl: './headerHome.component.html',
    styleUrls: ['./headerHome.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class HeaderHomeComponent {
    constructor(
        private router: Router
    ) { }

    change(lang: string) {
        if (lang === 'tr') { this.router.navigateByUrl('/anasayfa'); } else {
            this.router.navigateByUrl('/home');
        }
    }

}
