import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HeaderComponent} from '../header/header.component';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    FlexLayoutModule,
    MatMenuModule,
  ],
  exports: [LayoutComponent, HeaderComponent, SidenavComponent]
})
export class LayoutModule { }
