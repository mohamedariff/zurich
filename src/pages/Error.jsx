import { useRouteError } from "react-router-dom";
import Layout from "../components/Layout";

import "./error.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
      <h1 className="errorTitle">Oops!</h1>
      <h2>404 - Page not found</h2>
    </Layout>
  );
}
