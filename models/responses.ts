export interface ResponseData {
  quant:          number;
  qual?:           string;
  datetime:       Date;
  latitude?:       number;
  longitude?:      number;
  climate:        string;
  temp_C:         number;
}

export interface AuthorizedResponseData extends ResponseData {
  user_auth0_sub: string;
}

export interface Response extends AuthorizedResponseData {
  id: number
}