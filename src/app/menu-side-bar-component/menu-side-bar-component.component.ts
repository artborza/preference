import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Item } from '../side-nav/item';

@Component({
  selector: 'app-menu-side-bar-component',
  templateUrl: './menu-side-bar-component.component.html',
  styleUrls: ['./menu-side-bar-component.component.css']
})
export class MenuSideBarComponentComponent implements OnInit {
  @Input()
  item:Item;
  isCheck:Boolean

  @Output()
  Onselected: EventEmitter<MenuSideBarComponentComponent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select(){
    this.Onselected.emit(this);
  }
}
