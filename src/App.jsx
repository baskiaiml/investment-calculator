import Header from "./components/Header.jsx";
import headerImage from './assets/investment-calculator-logo.png';
import UserInput from "./components/UserInput.jsx";
function App() {
  return (
    <>
    <Header imageUrl={headerImage}/>
    <UserInput/>
    </>
  )
}

export default App
