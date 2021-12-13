import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  showOptions = false;
  @Input() currentPage: number;
  @Input() pageSize: number;
  @Input() numberOfPages: number[];
  @Output() currentPageEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setShowItem(){
    this.showOptions = !this.showOptions;
  }

  get currentTasks(){
    return this.currentPage*this.pageSize;
  }

  get totalPages(){
    return this.numberOfPages.length;
  }

  currentPageSelected(no: number){
    if(no > 0 && no <= this.numberOfPages.length) {
      this.currentPageEvent.emit(no);
    }
  }
}
