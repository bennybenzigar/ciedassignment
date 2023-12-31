import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy{
  title = 'assignment';
  activatedurl:any
  displaynonee:boolean=true
  loadedComponentPath!: string;
  isDestroyed = false;

  

  constructor(private router: Router, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.router.navigateByUrl('login')
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadedComponentPath = event.url;
        console.log(this.loadedComponentPath)
      }
    });
    
  }

  ngOnDestroy() {
    this.isDestroyed = true;
  }
  
}

