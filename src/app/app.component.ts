import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { TranslocoService } from '@ngneat/transloco';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit, OnDestroy {
    location: any;
    routerSubscription: any;
    selectedLang;

    constructor(private router: Router, private service: TranslocoService) {
    }

    ngOnInit(){
        this.recallJsFuntions();
        this.selectedLang = this.service.getActiveLang();
    }

    recallJsFuntions() {
        this.router.events
            .subscribe((event) => {
                if ( event instanceof NavigationStart ) {
                    $('.preloader-area').fadeIn('slow');
                }
            });
        this.routerSubscription = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
            .subscribe(event => {
                $.getScript('../assets/js/custom.js');
                $.getScript('../assets/js/conversation.js');
                $.getScript('../assets/js/conversationEn.js');
                $('.preloader-area').fadeOut('slow');
                this.location = this.router.url;
                if (!(event instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }
}
