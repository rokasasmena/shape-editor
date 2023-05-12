  export interface Shape
{
  type?: string;
  width?: number;
  length?: number;
  radius?: number;
  size?: number;
}


export class Circle implements Shape {
  type: string = 'Circle';
  constructor (public radius: number) { }
}

export class Square implements Shape {
  type: string = 'Square';
  constructor (public size: number) { }
}

export class Rectangle implements Shape {
  type: string = 'Rectangle';
  constructor (public length: number, public width: number, public radius: number) { }
}
