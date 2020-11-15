import { Injectable } from '@angular/core';
import { ISearchResult } from '../common/interfaces';
import { DocumentService } from './document.service';
import { OrganisationService } from './organisation.service';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private docService: DocumentService,
    private orgService: OrganisationService,
    private catService: CategoryService) {
  }

  /**
   * Search for a document, org or category
   * @return mixed array of IDocument, IOrganisation, ICategory
   */
  search(query: string): ISearchResult {
    return {
      categories: this.catService.search(query),
      documents: this.docService.search(query),
      organisations: this.orgService.search(query)
    };
  }
}
