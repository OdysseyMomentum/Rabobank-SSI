import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchQuery = new FormControl('');
  searchResult: any[];
  isSearching = false;

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  async search() {
    this.isSearching = true;
    this.searchResult = this.searchService.search(this.searchQuery.value);

    this.isSearching = false;
  }
}
