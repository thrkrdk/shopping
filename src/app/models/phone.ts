export interface Phone {
  id?: string;
  name: string;
  color: Color;
  brand: Brand;
}

export enum Brand {
  Apple = 'Apple',
  Huawei = 'Huawei',
  Samsung = 'Samsung',
  Xiaomi = 'Xiaomi',
  Google = 'Google',
  Oppo = 'Oppo',
}


export enum Color {
  Red = 'Red',
  Blue = 'Blue',
  Green = 'Green',
  Yellow = 'Yellow',
  Pink = 'Pink',
}

export interface PhoneForm extends Phone {
  id: string;
}
