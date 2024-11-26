import React from "react";
import { Events } from "../utils/types";

interface InputFieldProps {
  label: string;
  value: string | number | undefined;
  onChange: (value: string | number) => void;
  type?: string;
  options?: Events[];
}

export const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, type = "text", options }) => {
  return (
    <div className="input-field">
      <label className="input-label">{label}</label>
      {type === "select" ? (
        <select
          className="dropdown-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="text-input"
          type={type}
          value={value}
          onChange={(e) => onChange(type === "number" ? Number(e.target.value) : e.target.value)}
        />
      )}
    </div>
  )
}
