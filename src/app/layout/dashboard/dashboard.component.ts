import { Component } from '@angular/core';
import { salesByCategoryData, salesByCategoryLineData, salesByMonthData, salesPerWeekData } from 'src/app/data/charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  salesPerWeekData = salesPerWeekData
  salesByMonth = salesByMonthData
  salesByCategory = salesByCategoryData
  salesByCategoryLine = salesByCategoryLineData
}
