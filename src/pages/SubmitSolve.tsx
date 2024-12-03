import React, { useEffect, useState } from "react";
import "../styles/Solve.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { Solve } from "../utils/types";
import { HighlightButton, resetAllButton } from "../utils/buttonHighlight";

export const SolveComponent: React.FC = () => {

  const [submitted, setSubmitted] = useState(false);

  const location = useLocation()
  const { ReconDetails, solve, reconstruction } = location.state;

  const index = useParams().number;

  const solveTitle = `${index}. ${solve.time} - ${ReconDetails.event} - solved by ${ReconDetails.solver} at ${ReconDetails.competition}`

  useEffect(() => {
    resetAllButton(reconstruction.solves.length);
    HighlightButton(`solve-${index}-button`);
  }, [index])

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
          splits
          <textarea className="splits-input" />
        </div>
        <div className="right-panel">
          reconstruction
          <textarea className="reconstruction-input" />
        </div>
      </div>
      <div className="button-container">
        <button
          className="submit"
          onClick={() => setSubmitted(true)}
        >
          Submit
        </button>
        <button
          className="reset"
          onClick={() => setSubmitted(false)}
        >
          Reset
        </button>
      </div>
      {submitted ? (
        <div className="stats-container">
          stats
        </div>
      ) : (<></>)}
    </div>
  )
}
