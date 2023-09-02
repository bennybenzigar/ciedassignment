import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  loadedComponentPath!: string;
  // isDestroyed = false;
  constructor(private router: Router, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadedComponentPath = event.url;
        console.log(this.loadedComponentPath)
      }
    });
    // this.router.navigateByUrl('dashboard')
    // this.router.navigate(['/dashboard'])
  }
 
}
