import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  showOptions = false;
  @Input() currentPage: number;
  @Output() currentPageEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setShowItem(){
    this.showOptions = !this.showOptions;
  }

  getCurrentPage(){
    return this.currentPage*10;
  }

  currentPageSelected(no: number){
    this.currentPageEvent.emit(no);
  }
}
