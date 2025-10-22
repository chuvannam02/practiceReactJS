import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

// const NewsModule = lazy(() => import("./News.module"));
const NewsModule = lazy(() =>
  import("./News.module").then((m) => ({ default: m.default }))
);
// React.lazy() chỉ hoạt động với export default, vì nó mong chờ module trả về:
export const newsRoutes: RouteObject[] = [
  {
    path: "/news/*",
    element: React.createElement(NewsModule),
  },
];

// ✅ Cách 1 — nếu News.module.tsx có export default:
// Trong file News.module.tsx (hoặc .tsx), đảm bảo có dòng:

// export default function NewsModule() {
//   return (
//     <div>
//       <h3>News Module</h3>
//     </div>
//   );
// }

// Khi đó file News.routes.ts giữ nguyên như sau là đúng:

// import { lazy } from "react";
// import { RouteObject } from "react-router-dom";

// const NewsModule = lazy(() => import("./News.module"));

// export const newsRoutes: RouteObject[] = [
//   {
//     path: "/",
//     element: <NewsModule />, // ✅ hoạt động chính xác
//   },
// ];
