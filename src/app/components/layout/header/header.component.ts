import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class HeaderComponent {

    constructor(
        private router: Router
    ) { }

    change(lang: string) {
        if (lang === 'tr') { this.router.navigateByUrl('/anasayfa'); } else {
            this.router.navigateByUrl('/home');
        }
    }

}
