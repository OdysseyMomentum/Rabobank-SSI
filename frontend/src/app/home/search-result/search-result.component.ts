import { Component, Input, OnInit } from '@angular/core';
import { ICategory, IDocument, IOrganisation } from '../../common/interfaces';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() result: any;
  @Input() resultType: string;
  issuerNames: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.resultType === resultTypes.document) {
      this.issuerNames = this.result.issuers.map(x => x.name).join(', ');
    }
  }

}

export enum resultTypes {
  document = 'document',
  organisation = 'organisation',
  category = 'category'
}
