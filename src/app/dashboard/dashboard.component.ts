import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  viewbtn = "View All"
  takeValue: number = 5
  takeBoolean: boolean = true
  tableData: any = []
  cardData: any = []
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.getTableData()
    this.getCardData()
  }
  getTableData() {
    this.tableData = []
    this.dataService.tableData$.pipe(take(5)).subscribe((res: any) => {
      this.tableData.push(res)

    })
    console.log(this.tableData)
  }

  getCardData() {
    this.dataService.cardData$.subscribe((res: any) => {
      this.cardData.push(res)
    })

    console.log(this.cardData)
  }
  getAllData() {
    this.tableData = []
    this.dataService.tableData$.subscribe((res: any) => {
      this.tableData.push(res)
    })

    console.log(this.tableData)
  }

  view() {
    if (this.viewbtn == "View All") {
      this.viewbtn = "View Less"
      this.getAllData()
    }
    else if (this.viewbtn == "View Less") {
      this.viewbtn = "View All"
      this.getTableData()
    }
  }

}
