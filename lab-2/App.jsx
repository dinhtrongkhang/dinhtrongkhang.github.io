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
//     const pokemons = [
//         {
//             id: 1,
//             name: "Charmander",
//             type: "fire",
//             image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
//         },
//         {
//             id: 2,
//             name: "Squirtle",
//             type: "water",
//             image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
//         },
//         {
//             id: 3,
//             name: "Butterfree",
//             type: "flying",
//             image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
//         },
//         {
//             id: 4,
//             name: "Rattata",
//             type: "normal",
//             image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
//         },
        
//     ];

//     return (
//         <div className="pokemon-app">
//             <h1 className="heading">Pokedex</h1>
//             <PokemonList pokemons={pokemons} />
//         </div>
//     );

// };

// const root = ReactDOM.createRoot(document.querySelector("#app"));
// root.render(<PokemonApp />)



///////////////////


const UserApp = () => {
    const users = [
        {
          "id": "d8a7ecf2b2aeadbc8ebbdbcf",
          "fullname": "Reginald Welch",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/634.jpg",
          "job": "Product Usability Associate"
        },
        {
          "id": "ddebaafecefb10bdef3e93af",
          "fullname": "Greg Stark",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1109.jpg",
          "job": "Product Data Director"
        },
        {
          "id": "accfd2a3e37a693a11f3ab7f",
          "fullname": "Carl Price",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/267.jpg",
          "job": "International Accounts Supervisor"
        },
        {
          "id": "c7fcfccf527daabcfee0ac6d",
          "fullname": "Nicholas Stokes PhD",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/529.jpg",
          "job": "Future Communications Developer"
        },
        {
          "id": "a17bf3dcfaeba5d148eb5fea",
          "fullname": "Joy Halvorson",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/431.jpg",
          "job": "Investor Identity Associate"
        },
        {
          "id": "9dbf2d8f01ccb12dc0ecbd9b",
          "fullname": "Yolanda Block",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/881.jpg",
          "job": "Product Applications Manager"
        },
        {
          "id": "cacf54dc9205d0ea963b9d81",
          "fullname": "Raul Keeling",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/831.jpg",
          "job": "Chief Usability Orchestrator"
        },
        {
          "id": "9f8b6dcb28daea12cc0fc0fe",
          "fullname": "Leslie Emard",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/380.jpg",
          "job": "Direct Metrics Manager"
        },
        {
          "id": "24b7ac3ef3661e311ebabba6",
          "fullname": "Neil Hermiston",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/257.jpg",
          "job": "Global Usability Officer"
        },
        {
          "id": "abdf2a314a5d36276b349744",
          "fullname": "Lyle Hartmann",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/184.jpg",
          "job": "Dynamic Factors Planner"
        },
        {
          "id": "bde9fd2b6ea43d9ebbedfdba",
          "fullname": "Mrs. Frankie Kub",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/688.jpg",
          "job": "Central Infrastructure Officer"
        },
        {
          "id": "cc07ddac45c34e6b517eb3c0",
          "fullname": "Roderick Armstrong",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg",
          "job": "International Data Designer"
        },
        {
          "id": "9ed8103bde92f2ed2f01f5d0",
          "fullname": "Ms. Thomas Stracke DDS",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/241.jpg",
          "job": "Central Interactions Developer"
        },
        {
          "id": "8a7daf1f1827f7dfffa670ea",
          "fullname": "Eddie Ferry",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/528.jpg",
          "job": "Principal Usability Strategist"
        },
        {
          "id": "0c308560ecffeebaa17a97ac",
          "fullname": "Marion Quitzon",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/576.jpg",
          "job": "Investor Operations Manager"
        },
        {
          "id": "d5a46cf6cac1df2bbf9ee1a6",
          "fullname": "Elena Hegmann",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/863.jpg",
          "job": "Future Marketing Orchestrator"
        },
        {
          "id": "df3b4df4a796caba0e392079",
          "fullname": "Hilda Haley",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/329.jpg",
          "job": "Global Metrics Representative"
        },
        {
          "id": "def94addce75243fae36efcc",
          "fullname": "Willie Rogahn",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/680.jpg",
          "job": "Direct Group Manager"
        },
        {
          "id": "2f9e543cc76ccceb21464df2",
          "fullname": "Pam Langworth",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/973.jpg",
          "job": "Global Implementation Director"
        },
        {
          "id": "8debdfbd84c7cb9183eb19a0",
          "fullname": "Lyle Heidenreich",
          "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1163.jpg",
          "job": "Principal Web Technician"
        }
      ];

    return (
        <div className="user-app">
            <h1 className="heading">User</h1>
            <UserList users={users} />
        </div>
    );

};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<UserApp />)












