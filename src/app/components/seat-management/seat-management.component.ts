import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ICell,
  Initial2X2Block,
  ISeatingBlock,
} from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'information-Dialog',
  templateUrl: './information-dialog.html',
})
export class InformationDialog {}
@Component({
  selector: 'app-seat-management',
  templateUrl: './seat-management.component.html',
  styleUrls: ['./seat-management.component.scss'],
})
export class SeatManagementComponent implements OnInit {
  showSeating: boolean = false;
  TOTAL_SEATS: number = 4;
  GOVT_ALLOCATION: number = 50;
  AVAILABLE_SEATS: number = 0;
  NUMBERS_OF_BLOCKS: number = 1;
  seatingBlocks: ISeatingBlock[] = [
    {
      id: 1,
      rows: 2,
      cols: 2,
      matrix: Initial2X2Block,
    },
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.AVAILABLE_SEATS = this.percentage(
      this.GOVT_ALLOCATION,
      this.TOTAL_SEATS
    );
  }

  setAvailableSeats(): number {
    this.showSeating = false;
    this.AVAILABLE_SEATS = this.percentage(
      this.GOVT_ALLOCATION,
      this.TOTAL_SEATS
    );
    return this.AVAILABLE_SEATS;
  }

  /**
   * To calculate no.of seats avaible for audience
   * @param partialValue
   * @param totalValue
   * @returns
   */
  percentage(partialValue: number, totalValue: number): number {
    return Math.floor((partialValue / 100) * totalValue);
  }

  /**
   * Used to reset by default 2x2 block
   */
  reset2Default() {
    this.showSeating = false;
    this.TOTAL_SEATS = 100;
    this.GOVT_ALLOCATION = 50;
    this.NUMBERS_OF_BLOCKS = 1;

    this.seatingBlocks = [
      {
        id: 1,
        rows: 2,
        cols: 2,
        matrix: Initial2X2Block,
      },
    ];
    this.setAvailableSeats();
  }

  /**
   * Used to Initialize
   */
  pushBlocks() {
    this.showSeating = false;
    this.seatingBlocks = [];
    Array.from(Array(this.NUMBERS_OF_BLOCKS)).forEach((x, i) => {
      const seatBlock: ISeatingBlock = {
        id: i,
        rows: i + 1,
        cols: i + 1,
      };
      this.seatingBlocks.push(seatBlock);
    });
  }

  showSeatingArrangement() {
    this.seatingBlocks.forEach((value, index) => {
      const cellDetails = this.initializeBlock(value.rows, value.cols);
      value.matrix = cellDetails;
    });
    this.setAvailableCells();
    this.showSeating = !this.showSeating;
  }

  initializeBlock(rows: number, cols: number): ICell[][] {
    const iCells: ICell[][] = [];

    for (var i: number = 0; i < rows; i++) {
      iCells[i] = [];
      for (var j: number = 0; j < cols; j++) {
        iCells[i][j] = {
          row: i,
          col: j,
          isDisabled: false,
          availableForBooking: (i + j) % 2 === 0,
        };
      }
    }

    return iCells;
  }

  setAvailableCells() {}

  openDialog() {
    const dialogRef = this.dialog.open(InformationDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
