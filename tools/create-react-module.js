#!/usr/bin/env node
/**
 * CLI tạo khung module React kiểu Angular (rỗng, biên dịch được)
 * @Author: CHUNAM
 */

import fs from "fs";
import path from "path";
import process from 'node:process';
import { log } from "node:console";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error(
    "❌ Vui lòng nhập tên module. Ví dụ: npx create-react-module news"
  );
  process.exit(1);
}

const moduleName = args[0];
const pascalName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
const currentDir = process.cwd();
log(`🚀 Tạo module React: "${moduleName}" tại "${currentDir}"`);
const moduleDir = path.join(currentDir, moduleName);

// Helper function
const createFile = (filePath, content) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content.trimStart() + "\n");
};

// 1️⃣ Model
createFile(
  path.join(moduleDir, `${pascalName}.model.ts`),
  `
export interface I${pascalName} {
  // TODO: define fields here
}

export class ${pascalName}Model implements I${pascalName} {
  constructor(init?: Partial<I${pascalName}>) {
    Object.assign(this, init);
  }
}
`
);

// 2️⃣ Service
createFile(
  path.join(moduleDir, `${pascalName}.service.ts`),
  `
/**
 * ${pascalName} Service
 * TODO: implement API methods here
 */
export const ${pascalName}Service = {
  // Example: getAll: async () => {}
};
`
);

// 3️⃣ Component
createFile(
  path.join(moduleDir, `${pascalName}.tsx`),
  `
import React from "react";

export const ${pascalName}: React.FC = () => {
  return (
    <div className="${moduleName}-component">
      <h3>${pascalName} Component</h3>
    </div>
  );
};

export default ${pascalName};
`
);

// 4️⃣ Module
createFile(
  path.join(moduleDir, `${pascalName}.module.tsx`),
  `
import React from "react";
import { ${pascalName} } from "./${pascalName}";

export const ${pascalName}Module: React.FC = () => {
  return (
    <div className="${moduleName}-module">
      <${pascalName} />
    </div>
  );
};

export default ${pascalName}Module;
`
);

// 5️⃣ Routes
createFile(
  path.join(moduleDir, `${pascalName}.routes.tsx`),
  `
import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

const ${pascalName}Module = lazy(() => import("./${pascalName}.module"));

export const ${moduleName}Routes: RouteObject[] = [
  {
    path: "/${moduleName}/*",
    element: <${pascalName}Module />,
  },
];
`
);

// 6️⃣ SCSS
createFile(path.join(moduleDir, `${pascalName}.scss`), ``);

// 7️⃣ Index
createFile(
  path.join(moduleDir, "index.ts"),
  `
export * from "./${pascalName}.routes";
export { default as ${pascalName}Module } from "./${pascalName}.module";
`
);

  `🎉 Module "${moduleName}" đã được tạo thành công tại "${moduleDir}"!`
);
