# Optimistic vs Pessimistic update là gì? Cho ví dụ

- Optimistic UI Update là cái gì?

Ví dụ bạn đang làm một trang web mạng xã hội, và bạn có thể like mỗi bài viết ở đó. Tưởng tượng rằng nếu người dùng bấm vào nút like và nó mất 2s để server trả về kết quả like của người dùng. Thật sự nó không đem lại cho người dùng cảm giác nhanh mà người dùng mong chờ. Để giải quyết vấn đề đó, chúng ta dùng Optimistic UI Update.

- Một optimistic UI Update là update mà nó hiện sự thay đổi trước khi nhận được kết quả từ server. Nói cách khác là UI sẽ hiện ra kết quả đó trước khi nhận được trả lời từ server.

- khi người dùng like một bài viết, trước khi server trả về kết quả, ta sẽ hiện trên UI rằng người dùng đã like bài viết này.

- Nó chỉ đơn giản vậy thôi! Optimistic UI Update sẽ làm app cảm giác nhanh hơn rất nhiều,từ đó tăng trải nghiệm người dùng lên đáng kể.

**Nếu như server trả về lỗi?**

- Lúc này, bạn có thể sử dụng một toast hay notification để thông báo cho người dùng rằng hành động trên không được thực hiện vì một lỗi từ server (Như trên facebook, nếu bình luận được gửi bị lỗi sẽ hiện một border màu đỏ, và đưa ra lựa chọn cho người dùng)

# Context là gì? Ưu điểm?

- Context cung cấp phương pháp truyền data xuyên suốt component tree mà không cần phải truyền props một cách thủ công qua từng level.
- Thông thường với một ứng dụng React, data được truyền từ trên xuống (cha tới con) thông qua props, điều này có vẻ khá cồng kềnh đối với một số loại props (Ví dụ như locale preference, UI theme) chúng thường được sử dụng bởi rất nhiều component trong ứng dụng. Context cung cấp một cách làm cho phép chúng ta chia sẽ values giống như vậy giữa các components mà không cần truyền giá trị tới tất cả level trong component tree.

**Khi nào nên dùng Context**

- Context được thiết kế để chia sẽ data khi chúng được xem là “global data” của toàn bộ ứng dụng React, chẳng hạn như thông tin về user hiện tại đang đăng nhập, theme, hoặc ngôn ngữ mà người dùng đã chọn. Ví dụ, ở đoạn code bên dưới, chúng ta truyền một “theme” prop để style một Button component:

`
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}
`

- Sử dụng context, chúng ta có thể tránh được việc truyền props qua các elements trung gian:

# Tìm nạp dữ liệu với useEffect
- useEffect có nhiệm vụ phục vụ cùng một mục đích với componentDidMount, componentDidUpdate và componentWillUnmount trong các lớp React, nhưng được hợp nhất thành một API duy nhất.

- Ví dụ ta muốn fetch dữ liệu lần đầu render thay vì sử dụng componentDidMount:

`
componentWillUnmount() {
        fetch("http://localhost:3001/links/")
          .then(response => response.json())
          .then(data => setData(data));
    );
  }
`

- bây giờ ta có kiểu viết dùng useEffect tương đương:

`
 useEffect(() => {
    fetch("http://localhost:3001/links/")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
`
- và nếu như ta muốn nó chạy mỗi lần component được render thì rất đơn giản

`
  useEffect(() => {
    fetch("http://localhost:3001/links/")
      .then(response => response.json())
      .then(data => setData(data));
  }, [abcState, xyzState]);
`

- ta sẽ truyền thêm các giá trị vào mảng phụ và hiểu rằng, mỗi khi một giá trị nào đó trong mảng phụ thay đổi thì useEffect sẽ được chạy lại.

- Và với componentWillUnmount ta sẽ chỉ cần thêm return cleanup() vào useEffect

`
useEffect(() => {
    fetch("http://localhost:3001/links/")
      .then(response => response.json())
      .then(data => setData(data));
      
      return function cleanup() {
          //code ...
      }
  }, []);
`
# Custom hook là gì? Ví dụ một custom hook.
- Custom hooks là việc các bạn tự tạo ra một hook mới với chức năng riêng biệt của nó. Việc này giúp tách phần code logic ra khỏi UI giúp code tường minh, dễ quản lý hơn, tránh lặp lại code và tái sử dụng.
- Ví dụ khi không dùng custom hook:

`
import { useState, useEffect } from 'react'
import Sidebar from 'components/Sidebar'

const App = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  
  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handler)
    
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  return (
    <>
      {width >= 1024 && <Sidebar />}
    </>
  )
}
`

- và bây giờ nếu bạn muốn dùng window width ở component khác thì phải lặp lại phần code trên.

- Xây dựng custom hooks: Cùng tạo tạo ra hook useWindowSize để giải quyết vấn đề trên

`
import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handler = () => {
      setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handler)

    return () => {
        window.removeEventListener('resize', handler)
    }
  }, [])

  return windowSize
}
`

- Và đây là thành quả, chúng ta có thể sử dụng hook useWindowSize ở bất kì component nào.

`
import { useWindowSize } from 'hooks'

const App = () => {
  const { width, height } = useWindowSize()

  return (
    <>
      {width >= 1024 && <Sidebar />}
    </>
  )
}
`