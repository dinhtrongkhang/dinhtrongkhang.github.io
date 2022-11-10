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
* ví dụ: xây dựng một trang landing page với nhiều trang khác nhau. Cấu trúc thư mục của src sẽ như sau:

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
* Trước tiên, chúng ta cần phải thiết lập app sử dụng React Router. Mọi thứ sẽ được render cần phải được bọc bên trong BrowserRouter, chúng ta sẽ lựa chọn component App bởi nó chính là component xử lí logic mặc định trong ReactJS. Trong file index.js của dự án chúng ta sẽ chỉnh sửa lại như sau:

```js
// index.js
...
import { BrowserRouter} from 'react-router-dom';
...
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
```

* Tiếp theo đó ở file src/App.js chúng ta cần phải sử dụng Switch để bọc các Router lại. Đây là điều bắt buộc, tất các các Route cần phải được bọc bởi Switch.

```js
// Ở đây chúng ta import 4 component được xây dựng trong thư mục  src/components
// đó là Home, About, Shop, Error
import React from 'react'
import { Route, Switch } from 'react-router-dom';
 
​import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop'
import Error from './components/Error'
 
 
export defaults function App() {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route component={Error} />
            </Switch>
        </>
    )
}
```
