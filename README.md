# React + Vite

1. In this project, i used AWS Amplify to host this React project.

- built in CI/CD workflows
- deploys automatically to a CDN
- its a managed service

2. Usually to protect a route or prevent unauthorized access to a certain page, we usually create a <PrivateRoute> or <ProtectedRoute> component that checks if user is logged in. if not, it will redirect to public route. With proper/strict condition, a route/site can be safe from unauthorized access.

```
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth0();

  <!-- To automatically redirect user to public route -->
  if (!isAuthenticated) {
    return <Navigate to="/landing" replace />;
  }

  <!-- To show unauthorized message -->
  if (!isAuthenticated) {
    return (
      <Layout>
        <h2>Unauthorized Acces</h2>
        <p>Please login to continue</p>
      </Layout>
    );
  }

  <!-- Else, return the React Elements childrens -->
  return children;
}
```
