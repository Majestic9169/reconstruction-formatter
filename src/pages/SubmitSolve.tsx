import React from "react";
import "../styles/Solve.css";
import { ReconDetails, Solve } from "../utils/types";

interface Props {
  details: ReconDetails,
  solve: Solve
}

export const SolveComponent: React.FC<Props> = (props) => {


  return (
    <div className="solve-submit-page">
      <div className="top-bar">
        top-bar
      </div>
      <div className="input-container">
        <div className="left-panel">
          left-panel
          <textarea className="splits-input" />
        </div>
        <div className="right-panel">
          right-panel
          <textarea className="reconstruction-input" />
        </div>
      </div>
      <div className="stats-container">
        stats
      </div>
    </div>
  )
}
