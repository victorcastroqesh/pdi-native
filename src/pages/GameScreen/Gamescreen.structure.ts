export interface IGameScreenProps {
  playerX: string;
  playerO: string;
}
export type Player = 'X' | 'O' | null;
export type Board = (Player | null)[];
