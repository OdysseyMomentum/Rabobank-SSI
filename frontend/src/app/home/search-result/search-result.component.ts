import { Component, Input, OnInit } from '@angular/core';
import { ICategory, IDocument, IOrganisation } from '../../common/interfaces';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() result: any;
  resultType;
  issuerNames: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.result.issuers) {
      this.resultType = resultTypes.document;
      this.issuerNames = this.result.issuers.map(x => x.name).join(', ');
    } else if (this.result.imageUrl) {
      this.resultType = resultTypes.organisation;
    } else if (this.result.documents) {
      this.resultType = resultTypes.category;
    }
  }

}

export enum resultTypes {
  document = 'document',
  organisation = 'organisation',
  category = 'category'
}
