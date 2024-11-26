import { useState } from "react";
import { DETAIL_KEYS, Events, ReconDetails } from "../utils/types";
import "../styles/Submit.css";
import { InputField } from "../components/InputFields";

export const Submit = () => {
  const [ReconDetails, setReconDetails] = useState<ReconDetails>({
    solver: "",
    event: "3x3",
    fps: 30,
    competition: "unofficial",
    reconstructor: "",
    link: ""
  });

  const updateReconDetails = (key: DETAIL_KEYS, value: ReconDetails[DETAIL_KEYS]) => {
    setReconDetails(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const inputFields = [
    { key: "solver", label: "Solved by", type: "text" },
    { key: "event", label: "Event", type: "select", options: ["3x3", "3x3OH"] as Events[] },
    { key: "fps", label: "Frames Per Second", type: "number" },
    { key: "competition", label: "Competition", type: "text" },
    { key: "reconstructor", label: "Reconstructed by", type: "text" },
    { key: "link", label: "Video Link", type: "text" },
  ];

  return (
    <div className="submit-page">
      submit page
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
          right container
        </div>
      </div>
    </div>
  )
}
