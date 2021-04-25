import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Item } from '../side-nav/item';

@Component({
  selector: 'app-menu-side-bar-sub-component',
  templateUrl: './menu-side-bar-sub-component.component.html',
  styleUrls: ['./menu-side-bar-sub-component.component.css']
})
export class MenuSideBarSubComponentComponent implements OnInit {
  @Input()
  item:Item;
  isCheck:Boolean

  @Output()
  Onselected2: EventEmitter<MenuSideBarSubComponentComponent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select(){
    this.Onselected2.emit(this);
  }
}
