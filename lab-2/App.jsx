// const h1 = React.createElement("h1", {
//     id: "message",
//     onClick: function () {
//         console.log("clicked");
//     },
//     children: ["Hello World", "Khang", "Huy"],
// });




// const img = React.createElement("img", {
//     src: "https://cuongdulich.com/assets/posts/1631128229-mu-cang-chai-yen-bai-14.JPG",
//     alt: "MCC",
// })

// const div = React.createElement("div", {
//     className: "Wrapper",
//     children: [
//         h1,
//         img,
//         React.createElement("form", {
//             children: [
//                 React.createElement("div", {
//                     className: 
//                 })
//             ]
//         })
//     ],
// });



// const root = ReactDOM.createRoot(document.querySelector("#app"));
// root.render(div);

//////////////////////////////

// const myName = "Gia Huy";
// const firstName = "Dinh";
// const isHandsome = true;

// function createApp() {
//     const now = new Date();
//     return (
//         <div className="wrapper">
//             <h1 className="heading" onClick={() => console.log("clicked")}>
//                 Hello {firstName} {myName}
//             </h1>

//             <p>Bay gio la {now.toLocaleTimeString()}</p>

//             <img src="https://cuongdulich.com/assets/posts/1631128229-mu-cang-chai-yen-bai-14.JPG" alt="mu cang chai" />

//             {isHandsome && <div>Dinh Gia Huy</div>}

//             <form action="">
//                 <div className="form-field">
//                     <label htmlFor="username">Username</label>
//                     <input type="text" id="username" />
//                     <button>Submit</button>
//                 </div>
//             </form>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero facere rem tenetur excepturi, molestias qui tempora illum? Corrupti nam optio quibusdam tenetur iure mollitia aut aspernatur animi porro a!
//             </p>
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.querySelector("#app"));
// setInterval(() => {
//     root.render(createApp());
// }, 1000);


//////////////////////
//viet hoa chu dau tien, khong dung camelcase

// function Hello({ name, age, role }) { // 1 trong 2 mo hinh du lieu cua Ract
//     return (
//         <h1>Hello {name}, {age}, {role}</h1>
//     );
// }

// function Time() {
//     const now = new Date();
//     return <p>Bay gio {now.toLocaleTimeString()}</p>
// }

// function App() {
//     const myFamily =
//     {
//         name: "Huy",
//         age: 2,
//         role: "Son"
//     }
//         ;

//     return (

//         <div>
//             <Hello {...myFamily} />
//             <Time />
//         </div>
//     );
// }

// const root = ReactDOM.createRoot(document.querySelector("#app"));
// root.render(<App />)

/////////////////////////////


// function Hello({ name = "Gia Huy", children }) { 
//     return (
//         <h1>
//             Hello {name} {children}
//         </h1>
//     );
// }

// Hello.propTypes = {
//     name: PropTypes.string.isRequired,
//     children: PropTypes.node,
// };

// function Avatar({ src, alt }) {
//     return <img src={src} alt={alt}></img>
// }

// Avatar.propTypes = {
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string,
//   };

// Avatar.defaultProps = {
//     src: "https://vcdn1-dulich.vnecdn.net/2022/05/09/shutterstock-280926449-6744-15-3483-9174-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=bGCo6Rv6DseMDE_07TT1Aw",
//     alt: "Nha Trang",
//   };

// function Time() {
//     const now = new Date();
//     return <p>Bay gio {now.toLocaleTimeString()}</p>
// }

// function App() {
//     const myFamily =
//     {
//         name: "Huy",
//         age: 2,
//         role: "Son"
//     }
//         ;

//     return (

//         <div>
//             <Avatar/>
//             <Hello name="Khang" />
//             <Time />
//             <User/>
//         </div>
//     );
// }

// const root = ReactDOM.createRoot(document.querySelector("#app"));
// root.render(<App />)


// const App = () => {
//     const user = {
//         name: "Khangdinh",
//         isAdmin: true,
//     };

//     const names = ["khang", "hanh", "huy"];
//     const listHello = names.map((name) => <Hello name={name} />)

//     return (
//         <div className="container">
//             {listHello}

//             <User user={user} />
//         </div>
//     );

// };
// const root = ReactDOM.createRoot(document.querySelector("#app"));
// root.render(<App />)


// const PokemonApp = () => {
//   const pokemons = [
//     {
//       id: 1,
//       name: "Charmander",
//       type: "fire",
//       image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
//     },
//     {
//       id: 2,
//       name: "Squirtle",
//       type: "water",
//       image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
//     },
//     {
//       id: 3,
//       name: "Butterfree",
//       type: "flying",
//       image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
//     },
//     {
//       id: 4,
//       name: "Rattata",
//       type: "normal",
//       image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
//     },

//   ];

//   return (
//     <div className="pokemon-app">
//       <h1 className="heading">Pokedex</h1>
//       <PokemonList pokemons={pokemons} />
//     </div>
//   );

// };

// const root = ReactDOM.createRoot(document.querySelector("#app"));
// root.render(<PokemonApp />)

///////////////////////////
// const HandlingEvent = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e)
//   };

//   const handleChange = (e) => {
//     console.log(e)
//   };

//   return (
//     <form onSubmit={handleSubmit} onchange = {handleChange}>
//       <input type="text" name = "username" />
//       <select name="gender" id="">
//         <option value="M">Male</option>
//         <option value="F">Female</option>
//       </select>
//       <button>Submit</button>
//     </form>
//   );
// };

// class State extends React.Component {
//   state = {
//     value: 1,
//   };

//   increment = () => {
//     this.setState({value: this.state.value + 1});
//   }

//   decrement = () => {
//     this.setState({value: this.state.value - 1});
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.decrement}>
//           -
//         </button>
//         {this.state.value}
//         <button onClick={this.increment}>
//           +
//         </button>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.querySelector("#app"));
// root.render(<HandlingEvent />)
// root.render(<State/>)



// const App = () => {
//   const [count, setCount] = React.useState(0);


//   increment = () => {
//     setCount(count + 1);
//   };

//   decrement = () => {
//     setCount((previousCount) => previousCount) - 1
//   };

//   const style = { color: count > 0 ? "blue" : count < 0 ? "red" : "#333" };

//   return (
//     <div className="counter">
//       <button onClick={decrement}>-</button>
//       <button style={style}>{count}</button>
//       <button onClick={increment}>+</button>
//     </div>
//   );
// }


// const root = ReactDOM.createRoot(document.querySelector("#app"));
// root.render(<App />)


///////////////////


// const UserApp = () => {
//     const users = [
//         {
//           "id": "d8a7ecf2b2aeadbc8ebbdbcf",
//           "fullname": "Reginald Welch",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/634.jpg",
//           "job": "Product Usability Associate"
//         },
//         {
//           "id": "ddebaafecefb10bdef3e93af",
//           "fullname": "Greg Stark",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1109.jpg",
//           "job": "Product Data Director"
//         },
//         {
//           "id": "accfd2a3e37a693a11f3ab7f",
//           "fullname": "Carl Price",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/267.jpg",
//           "job": "International Accounts Supervisor"
//         },
//         {
//           "id": "c7fcfccf527daabcfee0ac6d",
//           "fullname": "Nicholas Stokes PhD",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/529.jpg",
//           "job": "Future Communications Developer"
//         },
//         {
//           "id": "a17bf3dcfaeba5d148eb5fea",
//           "fullname": "Joy Halvorson",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/431.jpg",
//           "job": "Investor Identity Associate"
//         },
//         {
//           "id": "9dbf2d8f01ccb12dc0ecbd9b",
//           "fullname": "Yolanda Block",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/881.jpg",
//           "job": "Product Applications Manager"
//         },
//         {
//           "id": "cacf54dc9205d0ea963b9d81",
//           "fullname": "Raul Keeling",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/831.jpg",
//           "job": "Chief Usability Orchestrator"
//         },
//         {
//           "id": "9f8b6dcb28daea12cc0fc0fe",
//           "fullname": "Leslie Emard",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/380.jpg",
//           "job": "Direct Metrics Manager"
//         },
//         {
//           "id": "24b7ac3ef3661e311ebabba6",
//           "fullname": "Neil Hermiston",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/257.jpg",
//           "job": "Global Usability Officer"
//         },
//         {
//           "id": "abdf2a314a5d36276b349744",
//           "fullname": "Lyle Hartmann",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/184.jpg",
//           "job": "Dynamic Factors Planner"
//         },
//         {
//           "id": "bde9fd2b6ea43d9ebbedfdba",
//           "fullname": "Mrs. Frankie Kub",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/688.jpg",
//           "job": "Central Infrastructure Officer"
//         },
//         {
//           "id": "cc07ddac45c34e6b517eb3c0",
//           "fullname": "Roderick Armstrong",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg",
//           "job": "International Data Designer"
//         },
//         {
//           "id": "9ed8103bde92f2ed2f01f5d0",
//           "fullname": "Ms. Thomas Stracke DDS",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/241.jpg",
//           "job": "Central Interactions Developer"
//         },
//         {
//           "id": "8a7daf1f1827f7dfffa670ea",
//           "fullname": "Eddie Ferry",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/528.jpg",
//           "job": "Principal Usability Strategist"
//         },
//         {
//           "id": "0c308560ecffeebaa17a97ac",
//           "fullname": "Marion Quitzon",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/576.jpg",
//           "job": "Investor Operations Manager"
//         },
//         {
//           "id": "d5a46cf6cac1df2bbf9ee1a6",
//           "fullname": "Elena Hegmann",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/863.jpg",
//           "job": "Future Marketing Orchestrator"
//         },
//         {
//           "id": "df3b4df4a796caba0e392079",
//           "fullname": "Hilda Haley",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/329.jpg",
//           "job": "Global Metrics Representative"
//         },
//         {
//           "id": "def94addce75243fae36efcc",
//           "fullname": "Willie Rogahn",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/680.jpg",
//           "job": "Direct Group Manager"
//         },
//         {
//           "id": "2f9e543cc76ccceb21464df2",
//           "fullname": "Pam Langworth",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/973.jpg",
//           "job": "Global Implementation Director"
//         },
//         {
//           "id": "8debdfbd84c7cb9183eb19a0",
//           "fullname": "Lyle Heidenreich",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1163.jpg",
//           "job": "Principal Web Technician"
//         }
//       ];

//     return (
//         <div className="user-app">
//             <h1 className="heading">User</h1>
//             <UserList users={users} />
//         </div>
//     );

// };

// const root = ReactDOM.createRoot(document.querySelector("#app"));
// root.render(<UserApp />)



/////////////



// const App = () => {
//   const reviews = [
//     {
//       id: "f78ff93a2f6723ba714b938d",
//       avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/971.jpg",
//       name: "Jorge Farrell",
//       job: "Investor Marketing Producer",
//       content:
//         "Dignissimos libero magnam unde sapiente quaerat vel accusantium reprehenderit. Quam excepturi omnis. Non inventore facilis ipsum iure omnis quis sunt.",
//     },
//     {
//       id: "b39e485adf7eac8ef7ccdb7a",
//       avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/784.jpg",
//       name: "Mrs. Rickey Ritchie",
//       job: "Lead Functionality Consultant",
//       content:
//         "Amet blanditiis quis similique sint accusamus illum magni. Aperiam dolore earum. Odit natus quod cupiditate nam nihil architecto. Occaecati corrupti ipsam praesentium laborum ipsam deleniti sint cum. Optio ducimus cum corrupti dolores debitis.",
//     },
//     {
//       id: "7c5bca0a82a0fb621acf9dc1",
//       avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
//       name: "Hugh Smith",
//       job: "Central Configuration Designer",
//       content:
//         "Repudiandae vitae laboriosam. Eius hic magni ex quam molestiae magnam minus. Hic beatae corporis optio distinctio eveniet provident temporibus aliquid. Pariatur alias dolores quam nobis quidem. Voluptatem reiciendis magni quos neque cum iure itaque quidem. Alias molestias id reiciendis dolorem eius.",
//     },
//     {
//       id: "42ffffe92ecb90376f7b1541",
//       avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/802.jpg",
//       name: "Arnold Lind PhD",
//       job: "Dynamic Web Liaison",
//       content:
//         "Accusantium consectetur unde accusantium asperiores nisi repellat ea delectus. Numquam atque libero sunt. Excepturi error enim dolore quos accusantium unde.",
//     },
//     {
//       id: "1d1570fa3d0dfeb8fbe90a7f",
//       avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/927.jpg",
//       name: "Brandy Stroman",
//       job: "Direct Marketing Producer",
//       content:
//         "Exercitationem quia ad error dicta provident expedita neque eum reprehenderit. Numquam illum minus neque. Sit quod officiis. Tenetur nobis tempore nostrum.",
//     },
//     {
//       id: "fbe30443cc6aecdcf21dd0be",
//       avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/607.jpg",
//       name: "Anna Rogahn MD",
//       job: "Central Program Director",
//       content:
//         "Dolore saepe cum repudiandae mollitia quia aspernatur. Vitae vel illo amet quae quis placeat optio ullam perspiciatis. Aliquid exercitationem expedita maiores numquam. Laborum magni id doloremque quibusdam quod quis explicabo beatae.",
//     },
//     {
//       id: "a353b9c1f8fecbd32b0e1fee",
//       avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/173.jpg",
//       name: "Rufus Adams",
//       job: "Future Functionality Analyst",
//       content:
//         "Error asperiores quia quaerat quos. Enim optio ducimus eius neque et doloribus exercitationem. Molestias ducimus hic eos accusamus commodi saepe. Rem soluta inventore eum dignissimos dolorem nulla quibusdam recusandae. Ullam quibusdam aperiam labore vero repellendus quia ab.",
//     },
//     {
//       id: "a01b99a200f3e728faa3d8c0",
//       avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/296.jpg",
//       name: "Dr. Antonia Lynch",
//       job: "Product Division Coordinator",
//       content:
//         "Voluptates aperiam iusto nihil quidem ad exercitationem quo reiciendis facilis. Error deserunt ullam animi hic commodi. Harum molestias rerum ratione voluptatem. Exercitationem quam repellendus eligendi saepe ex quaerat doloremque temporibus. Enim corrupti rem vitae in animi.",
//     },
//     {
//       id: "bd3ed8ffa3f3be5ec7bc6a1c",
//       avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/227.jpg",
//       name: "Wendy Reilly II",
//       job: "Internal Metrics Producer",
//       content:
//         "Eaque impedit ipsa ratione. Nisi minus doloribus provident soluta. At doloremque distinctio. Facere totam beatae ad optio consectetur ex nostrum harum consequuntur.",
//     },
//     {
//       id: "16e57c53df8280cdce6a7b64",
//       avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/379.jpg",
//       name: "Crystal Kiehn",
//       job: "Corporate Research Technician",
//       content:
//         "Tempore quos minima accusamus quibusdam veniam quod. Nemo tempore exercitationem fuga nobis. Provident fugit pariatur repellat minima iusto vel natus sunt.",
//     },
//   ];

//   return (
//     <div className="user-app">
//       <h1 className="heading">User</h1>
//       <UserList reviews={reviews} />
//     </div>
//   );

// };

// const root = ReactDOM.createRoot(document.querySelector("#app"));
// root.render(<App />)


///////////////////////////

const Review = ({ review, onPrev, isPlay, onNext, onDown, onUp }) => {
  return (
    <div className="review-card">
      <div className="review">
        <div className="author">
          <div className="author-avatar">
            <img src={review.avatar} alt={review.name} />
          </div>

          <div className="author-info">
            <h4 className="author-name">{review.singer}</h4>
            <div className="author-job">{review.jobTitle}</div>

            <div className="Song">
              <p>{review.Song}</p>
            </div>
          </div>


        </div>


      </div>

      <div className="controls">
        <button className="btn-prev" onClick={onPrev}>
          <i class="fa-solid fa-backward-step"></i>
        </button>

        <button className="btn-play" onClick={isPlay}><i class="fa-solid fa-play"></i>
        </button>

        <button className="btn-next" onClick={onNext}>
          <i class="fa-solid fa-forward-step"></i>
        </button>
      </div>
      <div className="volum">
        <button className="btn-turndown" onClick={onDown}>
        <i class="fa-solid fa-volume-low"></i>
        </button>

        <button className="btn-turnup" onClick={onUp}>
          <i class="fa-solid fa-music"></i>
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [index, setIndex] = React.useState(0);

  const reviews = [
    {
      id: "f78ff93a2f6723ba714b938d",
      avatar: "https://vcdn1-giaitri.vnecdn.net/2022/08/08/tangduytan-1659953332-2312-1659954397.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=G5hGugcaD-71nGj6dHPG1g",
      singer: "Tăng Duy Tân",
      Song:
        "Bên trên tầng lầu",
    },
    {
      id: "b39e485adf7eac8ef7ccdb7a",
      avatar: "https://nld.mediacdn.vn/k:2015/miule-1450536907797/miu-le-cu-vo-tu-song.jpg",
      singer: "Miu Lê, Karik, Châu Đăng Khoa",
      Song:
        "Vì Mẹ Anh Bắt Chia Tay",
    },
    {
      id: "7c5bca0a82a0fb621acf9dc1",
      avatar: "https://image.thanhnien.vn/w1024/Uploaded/2022/znetns/2022_08_08/ha-nhi-7-8636.jpg",
      singer: "Hà Nhi",
      Song:
        "Chưa Quên Người Yêu Cũ",
    },
    {
      id: "42ffffe92ecb90376f7b1541",
      avatar: "https://vtv1.mediacdn.vn/thumb_w/650/2017/unnamed-5-1504884168956-1505214712018-crop-1505214720160-crop-1505214738002.jpg",
      singer: "Mai Tiến Dũng",
      Song:
        "Người Như Anh",
    },
    {
      id: "1d1570fa3d0dfeb8fbe90a7f",
      avatar: "http://image.daidoanket.vn/w640/images/upload/vanmt/01292021/ho-ngoc-ha.jpg",
      singer: "Hồ Ngọc Hà",
      Song:
        "Cô Đơn Trên Sofa",
    },
    {
      id: "fbe30443cc6aecdcf21dd0be",
      avatar: "https://event.mediacdn.vn/257767050295742464/image/hot14/2021/4/1/chau-dang-khoa-33-1617253020373680922092.png",
      singer: "Đình Dũng, ACV",
      Song:
        "Đế Vương",
    },

  ];

  const handleNext = () => {
    if (index == reviews.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index == 0) setIndex(reviews.length - 1);
    else setIndex(index - 1);
  };

  const review = reviews[index];

  return (
    <div className="section-reviews">
      {/* <h2 className="section-heading">Our Reviews</h2> */}

      <Review review={review} onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);











