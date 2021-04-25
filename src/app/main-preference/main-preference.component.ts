import { Component, OnInit,EventEmitter,Output, Input, ViewChildren, QueryList } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Item } from '../side-nav/item';
import { SideNavComponent } from '../side-nav/side-nav.component';


@Component({
  selector: 'app-main-preference',
  templateUrl: './main-preference.component.html',
  styleUrls: ['./main-preference.component.css']
})
export class MainPreferenceComponent implements OnInit {
  options: FormGroup;

  @ViewChildren(SideNavComponent)
  menuSideBar:QueryList<SideNavComponent>

  @Input()
  items:Item[];

  constructor(fb: FormBuilder) {
    this.items = [];
    this.items.push({
      id:'1',
      name:'User',
      isChecked:false
    })
    this.items.push({
      id:'2',
      name:'Workspace',
      isChecked:false
    })
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
   }
  ngOnInit(): void {
  }

  selectTab(){
    alert('asdasd')
   }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
