import { Component } from '@angular/core';
import { salesByCategoryData, salesByCategoryLineData, salesByMonthData, salesPerWeekData } from 'src/app/data/ChartsData';
import { DashboardCard } from 'src/app/data/DashboardCard';

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
  dashboardCard = DashboardCard
}
