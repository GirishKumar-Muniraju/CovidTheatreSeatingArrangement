import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title = 'Book Your Tickets';
  constrainsText = `Constraints:
  ● Theatre can have any number of seating blocks.
  ● Each block will have a row and a column. Ex: [3,4] -> 3 rows, 4 columns.
  ● Seating blocks with only one seat is also allowed. Ex: [1,1]
  ● No two adjacent seats are allowed in the same seating block.
  ● Rules only apply within a block of seats. Corner seats in two adjacent blocks are allowed.
  ● Print all the allowed seats available to book in each row.
  ● Valid rows are A to Z and columns start with 1.
  ● Provide solutions in such a way that your implementation works for various combinations of inputs.
  ● Printing output in neat format will get you bonus points.`;
  constructor() {}

  ngOnInit(): void {}
}
