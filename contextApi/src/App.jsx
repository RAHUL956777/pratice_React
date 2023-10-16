import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
    <h1>context api</h1>
    </UserContextProvider>
  )
}

export default App;
