import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const handleLogin = () => loginWithRedirect();

  const handleLogout = () =>
    logout({ logoutParams: { returnTo: window.location.origin } });

  /* 
    username: abc@test.com
    password: P@assword
  */

  return (
    <div
      style={{
        height: 50,
        display: "flex",
        padding: "5px 20px",
        background: "tomato",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Link
        to={"/"}
        style={{
          margin: 0,
          fontSize: 15,
          fontWeight: 700,
          color: "#213547",
          textTransform: "uppercase",
        }}
      >
        interview
      </Link>

      <div
        style={{
          gap: 10,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Link
          to={"/user"}
          style={{ margin: 0, fontSize: 15, color: "#213547" }}
        >
          User
        </Link>

        {isAuthenticated && (
          <img
            width={45}
            height={45}
            src={user.picture}
            alt={user.nickname}
            style={{ borderRadius: 25 }}
          />
        )}

        {isAuthenticated ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : (
          <button onClick={handleLogin}>Log In</button>
        )}
      </div>
    </div>
  );
}

export default Header;
