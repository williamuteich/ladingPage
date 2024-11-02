import './App.css'
import { Etapas } from './components/home/etapas'
import { Formulario } from './components/home/formulario'
import { Servicos } from './components/home/servicos'
import { SubBanner } from './components/home/subbanner'

function App() {

  return (
    <div>
      <Etapas />
      <SubBanner />
      <Servicos />
      <Formulario />
    </div>
  )
}

export default App
