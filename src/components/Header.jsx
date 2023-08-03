import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Avatar from "./Avatar";

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
        alignItems: "center",
        background: "#A1CCD1",
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
        <Link to={"/user"} style={{ margin: 0, fontSize: 15 }}>
          User
        </Link>
        {isAuthenticated && <Avatar width={35} height={35} {...user} />}
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
