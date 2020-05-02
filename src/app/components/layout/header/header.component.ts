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
    selectedLang;

    constructor(
        private router: Router, private service: TranslocoService
    ) { }

    ngOnInit() {
        this.selectedLang = this.service.getActiveLang();
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.location = this.router.url;
                    if (this.location === '/' || this.location === '/home-two' || this.location === '/home-three' ||
                        this.location === '/home' || this.location === '/anasayfa') {
                        this.navClass = 'navbar-area';
                    } else {
                        this.navClass = 'navbar-area navbar-style-two';
                    }
                }
            });
    }

    change(lang: string) {
        this.service.setActiveLang(lang);
        this.selectedLang = this.service.getActiveLang();
        if (this.selectedLang === 'tr') { this.router.navigateByUrl('/anasayfa'); } else {
            this.router.navigateByUrl('/home');
        }
    }

}
