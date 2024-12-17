import React, { useEffect, useState } from "react";
import "../styles/Solve.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { Solve, Statistic } from "../utils/types";
import { HighlightButton, resetAllButton } from "../utils/buttonHighlight";
import { StatsGen } from "../utils/Statgen";

export const SolveComponent: React.FC = () => {

  const [submitted, setSubmitted] = useState(false);
  const [splitsInput, setSplitsInput] = useState<string>("");
  const [reconstructionInput, setReconInput] = useState<string>("")
  const [stats, setStats] = useState<Statistic[]>([]);

  const location = useLocation()
  const { ReconDetails, solve, reconstruction } = location.state;

  const index = useParams().number;

  const solveTitle = `${index}. ${solve.time} - ${ReconDetails.event} - solved by ${ReconDetails.solver} at ${ReconDetails.competition}`

  useEffect(() => {
    resetAllButton(reconstruction.solves.length);
    HighlightButton(`solve-${index}-button`);
  }, [index])

  const handleSubmit = () => {
    const splits = splitsInput.trim().split('\n').map(split => Number(split));
    if (splits.length !== 7) {
      console.error("please enter splits in the correct format")
    }
    const stepsHelper = reconstructionInput.trim().split('\n');
    const steps = stepsHelper.map((step) => step.trim().split('//')[0].trim());
    setStats(StatsGen(splits, steps, ReconDetails.fps, solve.time));
    console.log(stats);
  }

  const stepNames = ["F2L", "LL", "Cross+1", "OLS", "PLL"]

  return (
    <div className="solve-submit-page">
      <div className="link-container">
        {reconstruction.solves.map((solve: Solve, i: number) => (
          <Link to={"/solve/" + (i + 1).toString()} state={{ ReconDetails, solve, reconstruction }}>
            <button className="link-button" id={`solve-${i + 1}-button`}>
              Solve {i + 1}
            </button>
          </Link>
        ))}
      </div>
      <div className="top-bar">
        {solveTitle}
        <div className="scram-bar">
          {solve.scram}
        </div>
      </div>
      <div className="input-container">
        <div className="left-panel">
          <textarea
            cols={10}
            rows={10}
            className="splits-input"
            value={splitsInput}
            onChange={e => setSplitsInput(e.target.value)}
            placeholder="Paste splits"
          />
        </div>
        <div className="right-panel">
          <textarea
            cols={55}
            rows={10}
            className="reconstruction-input"
            value={reconstructionInput}
            onChange={e => setReconInput(e.target.value)}
            placeholder="Paste recon"
          />
        </div>
      </div>
      <div className="button-container">
        <button
          className="submit"
          onClick={() => {
            setSubmitted(true);
            handleSubmit();
          }}
        >
          Submit
        </button>
        <button
          className="reset"
          onClick={() => {
            setSubmitted(false);
            setSplitsInput("");
            setReconInput("");
          }}
        >
          Reset
        </button>
      </div>
      {submitted ? (
        <div className="stats-container">
          <table className="solve-stat-table">
            <thead>
              <th> </th>
              <th> Time </th>
              <th> Split </th>
              <th> STM </th>
              <th> STPS </th>
              <th> ETM </th>
              <th> ETPS </th>
            </thead>
            <tbody>
              {stats.map((stat, i) => (
                <tr>
                  <th> {stepNames[i]} </th>
                  <td> {stat.time.toFixed(2)} </td>
                  <td> {stat.Percent.toFixed(2)} </td>
                  <td> {stat.STM} </td>
                  <td> {stat.STPS.toFixed(2)} </td>
                  <td> {stat.ETM} </td>
                  <td> {stat.ETPS.toFixed(2)} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (<></>)}
    </div>
  )
}
