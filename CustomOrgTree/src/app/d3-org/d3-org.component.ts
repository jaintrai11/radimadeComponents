import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d3-org',
  templateUrl: './d3-org.component.html',
  styleUrls: ['./d3-org.component.scss']
})
export class D3OrgComponent implements OnInit {
  nodes: any = [
    {
      name: 'AMM',
      cssClass: 'ngx-org-ceo',
      image: '',
      title: '',
      childs: [
        {
          name: 'Upstream1',
          cssClass: 'ngx-org-ceo',
          image: '',
          title: '',
          childs: [
            {
              name: 'BP has implemented sensors to get pr',
              cssClass: 'ngx-org-head',
              image: '',
              title: '',
              childs: [
                {
                  name: ["BP has implemented sensors to get usecase-box",  
                  "usecase-box usecase-box pr BP has implemented sensors",
                   "to get pr BP has implemented sensors to get pr BP has implemented sensors to get pr"],
                  cssClass: 'ngx-org-head usecase-box',
                  image: '',
                  title: '',
                  childs: [
                    {
                      name: '20%',
                      cssClass: 'ngx-org-head range-box',
                      image: '',
                      title: '',
                      childs: []
                    }
                  ]
               }
              ]
            },
            {
              name: 'BP has implemented sensors to get pr d sensors tov d sensor',
              cssClass: 'ngx-org-vp',
              image: '',
              title: '',
              childs: []
            },
          ]
        },
        {
          name: 'Upstream2',
          cssClass: 'ngx-org-ceo',
          image: '',
          title: '',
          childs: [
            {
              name: 'BP has implemented sensors to get pr',
              cssClass: 'ngx-org-head',
              image: '',
              title: '',
              childs: []
            },
            {
              name: 'BP has implemented sensors to get pr d sensors tov d sensor',
              cssClass: 'ngx-org-vp',
              image: '',
              title: '',
              childs: []
            },
            {
              name: 'BP has implemented sensors',
              cssClass: 'ngx-org-vp',
              image: '',
              title: '',
              childs: []
            }
          ]
        },
        {
          name: 'Upstream3',
          cssClass: 'ngx-org-head',
          image: '',
          title: '',
          childs: [
            {
              name: 'BP has implemented sensors to get pr',
              cssClass: 'ngx-org-head',
              image: '',
              title: '',
              childs: []
            },
            {
              name: 'BP has implemented sensors to get pr d sensors tov d sensor',
              cssClass: 'ngx-org-vp',
              image: '',
              title: '',
              childs: []
            },
            {
              name: 'BP has implemented sensors',
              cssClass: 'ngx-org-vp',
              image: '',
              title: '',
              childs: []
            }
          ]
        }
      ]
    },
   
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

  test(event: any) {
    console.log(event);
  }

}
