import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
links=[ {link:'Description', route:'/dash'},
        {link:'Tabular-View', route:'/pie-Chart'},
        {link:'Insight-Engine',route:'/insight'},
        {link:'Analytics-Engine',route:'/Analytics'},
        {link:'GIS', route:'/GIS'}
      ];
ngOnInit() {

}
}
