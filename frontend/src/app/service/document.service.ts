import { Injectable } from '@angular/core';
import { IDocument, IOrganisation } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  // This isn't pretty, but we couldn't make the integration with TNO's backend yet.
  dummyDb = [
    {
      id: 'x',
      name: 'Passport',
      description: 'A person\'s passport containing the name, nationality, picture, etc.',
      issuers: [
        {
          id: 'x',
          name: 'Rijksoverheid',
          description: 'x',
          imageUrl: 'https://webstockreview.net/images/government-clipart-icon-1.png'
        } as IOrganisation,
        {
          id: 'x',
          name: 'Rabobank',
          description: 'Coöperatieve Rabobank N.V.',
          imageUrl: 'https://brightlandsinnovationfactory.com/wp-content/uploads/2019/01/Rabobank-logo.jpg'
        } as IOrganisation
      ]
    } as IDocument
  ];

  constructor() {
  }

  search(query: string): IDocument[] {
    return this.dummyDb.filter(x => x.name.toLowerCase().includes(query.toLowerCase()));
  }

  list(): IDocument[] {
    return this.dummyDb;
  }
}
