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

export type ValidAlg = `${ValidMove}${ValidAlg}` | ``;

export interface Recon {
  cross: ValidAlg;
  f2l1: ValidAlg;
  f2l2: ValidAlg;
  f2l3: ValidAlg;
  f2l4: ValidAlg;
  oll: ValidAlg;
  pll: ValidAlg;
}

export interface Solve {
  time: number;
  scram: ValidAlg;
  recon: Recon;
  splits: number[];
}

export interface Reconstruction {
  details: ReconDetails;
  solves: Solve[];
}

export type Step = {
  STM: number;
  ETM: number;
  time: number;
}

export type Statistic = {
  STM: number;
  ETM: number;
  time: number;
  STPS: number;
  ETPS: number;
  Percent: number;
  Name: string;
}
