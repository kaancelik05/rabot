import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
