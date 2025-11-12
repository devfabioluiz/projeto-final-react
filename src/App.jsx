import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/aula7/Header"
import Home from "./components/aula7/Home"
import Product from "./components/aula7/Product"
import Contact from "./components/aula7/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Product />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
          
