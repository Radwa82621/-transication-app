import { Component, Input, OnInit } from '@angular/core';

import { Customer ,Transication} from 'src/app/shared/interfaces/customer';
import { CustomerTransicationsService } from 'src/app/shared/services/customer-transications.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit
 {
  customers!:Customer[]
  customerTransication!:Transication[]
  data: any;

  basicData: any;
  basicOptions: any;

  options: any;
  cashCounter:number
  visaCounter:number
  EwalletCounter:number

  constructor(private _CustomerTransicationsService:CustomerTransicationsService) {
    this.cashCounter=0
    this.visaCounter=0
    this.EwalletCounter=0
  }
  ngOnInit(): void {

    this.getCustomers()

  
 
}

  getCustomers(){
    this._CustomerTransicationsService.Customers.subscribe({
      next:(res)=>{console.log(res);
      this.customers=res.customers},
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  viewChart(transicatios:any[]){
  
    this.cashCounter=0
    this.visaCounter=0
    this.EwalletCounter=0

    this.customerTransication=transicatios
    console.log(this.customerTransication);
    this.customerTransication.forEach(element => {
      if(element.payment_method=="cash"){
        this.cashCounter++
      }else if(element.payment_method=="visa"){
        this.visaCounter++
      }else if(element.payment_method=="E-wallet"){
        this.EwalletCounter++
      }
      
      
    });


    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
        labels: ['cash', 'visa', 'E-wallat'],
        datasets: [
            {
                data: [this.cashCounter,this.visaCounter,this.EwalletCounter],
                backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
            }
        ]
    };

    this.options = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };

    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q'],
        datasets: [
            {
                label: 'Sales',
                data: [540, 325, 702, 620],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
}
  }

  



