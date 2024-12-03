import React from "react";
import "../styles/Solve.css";
import { useLocation, useParams } from "react-router-dom";

export const SolveComponent: React.FC = () => {

  const location = useLocation()
  const { ReconDetails, solve } = location.state;

  const index = useParams().number;

  const solveTitle = `${index}. ${solve.time} - ${ReconDetails.event} - solved by ${ReconDetails.solver} at ${ReconDetails.competition}`

  return (
    <div className="solve-submit-page">
      <div className="top-bar">
        {solveTitle}
      </div>
      <div className="scram-bar">
        {solve.scram}
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
      <div className="stats-container">
        stats
      </div>
    </div>
  )
}
