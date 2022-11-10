# Tìm hiểu thư viện React Router
* React Router là một thư viện cho việc điều hướng URL tiêu chuẩn trong React, Nó cho phép chúng ta có thể đồng bộ UI với URL. Được thiết kế với API đơn giản, từ đó cho phép giải quyết các vấn đề về URL một cách nhanh chóng.
* Để sử dụng React Router chúng ta cần phải cài đặt thư viện này vào trong dự án React bằng cách sử dụng NPM:
```js
npm install react-router-dom
```
* Sau khi cài đặt thành công, trong trường hợp cần dùng đến React Router bạn chỉ cần import nó component đó.
```js
import { BrowserRouter, Route, Switch } from 'react-router-dom';
```
* ví dụ:

```js
src/
---components/
--------About.js
--------Home.js
---------Shop.js
---index.js
---App.js
...more...
```
