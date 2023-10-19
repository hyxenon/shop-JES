import { Component, HostBinding, OnInit } from '@angular/core';
import { DarkmodeService } from '../services/darkmode.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
 
})
export class LayoutComponent implements OnInit {

  @HostBinding('class.dark') get mode(){
    return this.isDarkMode
  }

 isDarkMode!:boolean

  constructor(private darkModeService: DarkmodeService){

  }
  ngOnInit(): void {
    this.darkModeService.isDarkmode.subscribe((value) => {
     this.isDarkMode = value
    })
   }
}
