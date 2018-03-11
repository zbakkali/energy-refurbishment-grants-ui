import {Component} from '@angular/core';
import {RedComponent} from '../red/red.component';

import {GridOptions} from 'ag-grid/main';

@Component({
  selector: 'app-my-grid-application',
  templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
  gridOptions: GridOptions;
  columnDefs: any[];
  rowData: any[];

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.enableSorting = true;
    this.gridOptions.enableFilter = true;

    this.columnDefs = [
      {headerName: 'Make', field: 'make'},
      {headerName: 'Model', field: 'model', cellRendererFramework: RedComponent},
      {headerName: 'Price', field: 'price'}
    ];

    this.rowData = [
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000}
    ];
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  selectAllRows() {
    this.gridOptions.api.selectAll();
  }
}
