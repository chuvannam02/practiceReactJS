# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


### Muốn dùng Zod + Spring Boot chung schema
Đây là tình huống trong các hệ thống FE/BE đồng bộ kiểu microfrontend hoặc monorepo (nx workspace).
Có 2 hướng làm chuẩn:

- 💡 Cách 1: Sinh Zod schema tự động từ OpenAPI (Spring Boot → Zod)
Spring Boot sinh OpenAPI spec (bằng springdoc-openapi hoặc Swagger).

FE (TypeScript) dùng công cụ sinh Zod schema tự động:
+ openapi-zod-client
+ orval
+ zodios

Ví dụ:
### Sinh Zod schema + type từ openapi.json
```
npx openapi-zod-client --openapi ./openapi.json --output ./src/api-client.ts
```
→ Kết quả: file TypeScript có sẵn z.object(...) tương ứng với DTO trong Spring.

🟢 Ưu điểm:
Tự động đồng bộ schema giữa FE & BE.
Không phải viết lại schema hai lần.
FE có thể dùng safeParse() validate form trước khi gửi lên API.

- 💡 Cách 2: Dùng JSON Schema làm trung gian
Định nghĩa DTO trong Spring Boot
Sinh ra JSON Schema từ DTO (bằng jackson-module-jsonSchema)
FE convert JSON Schema → Zod (bằng json-schema-to-zod)
👉 Luồng:
```
Spring Boot DTO → JSON Schema → Zod Schema → Form Validation
```

🟢 Ưu điểm:
Ngôn ngữ độc lập (Java, TypeScript, Python đều dùng được)
Tự động hóa pipeline giữa backend và frontend.
