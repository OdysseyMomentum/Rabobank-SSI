import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../service/organisation.service';
import { IOrganisation } from '../common/interfaces';

// TODO: rename to OrganisationListComponent

@Component({
  selector: 'app-issuer-list',
  templateUrl: './issuer-list.component.html',
  styleUrls: ['./issuer-list.component.scss']
})
export class IssuerListComponent implements OnInit {

  orgs: IOrganisation[];

  constructor(private orgService: OrganisationService) {
  }

  ngOnInit(): void {
    this.search();
  }

  async search() {
    this.orgs = this.orgService.search('');
  }

}
