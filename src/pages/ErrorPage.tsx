import React from "react";
import { useRouteError } from "react-router-dom";

interface RouteError {
  message?: string;
  statusText?: string;
  status?: number;
  stack?: string;
}

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1> Oops! {error.status}</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}
