import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TranslocoService } from '@ngneat/transloco';

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
export class HeaderComponent implements OnInit {

    location: any;
    navClass: any;
    selectedFlagIcon = 'flag-icon flag-icon-tr';

    constructor(
        private router: Router, private service: TranslocoService
    ) { }

    ngOnInit() {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.location = this.router.url;
                    if (this.location === '/' || this.location === '/home-two' || this.location === '/home-three') {
                        this.navClass = 'navbar-area';
                    } else {
                        this.navClass = 'navbar-area navbar-style-two';
                    }
                }
            });
    }

    change(lang: string) {
        this.service.setActiveLang(lang);
        if (lang === 'tr') { this.selectedFlagIcon = 'flag-icon flag-icon-tr'; }
        if (lang === 'en') { this.selectedFlagIcon = 'flag-icon flag-icon-us'; }
    }

}
