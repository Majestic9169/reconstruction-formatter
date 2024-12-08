import { Statistic, Step } from "./types";

const STMCounter = (step: string): number => {
  const stm = step.toLowerCase().match(/[ulrdfbsme]/g)
  return stm ? stm.length : 0;
}

const ETMCounter = (step: string) => {
  const etm = step.toLowerCase().match(/[ulrdfbsmexyz]/g)
  return etm ? etm.length : 0;
}

export const StatsGen = (splits: number[], steps: string[], fps: number, solveTime: number) => {
  splits.push(solveTime * fps + splits[0]);
  steps.shift();
  let Stats: Step[] = [];
  steps.forEach((step, i: number) => {
    const stat: Step = {
      time: ((splits[i + 1] - splits[i]) / fps),
      STM: STMCounter(step),
      ETM: ETMCounter(step),
    }
    Stats.push(stat);
  })
  const StatsFinal: Statistic[] = Stats.map((stat) => {
    return {
      ...stat,
      STPS: stat.STM / stat.time,
      ETPS: stat.ETM / stat.time,
      Percent: (stat.time / solveTime) * 100,
    }
  })
  return StatsFinal;
}

