import MyForm from "./components/MyForm"
import './App.css'

function App() {
  return (
    <div>
      <h2>Forms</h2>
      <MyForm user={{name: '', email:''}}/>

    </div>
  )
}

export default App