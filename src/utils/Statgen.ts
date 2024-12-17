import { Statistic, Step } from "./types";

const STMCounter = (step: string): number => {
  const stm = step.toLowerCase().match(/[ulrdfbsme]/g)
  return stm ? stm.length : 0;
}

const ETMCounter = (step: string) => {
  const etm = step.toLowerCase().match(/[ulrdfbsmexyz]/g)
  return etm ? etm.length : 0;
}

const FinalFinalStats = (stats: Statistic[]) => {
  const f2lStep: Step = {
    time: stats.slice(0, 5).reduce((acc, stat) => acc + stat.time, 0),
    STM: stats.slice(0, 5).reduce((acc, stat) => acc + stat.STM, 0),
    ETM: stats.slice(0, 5).reduce((acc, stat) => acc + stat.ETM, 0),
  };

  const f2lStat: Statistic = {
    ...f2lStep,
    STPS: f2lStep.STM / f2lStep.time,
    ETPS: f2lStep.ETM / f2lStep.time,
    Percent: stats.slice(0, 5).reduce((acc, stat) => acc + stat.Percent, 0),
  };

  const llStep: Step = {
    time: stats.slice(5, 7).reduce((acc, stat) => acc + stat.time, 0),
    STM: stats.slice(5, 7).reduce((acc, stat) => acc + stat.STM, 0),
    ETM: stats.slice(5, 7).reduce((acc, stat) => acc + stat.ETM, 0),
  }


  const llStat: Statistic = {
    ...llStep,
    STPS: llStep.STM / llStep.time,
    ETPS: llStep.ETM / llStep.time,
    Percent: stats.slice(5, 7).reduce((acc, stat) => acc + stat.Percent, 0)
  }

  const cp1Step: Step = {
    time: stats.slice(0, 2).reduce((acc, stat) => acc + stat.time, 0),
    STM: stats.slice(0, 2).reduce((acc, stat) => acc + stat.STM, 0),
    ETM: stats.slice(0, 2).reduce((acc, stat) => acc + stat.ETM, 0),
  }

  const cp1Stat: Statistic = {
    ...cp1Step,
    STPS: cp1Step.STM / cp1Step.time,
    ETPS: cp1Step.ETM / cp1Step.time,
    Percent: stats.slice(0, 2).reduce((acc, stat) => acc + stat.Percent, 0),
  }

  const olsStep: Step = {
    time: stats[4].time + stats[5].time,
    STM: stats[4].STM + stats[5].STM,
    ETM: stats[4].ETM + stats[5].ETM,
  }

  const olsStat: Statistic = {
    ...olsStep,
    STPS: olsStep.STM / olsStep.time,
    ETPS: olsStep.ETM / olsStep.time,
    Percent: stats[4].Percent + stats[5].Percent
  }

  const pllStat: Statistic = stats[6];

  const FinalFinalStats: Statistic[] = [f2lStat, llStat, cp1Stat, olsStat, pllStat]

  return FinalFinalStats;
}

export const StatsGen = (splits: number[], steps: string[], fps: number, solveTime: number) => {
  splits.push(solveTime * fps + splits[0]); // add pll split
  steps.shift(); // remove inspection
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
  return FinalFinalStats(StatsFinal);
}

