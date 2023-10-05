import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Customer, Transication } from 'src/app/shared/interfaces/customer';
import { CustomerTransicationsService } from 'src/app/shared/services/customer-transications.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as XLSX from 'xlsx';
import { Table } from 'primeng/table';
import { saveAs } from 'file-saver';
import { isPlatformBrowser } from '@angular/common';
declare module 'pdfmake/build/vfs_fonts';
interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MessageService],
})
export class TableComponent implements OnInit {
  searchName: string = '';

  cols!: Column[];

  exportColumns!: ExportColumn[];
  customers!: Customer[];
  customerTransication!: Transication[];
  data: any;

  basicData: any;
  basicOptions: any;

  options: any;
  cashCounter: number;
  visaCounter: number;
  EwalletCounter: number;
  tArray: Transication[] = [];
  yArray: Transication[] = [];
  byArray: Transication[] = [];
  tCount: number = 0;
  yCount: number = 0;
  byCount: number = 0;

  searchAmount!: number;
  filterValue!: number;

  constructor(
    private messageService: MessageService,
    private _CustomerTransicationsService: CustomerTransicationsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.show();
    this.cashCounter = 0;
    this.visaCounter = 0;
    this.EwalletCounter = 0;
    if (isPlatformBrowser(platformId)) {
      (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }
  }
  ngOnInit(): void {
    this.getCustomers();

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'id', header: 'Id' },
      { field: 'total', header: 'total Payment' },
      { field: 'transactionLength', header: 'number of transications	' },
    ];
  }
  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'transications Filtered successfully ,please expand table rows',
    });
  }

  getCustomers() {
    this._CustomerTransicationsService.getCustomers().subscribe({
      next: (res: any) => {
        const updatedData = res.customers.map((obj: any) => ({
          ...obj,
          transactionLength: obj.transications.length,
        }));

        this.customers = updatedData;
      },
    });
  }
  viewChart(transicatios: any[]) {
    this.cashCounter = 0;
    this.visaCounter = 0;
    this.EwalletCounter = 0;
    this.tArray = [];
    this.yArray = [];
    this.byArray = [];
    this.tCount = 0;
    this.yCount = 0;
    this.byCount = 0;
    this.customerTransication = transicatios;
    this.customerTransication.forEach((element) => {
      if (element.payment_method == 'cash') {
        this.cashCounter++;
      } else if (element.payment_method == 'visa') {
        this.visaCounter++;
      } else if (element.payment_method == 'E-wallet') {
        this.EwalletCounter++;
      }
    });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['cash', 'visa', 'E-wallat'],
      datasets: [
        {
          data: [this.cashCounter, this.visaCounter, this.EwalletCounter],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };

    this.customerTransication.forEach((element) => {
      if (element.date == '2/10/2023') {
        this.tArray.push(element);
      } else if (element.date == '1/10/2023') {
        this.yArray.push(element);
      } else if (element.date == '30/9/2023') {
        this.byArray.push(element);
      }
    });
    this.tArray.forEach((el) => {
      this.tCount += el.price;
    });
    this.yArray.forEach((el) => {
      this.yCount += el.price;
    });
    this.byArray.forEach((el) => {
      this.byCount += el.price;
    });

    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['2/10/2023', '1/10/2023', '30/9/2023'],
      datasets: [
        {
          label: 'transications',
          data: [this.tCount, this.yCount, this.byCount],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
          ],
          borderWidth: 1,
        },
      ],
    };
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  exportTableToPDF(table: Table): void {
    if (table && table.value) {
      const docDefinition: any = {
        content: [
          { text: 'Table Export', style: 'header' },
          {
            table: {
              headerRows: 1,
              body: [
                table._columns?.map((col) => col.header),
                ...table.value.map((row) =>
                  table._columns?.map((col) => row[col.field])
                ),
              ],
            },
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10],
          },
        },
      };

      pdfMake.createPdf(docDefinition).download('table-export.pdf');
    }
  }

  exportTableToCSV(table: Table): void {
    if (table && table.value) {
      let csv = '';

      // Construct the header row
      const headerRow = table.columns?.map((col) => col.header);
      csv += headerRow?.join(',') + '\n';

      // Construct the data rows
      for (const row of table.value) {
        const rowData = table.columns?.map((col) => row[col.field]);
        csv += rowData?.join(',') + '\n';
      }

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
      saveAs(blob, 'table-export.csv');
    }
  }

  exportTableToExcel(table: Table): void {
    const worksheet = XLSX.utils.json_to_sheet(table.value);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
    });
    saveAs(blob, 'table-export.xlsx');
  }

  filter() {
    this.searchAmount = this.filterValue;
    if (this.filterValue != null) {
      this.show();
    }
  }
}
