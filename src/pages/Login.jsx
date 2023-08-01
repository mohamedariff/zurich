import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Login Page</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          name="Username"
          placeholder="Username"
          style={{ height: 32, borderRadius: 5 }}
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          style={{ height: 32, borderRadius: 5 }}
        />
        <button style={{ marginTop: 20 }} onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
