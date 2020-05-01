import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-footer-en',
  templateUrl: './footerEn.component.html',
  styleUrls: ['./footerEn.component.scss']
})
export class FooterEnComponent implements OnInit {
  constructor(
    private service: TranslocoService
  ) { }

  currentYear: any;
  selectedLang;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.selectedLang = this.service.getActiveLang();
  }

}
