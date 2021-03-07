import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../../services/search.service'
import { FormControl } from "@angular/forms";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {

  initialData: any[];
  loading: boolean = false;
  results: Observable<any[]>;
  private searchField: FormControl;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.getSample().subscribe(samples => {
      this.initialData = samples
      console.log(this.initialData);
    });

  }

}
