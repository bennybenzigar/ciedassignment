import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  screenWidth: any
  // sidenavBtn:any
  list: any = [
    { name: 'Dashboard', path: '/dashboard', icon: 'fa-solid fa-table' },
    { name: 'Page not found', path: '/pagenotfound', icon: 'fa-solid fa-triangle-exclamation' }
    // <i class="fa-solid fa-table"></i>
    // <i class="fa-solid fa-triangle-exclamation"></i>
  ]
  isStyled: any;
  constructor(private dataService: DataService,private router:Router) { }
  ngOnInit(): void {
    this.dataService.getScreenWidth().subscribe((res: any) => {
      console.log(res, 'scr')
      this.screenWidth = res
      // this.sidenavBtn=true
    })
  }
  hidefunction(){
    if(this.screenWidth<768){
      this.isStyled=true
    }
  }

  getStyle() {
   
    return this.isStyled ? 'display:none' : '';
  }

  hidesidenav(){
    this.dataService.setDivVisibility(false)
  }
  logoutfn(){
    this.dataService.authenticated=false
    this.router.navigateByUrl('/login')
    localStorage.removeItem('user')
    localStorage.removeItem('l')

  }
}
