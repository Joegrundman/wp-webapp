interface IMockHex {
  isPort: boolean;
}

export interface IUnitParams {
  id: number;
  fpg: number;
  type: string;
  name: string;
  strength: number;
  movement: number;
  location?: number;
  hex?: IMockHex;
  isSlow?: boolean;
  isSunk?: boolean;
  isDamaged?: boolean;
  isInverted?: boolean;
  isExploiting?: boolean;
  isIsolated?: boolean;
}
