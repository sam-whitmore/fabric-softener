export interface ResponseData {
  user_auth0_sub: string;
  quant:          number;
  qual:           string;
  datetime:       Date;
  latitude:       number;
  longitude:      number;
  climate:        string;
  temp_C:         number;
}

export interface Response extends ResponseData {
  id: number
}