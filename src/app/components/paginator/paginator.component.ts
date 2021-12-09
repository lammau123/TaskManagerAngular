import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  showOptions = false;
  _currentPage = 1;
  constructor() { }

  ngOnInit(): void {
  }

  setShowItem(){
    this.showOptions = !this.showOptions;
  }

  setCurrentPage(page){
    this._currentPage = page;
  }

  get currentPage(){
    return this._currentPage*10;
  }
}
