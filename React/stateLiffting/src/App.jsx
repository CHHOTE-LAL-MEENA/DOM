import { useState, useEffect, createContext } from "react";
import Card from "./components/Card";
import Logout from "./components/Logout";
import Login from "./components/Login";
import ChildA from "./components/ChildA";

// CONDITIONAL RENDERING

// function App() {
//   // const [name, setName] = useState("");
//   const [isLoggedIn, setLoggedIn] = useState(true);

//   // FIRST METHOD FOR THE CONDITIONAL RENDERING

//   // if (isLoggedIn) {
//   //   return <Logout />;
//   // } else {
//   //   return <Login />;
//   // }

//   if (!isLoggedIn) {
//     return <Login />;
//   }

//   return (
//     <>
//       {/* <Card name={name} setName={setName} />
//       <p>Name state variable ki value in the parent is : {name}</p> */}

//       {/* SECOND METHOD */}
//       {/* <div>{isLoggedIn ? <Logout /> : <Login />}</div> */}

//       {/* THIRD METHOD */}
//       <div>{isLoggedIn && <Logout />}</div>
//     </>
//   );
// }

//USEEFFECT HOOKU
// function App(){
//   const [count, setCount]=useState(0)
//   useEffect(()=>{
//     alert("Render only first time.")
//   },[])
//   return(
//     <>
//       <button onClick={()=>{setCount(count+1)}}>count:{count}</button>
//     </>
//   )
// }

const UserContext = createContext();

function App() {
  const [user, setUser]=useState({name:"chhotelal"})
  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
export {UserContext}
