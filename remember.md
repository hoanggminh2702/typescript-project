Khổi tạo dự án

Thêm typing cho node
npm install @types/node --save-dev

Thêm config cho typescript:
npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true

Cài nodemon và ts-node để watch thay đổi của file ts
npm install --save-dev ts-node nodemon

Thêm nodemon config để auto watch + reload server

```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/index.ts"
}
```

thêm --file vào exec : "exec": "ts-node ./src/index.ts" để đọc được declare global type vì ts-node does not load files, include and exclude from tsconfig.json on startup by default.

Thêm script để chạy với dự án

```json
"start:dev": "nodemon"
```

Link tham khảo: https://khalilstemmler.com/blogs/typescript/node-starter-project/

Cài express và typing của nó để import vào sử dụng, nếu không thêm typing thì phải dùng require

Cài dotenv và chạy dotenv.config() để truy cập vào biến môi trường

Định nghĩa kiểu cho biến môi trường và khai báo typeRoot trong tsconfig
Link tham khảo: https://dev.to/asjadanis/parsing-env-with-typescript-3jjm

Cơ bản về **dirname:
Link tham khảo: https://www.digitalocean.com/community/tutorials/nodejs-how-to-use**dirname

Để thêm helpler vào thì create handlebars và truyền vào helpler mong muốn
Setup view engine cũng thêm vào config object của create. Link tham khảo: https://github.com/ericf/express-handlebars/issues/147

```typescript
app.get("/", (req, res) => {
  res.render("index", {
    title: "My Website",
    name: "Hoang Minh",
    person: {
      firstname: "Hoàng",
      lastname: "Minh",
    },
    showTitle: true,
  });
});
```

> Các file template cũng phải đổi tên thành .hbs

Partials như là các component
