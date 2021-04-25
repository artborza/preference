import { Component, QueryList, ViewChildren,EventEmitter,Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Item } from './item';
import { MenuSideBarComponentComponent } from '../menu-side-bar-component/menu-side-bar-component.component';
import { MenuSideBarSubComponentComponent } from '../menu-side-bar-sub-component/menu-side-bar-sub-component.component';
import { MainPreferenceComponent } from '../main-preference/main-preference.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @ViewChildren(MenuSideBarComponentComponent)
  menuSideBar:QueryList<MenuSideBarComponentComponent>
  @ViewChildren(MenuSideBarSubComponentComponent)
  menuSideBarSub:QueryList<MenuSideBarSubComponentComponent>


  items:Item[];
  itemsSub:Item[];
  itemsSub1:Item[];
  itemsSub2:Item[];
  itemsSub3:Item[];
  ngOnInit(): void {
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) {
    this.items = [];
    this.itemsSub = [];
    this.itemsSub1 = [];
    this.itemsSub2 = [];
    this.itemsSub3 = [];
    this.items.push({
      id:'0',
      name:'Commonly Used',
      isChecked:false
    })
    this.items.push({
      id:'1',
      name:'Text Editor',
      isChecked:false
    })
    this.items.push({
      id:'2',
      name:'Workbench',
      isChecked:false
    })
    this.items.push({
      id:'3',
      name:'Window',
      isChecked:false
    })
    this.items.push({
      id:'4',
      name:'Feature',
      isChecked:false
    })
    this.items.push({
      id:'5',
      name:'Application',
      isChecked:false
    })
    this.items.push({
      id:'6',
      name:'Extensions',
      isChecked:false
    })
    this.itemsSub1.push({
      id:'1',
      name:'Cursor',
      isChecked:false
      
    })
    this.itemsSub1.push({
      id:'2',
      name:'Find',
      isChecked:false
    })
    this.itemsSub1.push({
      id:'3',
      name:'Font',
      isChecked:false
    })
    this.itemsSub1.push({
      id:'4',
      name:'Diff Editor',
      isChecked:false
    })
    this.itemsSub1.push({
      id:'5',
      name:'Minimap',
      isChecked:false
    })
    this.itemsSub1.push({
      id:'6',
      name:'Cursor',
      isChecked:false
    })
    this.itemsSub1.push({
      id:'7',
      name:'Suggestions',
      isChecked:false
    })
    this.itemsSub1.push({
      id:'8',
      name:'Files',
      isChecked:false
    })
    this.itemsSub2.push({
      id:'1',
      name:'Apperance',
      isChecked:false
    })
    this.itemsSub2.push({
      id:'2',
      name:'Breadcrumbs',
      isChecked:false
    })
    this.itemsSub2.push({
      id:'3',
      name:'Editor Management',
      isChecked:false
    })
    this.itemsSub2.push({
      id:'4',
      name:'Setting Editors',
      isChecked:false
    })
    this.itemsSub2.push({
      id:'5',
      name:'zen Mode',
      isChecked:false
    })
    this.itemsSub2.push({
      id:'6',
      name:'Screencast Mode',
      isChecked:false
    })
    this.itemsSub3.push({
      id:'1',
      name:'Screencast Mode',
      isChecked:false
    })
  }
  selectItem(menuSideBar: MenuSideBarComponentComponent) {
    for(let menus of this.items){
      if(menus.id != menuSideBar.item.id){
        menus.isChecked = false
      }else{
        menus.isChecked = true
      }
    }
    if(menuSideBar.item.id=='1'){
      this.itemsSub = this.itemsSub1
    }else if(menuSideBar.item.id=='2'){
      this.itemsSub = this.itemsSub2
    }else if(menuSideBar.item.id=='3'){
      this.itemsSub = this.itemsSub3
    }else{
      this.itemsSub =[];
    }
  }

  selectItem2(menuSideBar: MenuSideBarSubComponentComponent) {
    for(let menus of this.itemsSub){
      if(menus.id != menuSideBar.item.id){
        menus.isChecked = false
      }else{
        menus.isChecked = true
      }
    }
 
  }
}
