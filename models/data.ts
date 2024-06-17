export interface LineChartData {
  id:    string;
  color: string;
  data:  readonly Datum[];
}

export interface Datum {
  x: string;
  y: number;
}
