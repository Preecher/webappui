export interface Temp {
  temp: number | undefined;
  feels_like: number | undefined;
  humidity: number | undefined;
  temp_max: number | undefined;
  temp_min: number | undefined;
}

export interface Weather {
  city: string | undefined;
  main: string | undefined;
  description: string | undefined;
}

export const tempDefault = {
  temp: undefined,
  feels_like: undefined,
  humidity: undefined,
  temp_max: undefined,
  temp_min: undefined,
};

export const weatherDefault = {
  id: undefined,
  main: undefined,
  description: undefined,
  icon: undefined,
};
