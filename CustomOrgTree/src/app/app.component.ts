import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  jsonData = [
    {
      articleUseCase: 96524,   
      potentialImpact: 'Reduce downtime of equipment in well operations',      
      sector: 'AMM',
      subSector: [
        {
          title: 'Upstream1', 
          useCaseId: 12, 
          usecaseDescription:
        'BP has implemented sensors to get pr d sensors tov d sensors to d sensors to d sensors to d sensors to d sensors tod sensors to'
        },
        {
          title: 'Upstream2', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
        {
          title: 'Upstream3', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
        {
          title: 'Upstream4', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
      ],
      driverName: 'Other Operating Expense3',
      useCaseName:
        'Optimize predictive maintenance of equipment in well operations using Sensors',
      usecaseCategory: 'Condition Monitoring',
      usecaseDescription:
        'BP has implemented sensors to get predictions on maintenance requirements of its equipment, the data collected through sensors is analysed by a machine-learning algorithm to provide recommendations to the site inspection team for repair of equipment, leading to lesser down-time of equipment',
      valueStage: 'Source & Make',
    },

    {
      articleUseCase: 96524,   
      potentialImpact: 'Reduce downtime of equipment in well operations',      
      sector: 'AMM',
      subSector: [
        {
          title: 'Upstream1', 
          useCaseId: 12, 
          usecaseDescription:
        'BP has implemented sensors to get pr d sensors tov d sensors to d sensors to d sensors to d sensors to d sensors tod sensors to'
        },
        {
          title: 'Upstream2', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
        {
          title: 'Upstream3', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
      ],
      driverName: 'Other Operating Expense1',
      useCaseName:
        'Optimize predictive maintenance of equipment in well operations using Sensors',
      usecaseCategory: 'Condition Monitoring',
      usecaseDescription:
        'BP has implemented sensors to get predictions on maintenance requirements of its equipment, the data collected through sensors is analysed by a machine-learning algorithm to provide recommendations to the site inspection team for repair of equipment, leading to lesser down-time of equipment',
      valueStage: 'Source & Make',
    },

    {
      articleUseCase: 96524,   
      potentialImpact: 'Reduce downtime of equipment in well operations',      
      sector: 'AMM',
      subSector: [
        {
          title: 'Upstream1 AMM', 
          useCaseId: 12, 
          usecaseDescription:
        'BP has implemented sensors to get pr d sensors tov d sensors to d sensors to d sensors to d sensors to d sensors tod sensors to'
        },
        {
          title: 'Upstream2', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
        {
          title: 'Upstream3', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
      ],
      driverName: 'Eadra trunm wer',
      useCaseName:
        'Optimize predictive maintenance of equipment in well operations using Sensors',
      usecaseCategory: 'Condition Monitoring',
      usecaseDescription:
        'BP has implemented sensors to get predictions on maintenance requirements of its equipment, the data collected through sensors is analysed by a machine-learning algorithm to provide recommendations to the site inspection team for repair of equipment, leading to lesser down-time of equipment',
      valueStage: 'Source & Make',
    },

    {
      articleUseCase: 96524,   
      potentialImpact: 'Reduce downtime of equipment in well operations',      
      sector: 'AMM',
      subSector: [
        {
          title: 'Upstream1 AMM ererer213', 
          useCaseId: 12, 
          usecaseDescription:
        'BP has implemented sensors to get pr d sensors tov d sensors to d sensors to d sensors to d sensors to d sensors tod sensors to'
        },
        {
          title: 'Upstream2', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
        {
          title: 'Upstream3', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
        {
          title: 'Upstream3', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
        {
          title: 'Upstream3', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
        {
          title: 'Upstream3', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
        {
          title: 'Upstream3', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
        {
          title: 'Upstream3', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
        {
          title: 'Upstream3', 
          useCaseId: 1, 
          usecaseDescription:
        'BP has implemented sensors to get pr'
        },
      ],
      driverName: 'Eadra trunm wer 3244 sdfsd',
      useCaseName:
        'Optimize predictive maintenance of equipment in well operations using Sensors',
      usecaseCategory: 'Condition Monitoring',
      usecaseDescription:
        'BP has implemented sensors to get predictions on maintenance requirements of its equipment, the data collected through sensors is analysed by a machine-learning algorithm to provide recommendations to the site inspection team for repair of equipment, leading to lesser down-time of equipment',
      valueStage: 'Source & Make',
    },
  ];
  title = 'testing';
  filteredData: any[] = [];
  sectorName = '';
  //@ViewChild('driverContainer', {static: false}) driverContainer: ElementRef;

  constructor(driverContainer:ElementRef) {}
  
  ngAfterViewInit() {
    //console.log(this.driverContainer.nativeElement);
    let htmlEl = document.querySelectorAll('sub-driver-container');
    console.log(htmlEl);
  }

  loadData(event: any) {
    this.sectorName = event.target.value;
    this.filteredData = this.jsonData.filter((value: any) => value.sector.toLowerCase() === event.target.value.toLowerCase());
    console.log(this.filteredData);

    setTimeout(()=> {
      this.collapseAllDriverBox();
    }, 1000);
    
  }

  collapseAllDriverBox() {
    let driverHtmlElement: any = [];
    driverHtmlElement = [...Array.from(document.getElementsByClassName('driver1'))];
    console.log(driverHtmlElement[0].firstElementChild?.firstElementChild);
    for(let [index,driversElement] of driverHtmlElement.entries()) {
      this.onClickPlus(driverHtmlElement[index]?.firstElementChild?.firstElementChild);
    }
    
  }

  onClickPlus(event: any) {
    let targetHtmlElement: any;
    if(event){
      targetHtmlElement = (event['target'] !== undefined) ? event.target : event;
    }
   
    if(targetHtmlElement?.parentNode?.nextElementSibling) {
      let children: any[] = [...targetHtmlElement.parentNode.parentNode.children];
      let clickedAddressNum = children.indexOf(targetHtmlElement.parentNode);
     

      let filterdSiblings = children.filter((child: any, index) => 
      {
        if(child !== targetHtmlElement.parentNode && index > clickedAddressNum) {
          return targetHtmlElement.parentNode;
        }
      });
    
      for(let value of filterdSiblings) {
        if (value.style.display === "none") {
          value.style.display = "flex";
       } else {
        value.style.display = "none";
       }
      }

      
    }
    console.log();
    if(targetHtmlElement?.parentNode?.tagName.toLowerCase() === 'p') {
      let dynamicHeight = targetHtmlElement.parentNode.nextElementSibling.offsetHeight;
     let topPosition = dynamicHeight/2;

     let driver_Element = [...targetHtmlElement.parentNode.parentNode.parentNode.children];
     console.log(driver_Element);
     for(let [index, value] of driver_Element.entries()) {
       
      let clickedText = targetHtmlElement.parentNode.textContent;
      let driverText = value.firstChild.textContent;

       if((index === 0) && (clickedText === driverText)) {
         if((value.offsetTop === -30 || value.style.top === '-30px') && topPosition > 0) {
          value.removeAttribute('style');
          value.setAttribute('style',`top: -${topPosition}px`);
          //value.style.top = '' + (0 - topPosition);
         }
         else {
          value.removeAttribute('style');
          value.setAttribute('style','top: -30px');
         }
         console.log(value.offsetTop);
       }

       if((index === (driver_Element.length - 1)) && (clickedText === driverText)) {
        if((value.offsetBottom === -31 || value.style.bottom === '-31px') && topPosition > 0) {
          value.removeAttribute('style');
          value.setAttribute('style',`bottom: -${topPosition}px`);
          //value.style.top = '' + (0 - topPosition);
         }
         else {
          value.removeAttribute('style');
          value.setAttribute('style','bottom: -31px');
         }
         console.log(value.offsetTop);
       }
     }
   }
  
  }
  
}
