import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
