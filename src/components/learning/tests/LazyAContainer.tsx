import { Suspense, lazy } from "react";

const LazyModuleA = lazy(() => import("./LazyModuleA"));

export const LazyAContainer = () => (
  <Suspense fallback={<div style={{ minHeight: 100 }}>Loading A...</div>}>
    <LazyModuleA />
  </Suspense>
);
