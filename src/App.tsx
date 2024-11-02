import './App.css'
import { Etapas } from './components/home/etapas'
import { Servicos } from './components/home/servicos'
import { SubBanner } from './components/home/subbanner'

function App() {

  return (
    <div>
      <Etapas />
      <SubBanner />
      <Servicos />
    </div>
  )
}

export default App
