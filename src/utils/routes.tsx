import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../pages/ErrorPage";
import { Submit } from "../pages/SubmitRecon";
import { SolveComponent } from "../pages/SubmitSolve";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/submit",
    element: <Submit />
  },
  {
    path: "/solve/:number",
    element: <SolveComponent />
  }
]);
