export interface IData {
  playerX: string;
  playerO: string;
  scoreX: string;
  scoreO: string;
}
export type Player = 'X' | 'O' | null;
export type Board = (Player | null)[];
