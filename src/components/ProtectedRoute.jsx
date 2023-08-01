import { useAuth0 } from "@auth0/auth0-react";

import Layout from "./Layout";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <Layout>
        <h2>Unauthorized Acces</h2>
        <p>Please login to continue</p>
      </Layout>
    );
  }

  return children;
}

export default ProtectedRoute;
