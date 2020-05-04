import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-en',
  templateUrl: './footerEn.component.html',
  styleUrls: ['./footerEn.component.scss']
})
export class FooterEnComponent implements OnInit {

  currentYear: any;
  selectedLang;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

}
