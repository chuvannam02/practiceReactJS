import { Suspense, lazy } from "react";

const LazyModuleB = lazy(() => import("./LazyModuleB"));

export const LazyBContainer = () => (
  <Suspense fallback={<div style={{ minHeight: 100 }}>Loading B...</div>}>
    <LazyModuleB />
  </Suspense>
);
