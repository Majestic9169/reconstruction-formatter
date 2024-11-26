import { cubingMoves } from "../constants";

export type Events = "3x3" | "3x3 OH"

export interface ReconDetails {
  solver: string; //name of solver
  fps: number;
  reconstructor: string;
  competition: string;
  event: Events;
  link?: string;
}

export type DETAIL_KEYS = keyof ReconDetails;

export type ValidMove = typeof cubingMoves[number];

