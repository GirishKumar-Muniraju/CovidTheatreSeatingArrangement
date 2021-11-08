export interface ICell {
  row: number;
  col: number;
  isDisabled: boolean;
  availableForBooking: boolean;
  name: number;
}

export interface ISeatingBlock {
  id: number;
  rows: number;
  cols: number;
  matrix: ICell[][];
  seatsAvaible: string;
}

export const Initial2X2Block: ICell[][] = [
  [
    {
      row: 1,
      col: 1,
      isDisabled: false,
      availableForBooking: true,
      name: 1,
    },
    {
      row: 1,
      col: 2,
      isDisabled: false,
      availableForBooking: false,
      name: 2,
    },
    {
      row: 1,
      col: 3,
      isDisabled: false,
      availableForBooking: true,
      name: 3,
    },
  ],
  [
    {
      row: 2,
      col: 1,
      isDisabled: false,
      availableForBooking: true,
      name: 4,
    },
    {
      row: 2,
      col: 2,
      isDisabled: false,
      availableForBooking: false,
      name: 5,
    },
    {
      row: 2,
      col: 3,
      isDisabled: false,
      availableForBooking: true,
      name: 6,
    },
  ],
];
