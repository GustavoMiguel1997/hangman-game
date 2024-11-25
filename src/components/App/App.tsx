import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "@components/Layout/Layout";

export function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </Layout>
    </>
  );
}
