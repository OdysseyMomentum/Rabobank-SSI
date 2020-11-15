import { Component, OnInit } from '@angular/core';
import { IOrganisation } from '../common/interfaces';
import { ActivatedRoute } from '@angular/router';
import { OrganisationService } from '../service/organisation.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {
  org: IOrganisation;

  constructor(private actRoute: ActivatedRoute, private orgService: OrganisationService) {
  }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.org = this.orgService.get(params.get('id'));
    });
  }

}
