import { Injectable } from '@angular/core';
import { ICategory, IDocument, IOrganisation } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // This isn't pretty, but we couldn't make the integration with TNO's backend yet.
  dummyDb = [
    {
      id: 'x',
      name: 'Government',
      description: 'Governmental documents',
      documents: [
        {
          id: 'x',
          name: 'passport',
          description: 'A person\'s passport containing the name, nationality, picture, etc.',
          issuers: [
            {
              id: 'x',
              name: 'Rijksoverheid',
              description: 'x',
              imageUrl: 'x'
            } as IOrganisation,
            {
              id: 'x',
              name: 'Rabobank',
              description: 'Coöperatieve Rabobank N.V.',
              imageUrl: 'https://brightlandsinnovationfactory.com/wp-content/uploads/2019/01/Rabobank-logo.jpg'
            } as IOrganisation
          ]
        } as IDocument
      ]
    } as ICategory
  ];

  constructor() {
  }

  search(query: string): ICategory[] {
    return this.dummyDb.filter(x => x.name.toLowerCase().includes(query.toLowerCase()));
  }

  list(): ICategory[] {
    return this.dummyDb;
  }
}
