import { Injectable } from '@angular/core';
import { IOrganisation } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  // This isn't pretty, but we couldn't make the integration with TNO's backend yet.
  dummyDb = [
    {
      id: 'x',
      name: 'Rijksoverheid',
      description: 'Dutch government services',
      imageUrl: 'https://webstockreview.net/images/government-clipart-icon-1.png'
    } as IOrganisation,
    {
      id: 'y',
      name: 'Rabobank',
      description: 'Coöperatieve Rabobank N.V.',
      imageUrl: 'https://brightlandsinnovationfactory.com/wp-content/uploads/2019/01/Rabobank-logo.jpg'
    } as IOrganisation
  ];

  constructor() {
  }

  search(query: string): IOrganisation[] {
    return this.dummyDb.filter(x => x.name.toLowerCase().includes(query.toLowerCase()));
  }

  list(): IOrganisation[] {
    return this.dummyDb;
  }

  get(id: string): IOrganisation|undefined {
    const result = this.dummyDb.filter(x => x.id === id);
    return result.length > 0 ? result[0] : undefined;
  }
}
