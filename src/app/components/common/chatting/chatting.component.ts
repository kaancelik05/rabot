import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-chatting',
    templateUrl: './chatting.component.html',
    styleUrls: ['./chatting.component.scss']
})
export class ChattingComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    url;

    ngOnInit() {
        this.url = this.router.url;
    }

}
