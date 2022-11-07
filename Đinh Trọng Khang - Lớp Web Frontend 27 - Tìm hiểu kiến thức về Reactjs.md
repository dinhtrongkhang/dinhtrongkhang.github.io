
# Đinh Trọng Khang - Lớp Web Frontend 27 - Tìm hiểu kiến thức về Reactjs

#### 1. Các lỗi thường gặp khi sử dụng state/hooks
##### 1.1 setState là hàm bất đồng bộ: 

* Một lỗi mà đa số developer đã từng gặp đó là cố gắng truy cập giá trị state ngay sau khi thực hiện hàm setState(). 

```csharp
handleChange = count => {
  this.setState({ count });
  this.props.callback(this.state.count); // Old state value
};
```
* Việc cập nhật giá trị mới cho state không được thực hiện ngay lập tức, thông thường nó sẽ hoàn thành trong lần render kế tiếp. Vì vậy việc truy cập giá trị state ngay sau khi setState sẽ không phải là state mới nhất được update. Chúng ta có thể giải quyết vấn đề này bằng cách sử dụng callback function của hàm setState(), hàm sẽ được thực thi say khi state được update.

```csharp
handleChange = count => {
  this.setState({ count }, () => {
    this.props.callback(this.state.count); // Updated state value
  });
};
```
##### 1.2 Sửa trực tiếp State: 
* Một lỗi mà đa số developer đã từng gặp đó là cố gắng truy cập giá trị state ngay sau khi thực hiện hàm setState(). 
```csharp
const updateFeaturesList = (e, idx) => {
  listFeatures[idx].checked = e.target.checked;
  setListFeatures(listFeatures);
};
```
* Trong đoạn code trên object listFeatures được sửa một cách trực tiếp state được update với cùng một object do đó UI không được re-render lại. Solution ở đây chúng ta nên dùng hàm map() và object spread để đảm bảo chúng ta không thay đổi trực tiếp state: 

```csharp
const updateFeaturesList = (e, idx) => {
  const { checked } = e.target;
  setListFeatures(listFeatures => {
    return listFeatures.map((feature, index) => {
      if (idx === index) {
        feature = { ...feature, checked };
      }
      return feature;
    });
  });
};
```

##### 1.3 Không thay đổi thứ tự gọi của các hook trong các lần render
* Giờ hãy cùng check component FetchGame có nhiệm vụ lấy thông tin game qua id. 
```csharp
function FetchGame({ id }) {
  if (!id) {
    return 'Please select a game to fetch';
  }

  const [game, setGame] = useState({ 
    name: '',
    description: '' 
  });

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(`/api/game/${id}`);
      const fetchedGame = await response.json();
      setGame(fetchedGame);
    };
    fetchGame();
  }, [id]);

  return (
    <div>
      <div>Name: {game.name}</div>
      <div>Description: {game.description}</div>
    </div>
  );
}
```
* Component FetchGame nhận vào prop id (id của game sẽ được lấy data), hook useEffect() sẽ lấy thông tin game await fetch(/game/${id}) và lưu nó vào state với biến game.
* Vấn đề này xảy ra vì có một return sớm:
```csharp
function FetchGame({ id }) {
  if (!id) {
    return 'Please select a game to fetch';
  }
  
   // ...
}
```
* Khi id là rỗng, component sẽ ngay lập tức render 'Please select a game to fetch' and exits. No hooks are invoked., không chạy qua bất cứ hook nào. Nhưng nếu id không rỗng (ví dụ bằng '1'), các hook useState() và useEffect() sẽ được gọi.

* Việc các hook thực thi với điều kiện có thể dẫn đến những lỗi không mong muốn, khó để debug. Cách React hook hoạt động yêu cầu component phải luôn luôn gọi hook với cùng thứ tự giữa các lần rendering. 
* Chúng ta sẽ giải quyết việc thứ tự của hook không chính xác bằng cách chuyển các câu lệnh return và phần kiểm tra điều kiện vào trong các hook.
```csharp
function FetchGame({ id }) {
  const [game, setGame] = useState({ 
    name: '',
    description: '' 
  });

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(`/api/game/${id}`);
      const fetchedGame = await response.json();
      setGame(fetchedGame);
    };
    if (id) { 
      fetchGame(); 
    }
  }, [id]);

  if (!id) {
    return 'Please select a game to fetch';
  }

  return (
    <div>
      <div>Name: {game.name}</div>
      <div>Description: {game.description}</div>
    </div>
  );
}
```
* Và bây giờ không quan trọng là id rỗng hay không, useState() và useEffect() sẽ luôn luôn được gọi cùng thứ tự trong các lần render.

* Một rule chung để bạn không bị mắc sai lầm ở rule này là hãy để các hook ở phần đầu tiên của nội dung component. Để chắc chắn hơn nữa, bạn nên cài eslint-plugin-react-hooks cho ứng dụng của mình, nó sẽ giúp bạn đảm bảo thứ tự thực hiện của các hook. 

#### 2. Mô hình luồng dữ liệu một chiều - One way data flow và two way data-binding trong React.
##### 2.1 Single-way data flow (Luồng dữ liệu một chiều): 
* ReactJS không có những module chuyên dụng để xử lý data, vì vậy ReactJS chia nhỏ view thành các component nhỏ có mỗi quan hệ chặt chẽ với nhau. Luồng truyền dữ liệu trong ReactJS là luồng dữ liệu một chiều từ cha xuống con. Việc ReactJS sử dụng one-way data flow có thể gây ra một chút khó khăn cho những người muốn tìm hiểu và ứng dụng vào trong các dự án. Tuy nhiên, cơ chế này sẽ phát huy được ưu điểm của mình khi cấu trúc cũng như chức năng của view trở nên phức tạp thì ReactJS sẽ phát huy được vai trò của mình. 

![markdown](https://techtalk.vn/wp-content/uploads/2018/08/3.png)

##### 2.2 Liên kết hai chiều(Two-way Binding)
* Liên kết hai chiều có nghĩa là mọi thay đổi liên quan đến dữ liệu ảnh hưởng đến mô hình sẽ được truyền ngay lập tức đến (các) chế độ xem phù hợp và mọi thay đổi được thực hiện trong chế độ xem (giả sử) của người dùng) sẽ được phản ánh ngay lập tức trong mô hình bên dưới . Khi dữ liệu ứng dụng thay đổi, UI cũng vậy và ngược lại.
![markdown](https://1426548949-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M8jEJk3DAzRpg9xgL2w%2F-MAdNwm-Mer5Duy0YlK0%2F-MAdTq5bGCEnW4W-j1nC%2Fimage.png?alt=media&token=47019c9c-1123-4f48-ae25-7a5acc35bc4b)

#### 3. Chia sẻ trạng thái chung giữa nhiều Component.



#### 4. Controlled Form vs Uncontrolled Form.

##### 4.1 uncontrolled form:
* Sử dụng ref để lấy dữ liệu
* Sử dụng onClick handler để trigger hàm handleSubmitClick. Bên trong hàm handleSubmitClick (khai báo chỗ khác), ta muốn làm gì là việc của ta.
* Do tính thụ động của onClick, ta chỉ có giá trị mới trong input khi click vào 1 thứ gì đó.

```csharp
<input type="text" placeholder="first name" ref={input => this.firstName = input} />
<input type="text" placeholder="family name" ref={input => this.familyName = input} />
<button onClick={this.handleSubmitClick}>Submit</button>
```
##### 4.2 controlled form:
* Sử dụng onChange handler để trigger hàm handleNameChange. Trong handleNameChange, ta cập nhật giá trị trong từng ô input thông qua setState().
* Do tính chất luôn phản ứng trước bất kỳ thay đổi trong input của onChange, kết hợp với setState(), ta luôn có được giá trị mới nhất của input mà chẳng phải đụng tay chân.

```csharp
<input type="text" placeholder="first name" name="firstName" onChange={this.handleNameChange} />
<input type="text" placeholder="family name" name="familyName" onChange={this.handleNameChange} />
```


#### 5. Life cycle vs useEffect.