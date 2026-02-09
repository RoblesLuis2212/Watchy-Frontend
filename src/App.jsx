import Banner from "./components/pages/Banner/Banner";
import NavbarPage from "./components/NavbarPage";
import Footer from "./components/pages/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import ContenidoRecomendado from "./components/pages/ContenidoRecomendado/ContenidoRecomendado";
import SeccionPeliculas from "./components/pages/SeccionPeliculas/SeccionPeliculas";
import SeccionSeries from "./components/pages/SeccionSeries/SeccionSeries";
import Categorias from "./components/pages/Categorias/Categorias";

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
          <SeccionSeries></SeccionSeries>
          <Categorias></Categorias>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
