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

* Route có nhiệm vụ render component theo path được chỉ định. Trong trường hợp ở trên Route có path là / có thêm một props nữa là exact bởi hầu hết các path đều thông qua /. Khi một route không có thuộc tính path thì render component khi URL không tồn tại.

* Bên trên trong file App.js chúng ta đã import 3 component đó là Home, About, Shop , Error trong thư mục src/components, bây giờ chúng ta cần phải xây dựng 3 componet đó.

```js 
//file: components/Home.js
 
import React from "react";
import { Link } from 'react-router-dom';
 
export default function Home() {
  return (
    <div>
        <h1> Home Page</h1>
        <Link to="/about">About / </Link>
        <Link to="/shop">Shop / </Link>
        <Link to="/404">404 / </Link>
    </div>
  );
};
```
```js
//file: components/About.js
 
import React from "react";
import { Link } from 'react-router-dom';
 
export default function About() {
  return (
    <div>
     <h1> About Page</h1>
      <Link to="/">Home Page </Link>
    </div>
  );
};
```
```js
//file: components/Shop.js
 
import React from "react";
import { Link } from 'react-router-dom';
 
export default function Shop() {
  return (
    <div>
     <h1> Shop Page</h1>
      <Link to="/">Home Page </Link>
    </div>
  );
};
```

```js
//file: components/Error.js
 
import React from "react";
import { Link } from 'react-router-dom';
 
export default function Shop() {
  return (
    <div>
     <h1> 404 - Error Page</h1>
      <Link to="/">Home Page </Link>
    </div>
  );
};
````
** Component Link cho phép chúng ta chuyển qua lại giữa các component thông qua URL, nó tương tự như thẻ a trong html. 

/////////////////
# React Router
* Trang web gồm nhiều trang khác nhau, mỗi trang ánh xạ với URL
* Hiện tại phiên bản mới nhất v6.4
## Các component chính
* BrowserRouter: context cho các component khác
* Routercontainer:
* Route: khai báo một đường dẫn và component tương ứng
* Link/NavLink: điều hướng URL tới các màn hình khách nhau 
* Outlet: giống màn hình hiển thị (khi URL khớp với Route nào thì element tương ứng sẽ được hiện thị trong Outlet)













