export interface ICell {
  row: number;
  col: number;
  isDisabled: boolean;
  availableForBooking: boolean;
}

export interface ISeatingBlock {
  id: number;
  rows: number;
  cols: number;
  matrix?: ICell[][];
}

export const Initial2X2Block: ICell[][] = [
  [
    {
      row: 1,
      col: 1,
      isDisabled: false,
      availableForBooking: true,
    },
    {
      row: 1,
      col: 2,
      isDisabled: false,
      availableForBooking: false,
    },
    {
      row: 1,
      col: 3,
      isDisabled: false,
      availableForBooking: true,
    },
  ],
  [
    {
      row: 2,
      col: 1,
      isDisabled: false,
      availableForBooking: true,
    },
    {
      row: 2,
      col: 2,
      isDisabled: false,
      availableForBooking: false,
    },
    {
      row: 2,
      col: 3,
      isDisabled: false,
      availableForBooking: true,
    },
  ],
];
