import { useState } from "react";
import { DETAIL_KEYS, Events, Recon, ReconDetails, Reconstruction, Solve } from "../utils/types";
import "../styles/Submit.css";
import { InputField } from "../components/InputFields";
import { Link } from "react-router-dom";

export const Submit = () => {
  const [ReconDetails, setReconDetails] = useState<ReconDetails>({
    solver: "",
    event: "3x3",
    fps: 30,
    competition: "unofficial",
    reconstructor: "",
    link: ""
  });
  const [csTimerDump, setCSTimerDump] = useState<string>("")
  const [reconstruction, setReconstruction] = useState<Reconstruction>({
    details: ReconDetails,
    solves: []
  })

  const updateReconDetails = (key: DETAIL_KEYS, value: ReconDetails[DETAIL_KEYS]) => {
    setReconDetails(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onReset = () => {
    setReconDetails({
      solver: "",
      event: "3x3",
      fps: 30,
      competition: "",
      reconstructor: "",
      link: ""
    });
    setCSTimerDump("");
  }

  const onSubmit = () => {
    const cleanedInput = csTimerDump.replace(/[()]/g, '');
    // cleanedInput = cleanedInput.replace(')', '');
    const solves = cleanedInput.split('\n');
    const trimmedSolves = solves.map(solve => solve.trim());
    const formattedSolves = trimmedSolves.map(entry => {
      const match = entry.match(/(\d+\.\d+)\s+(.*)/);
      if (match) {
        return {
          time: match[1], // Time is now guaranteed to be without parentheses
          scramble: match[2]
        };
      }
    });
    setReconstruction(() => ({
      details: ReconDetails,
      solves: [
        ...formattedSolves.map(solve => ({
          scram: solve?.scramble,
          time: Number(solve?.time),
          recon: {
            cross: "",
            f2l1: "",
            f2l2: "",
            f2l3: "",
            f2l4: "",
            oll: "",
            pll: ""
          },
          splits: []
        }))
      ]
    }));
  }

  const inputFields = [
    { key: "solver", label: "Solved by", type: "text" },
    { key: "event", label: "Event", type: "select", options: ["3x3", "3x3OH"] as Events[] },
    { key: "fps", label: "Frames Per Second", type: "number" },
    { key: "competition", label: "Competition", type: "text" },
    { key: "link", label: "Video Link", type: "text" },
    { key: "reconstructor", label: "Reconstructed by", type: "text" },
  ];

  return (
    <div className="submit-page">
      <div className="submit-container">
        <div className="form-container">
          <div className="left-form-container">
            {inputFields.map(({ key, label, type, options }) => (
              <InputField
                key={key}
                label={label}
                value={ReconDetails[key as DETAIL_KEYS]}
                onChange={(value) => updateReconDetails(key as DETAIL_KEYS, value)}
                type={type}
                options={options}
              />
            ))}
          </div>
          <div className="right-form-container">
            <label className="input-label">CSTimer Dump</label>
            <textarea
              className="cstimer-dump"
              placeholder="CSTimer Dump"
              value={csTimerDump}
              onChange={(e) => setCSTimerDump(e.target.value)}
            />
          </div>
        </div>
        <div className="button-container">
          <button
            className="submit"
            onClick={onSubmit}
          >
            Submit
          </button>
          <button
            className="reset"
            onClick={onReset}
          >
            Reset
          </button>
        </div>
      </div>
      {reconstruction.solves.map((solve, i) => (
        <Link to={"/solve/" + (i + 1).toString()} state={{ ReconDetails, solve }}>
          Solve {i + 1}
        </Link>
      ))}
    </div>
  )
}
