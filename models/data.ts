export interface LineChartData {
  id:    string;
  color: string;
  data:  Datum[];
}

export interface Datum {
  x: string;
  y: number;
}
