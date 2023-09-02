import { Component, OnInit } from '@angular/core';
// import { DivVisibilityService } from '../services/div-visibility.service';
import { take } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  viewbtn = "View All"
  takeValue: number = 5
  takeBoolean: boolean = true
  tableData: any = []
  cardData: any = []
  loadedComponentPath!: string;
  screenWidth: any
  isStyled: boolean = false
  hidenav: boolean = true
  l: any;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
   
  this.l=localStorage.getItem('l')
  console.log(this.l,'ll')
  if(this.l=='true'){
    localStorage.removeItem('l')
    window.location.reload()
  }
  
this.router.navigateByUrl('dashboard')



    this.getTableData()
    this.getCardData()

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadedComponentPath = event.url;
      }
    });
    console.log(this.loadedComponentPath,'lc')
    this.dataService.getScreenWidth().subscribe((res: any) => {
      this.screenWidth = res;
      this.updateSidenavVisibility();
    });

    this.dataService.getDivVisibility().subscribe((res: any) => {
      this.hidenav = res;
      this.updateSidenavVisibility();
    });
  }

  getTableData() {
    this.tableData = []
    this.dataService.tableData$.pipe(take(5)).subscribe((res: any) => {
      this.tableData.push(res)
    })
  }

  getCardData() {
    this.dataService.cardData$.subscribe((res: any) => {
      this.cardData.push(res)
    })
  }

  getAllData() {
    this.tableData = []
    this.dataService.tableData$.subscribe((res: any) => {
      this.tableData.push(res)
    })
  }

  view() {
    if (this.viewbtn == "View All") {
      this.viewbtn = "View Less"
      this.getAllData()
    } else if (this.viewbtn == "View Less") {
      this.viewbtn = "View All"
      this.getTableData()
    }
  }

  shouldDisplaySidenav(): string {
    if (this.screenWidth < 768) {
      return this.hidenav ? 'block' : 'none';
    }
    return 'block';
  }

  private updateSidenavVisibility() {
    if (this.screenWidth < 768) {
      this.hidenav = false;
    }
  }

  changeStyle() {
    if (this.screenWidth < 768) {
      this.isStyled = true
    } else {
      this.hidenav = true
    }
  }
}
