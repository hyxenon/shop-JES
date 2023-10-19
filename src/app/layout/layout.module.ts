import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { ScreenComponent } from '../components/screen/screen.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DarkmodeService } from '../services/darkmode.service';







@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    ScreenComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FontAwesomeModule
  ],
  providers: [ DarkmodeService ]
})
export class LayoutModule { }
