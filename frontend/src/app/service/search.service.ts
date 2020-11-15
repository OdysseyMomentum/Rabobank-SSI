import { Injectable } from '@angular/core';
import { ICategory, IDocument, IOrganisation } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() {
  }

  /**
   * Search for a document, org or category
   * @return mixed array of IDocument, IOrganisation, ICategory
   */
  search(query: string): any[] {
    const govOrg = {
      id: 'x',
      name: 'Rijksoverheid',
      description: 'x',
      imageUrl: 'x'
    } as IOrganisation;

    const raboOrg = {
      id: 'x',
      name: 'Rabobank',
      description: 'Coöperatieve Rabobank N.V.',
      imageUrl: 'https://brightlandsinnovationfactory.com/wp-content/uploads/2019/01/Rabobank-logo.jpg'
    } as IOrganisation;

    const doc = {
      id: 'x',
      name: 'passport',
      description: 'A person\'s passport containing the name, nationality, picture, etc.',
      issuers: [govOrg, raboOrg]
    } as IDocument;

    const govCat = {
      id: 'x',
      name: 'Government',
      description: 'Governmental documents',
      documents: [doc]
    } as ICategory;

    return [doc, raboOrg, govCat];
  }
}
