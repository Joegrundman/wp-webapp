import Hex from 'Hex/hex';
export interface IUnitParams {
  id: number;
  fpg: number;
  type: string;
  name: string;
  strength: number;
  movement?: number;
  location?: number | null;
  hex?: Hex | null;
  isSlow?: boolean;
  isSunk?: boolean;
  isDamaged?: boolean;
  isInverted?: boolean;
  isExploiting?: boolean;
  isIsolated?: boolean;
  isPacific?: boolean;
}
