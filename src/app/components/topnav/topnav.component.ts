import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/services/darkmode.service';



@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
  
  isDarkMode!:boolean

  ngOnInit(): void {
   this.darkModeService.isDarkmode.subscribe((value) => {
    this.isDarkMode = value
   })
  }

  constructor(private darkModeService: DarkmodeService){

  }
  onToggleDark(){
    this.darkModeService.isDarkToggleClick(!this.isDarkMode)
  }
  
}
