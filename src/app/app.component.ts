import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
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

    enPages = [
        '/home',
        '/chatbot-development-services',
        '/chatbot-integrations',
        '/sectoral-chatbot-solutions',
        '/chatbot-messaging-and-management-panel',
        '/who-we-are',
        '/pricing',
        '/blog-news',
        '/artificial-intelligent-chatbot',
        '/chatbot-at-universities',
        '/chatbot-in-the-healthcare-industry',
        '/en/facebook-messenger-chatbot',
        '/chatbots-for-e-commerce-website',
        '/en/whatsapp-messenger-chatbot',
        '/contact'
    ];

    trPages = [
        '/',
        '/anasayfa',
        '/chatbot-gelistirme-servisleri',
        '/chatbot-entegrasyonları',
        '/sektorel-chatbot-cozumleri',
        '/chatbot-mesajlasma-ve-yonetim-paneli',
        '/biz-kimiz',
        '/pricing',
        '/blog-haberler',
        '/yapay-zeka-destekli-chatbot',
        '/universitelerde-chatbot',
        '/saglik-sektorunde-chatbot',
        '/tr/facebook-messenger-chatbot',
        '/e-ticaret-sitesi-icin-chatbotlar',
        '/tr/whatsapp-messenger-chatbot',
        '/iletisim'
    ];
    lang;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.recallJsFuntions();

    }

    recallJsFuntions() {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
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
                if (this.enPages.includes(this.location)) {
                    this.lang = 'en';
                } else {
                    this.lang = 'tr';
                }
                console.log(this.location);
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
