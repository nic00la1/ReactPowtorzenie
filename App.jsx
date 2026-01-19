import { Components } from './components/Components'
import { ComponentChildren } from './components/ComponentChildren'
import './App.css'

function App() {
  return (
    <>
      <Components param1={10} param2={4}/>
      <ComponentChildren/>
    </>
  )
}
export default App
