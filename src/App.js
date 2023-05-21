import "./App.css";
import Header from "./components/Header";
import { Fragment } from "react";
import { publicRouter } from "./Router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import Blog from "./Page/Blog";

import { useEffect } from "react";
import AuthProvider from "./components/Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          {publicRouter.map((router, index) => {
            let Layout = DefaultLayout;
            if (router.layout) {
              Layout = router.layout;
            } else if (router.layout === null) {
              Layout = Fragment;
            }
            const Page = router.component;

            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout
                    Page={router.ke}
                    Mau={router.key}
                    mau={router.mau}
                    mau1={router.mau1}
                    mau2={router.mau2}
                  >
                    <Page ku={router.k} />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
