import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F4F2DE",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
