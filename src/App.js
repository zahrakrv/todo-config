import { Container, Navbar } from './layout'
import El from './library/El'

const App = () => {
  const app = El({
    element: 'div',
    child: [Navbar()],
  })
  return Container(app)
}

export default App
