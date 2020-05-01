import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-chatting',
    templateUrl: './chatting.component.html',
    styleUrls: ['./chatting.component.scss']
})
export class ChattingComponent implements OnInit {

    constructor(
        private service: TranslocoService
    ) { }

    selectedLang;

    ngOnInit() {
        this.selectedLang = this.service.getActiveLang();
    }

}
