import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/Layout";

import { increment } from "../redux/counterSlice";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <Layout>
      <div
        style={{
          padding: 20,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <button onClick={() => dispatch(increment((count) => count + 1))}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Layout>
  );
}

export default Home;
