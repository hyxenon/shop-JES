import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  isDarkmode = new Subject<boolean>()
  

  isDarkToggleClick(data: boolean){
    this.isDarkmode.next(data)
  }
}
