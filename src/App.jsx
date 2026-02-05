import Banner from "./components/pages/Banner/Banner";
import NavbarPage from "./components/NavbarPage";
import Footer from "./components/pages/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import ContenidoRecomendado from "./components/pages/ContenidoRecomendado/ContenidoRecomendado";
import SeccionPeliculas from "./components/pages/SeccionPeliculas/SeccionPeliculas";

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
          <SeccionPeliculas></SeccionPeliculas>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
