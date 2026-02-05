import Banner from "./components/pages/Banner/Banner";
import NavbarPage from "./components/NavbarPage";
import Footer from "./components/pages/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import ContenidoRecomendado from "./components/pages/ContenidoRecomendado/ContenidoRecomendado";

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <NavbarPage></NavbarPage>
        </header>
        <main>
          <Banner></Banner>
          <ContenidoRecomendado></ContenidoRecomendado>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
