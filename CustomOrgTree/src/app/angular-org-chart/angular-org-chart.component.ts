import { Component, OnInit } from '@angular/core';
import { OrgData } from 'angular-org-chart/src/app/modules/org-chart/orgData';
@Component({
  selector: 'app-angular-org-chart',
  templateUrl: './angular-org-chart.component.html',
  styleUrls: ['./angular-org-chart.component.scss']
})
export class AngularOrgChartComponent implements OnInit {
  orgData: OrgData= {
    name: "Iron Man",
    type: 'CEO',
    children: [
        {
            name: "Captain America",
            type: 'VP',
            children: [
                {
                    name: "Hawkeye",
                    type: 'manager',
                    children: []
                },
                {
                    name: "Antman",
                    type: 'Manager',
                    children: []
                }
            ]
        },
        {
            name: "Black Widow",
            type: 'VP',
            children: [
                {
                    name: "Hulk",
                    type: 'manager',
                    children: [
                        {
                            name: "Spiderman",
                            type: 'Intern',
                            children: []
                        }
                    ]
                },
                {
                    name: "Thor",
                    type: 'Manager',
                    children: [
                        {
                            name: "Loki",
                            type: 'Team Lead',
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
