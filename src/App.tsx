import './App.css'
import { Container } from './components/container'
import { Etapas } from './components/home/etapas'
import { Servicos } from './components/home/servicos'

function App() {

  return (
    <div>
      <Container >
        <Etapas />
        <Servicos />
      </Container>
    </div>
  )
}

export default App
