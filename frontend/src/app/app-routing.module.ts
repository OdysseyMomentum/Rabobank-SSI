import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { IssuerListComponent } from './issuer-list/issuer-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'org/:id', component: OrganisationComponent },
  { path: 'orgs', component: IssuerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
