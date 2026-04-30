export enum dataTypes {
  ERROR = 'error',
  SUCCESS = 'success'
}

type beanDetailsType = {
  process: string,
  region: string,
  variety: string[],
  scaScore: number
}

type beanFlavorType = {
  notes: string[],
  acidity: number,
  sweetness: number,
  bitterness: number
}

type beanRecipeType = {
  id: string,
  method: string,
  grindSize: string,
  waterTemp: number,
  doseIn: number,
  doseOut: number,
  timeTotal: string,
  steps: string[]
}

export type beanType = {
  id: string,
  title: string,
  country: string,
  description: string,
  roasterComment: string,
  imageUrl: string,
  details: beanDetailsType,
  flavorProfile: beanFlavorType,
  recipes: beanRecipeType[]
}

export type SmallBeanType = Pick<beanType, 'id' | 'title' | 'description' | 'imageUrl'>;
export type BeanPath = {
  id: string,
  path: string
};