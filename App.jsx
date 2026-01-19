import { Components } from './components/Components'
import { ComponentChildren } from './components/ComponentChildren'
import { Component2 } from './components/Component2'

import './App.css'

function App() {
  return (
    <>
      <Components param1={10} param2={4}/>
      <ComponentChildren/>
      <Component2 param1={false} param2={true}/>
    </>
  )
}
export default App
