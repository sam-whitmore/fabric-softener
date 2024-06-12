export interface ResponseData {
  quant: number
  qual?: string
  datetime: string
  is_day: number
  latitude: number
  longitude: number
  climate: string
  temp_C: number
  uv_index: number
  humidity_percent: number
  cloud_cover_percent: number
  wind_kph: number
  wind_dir: string
  precip_mm: number
}

export interface AuthorizedResponseData extends ResponseData {
  user_auth0_sub: string
}

export interface Response extends AuthorizedResponseData {
  id: number
}
