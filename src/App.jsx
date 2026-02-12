import Banner from "./components/pages/Banner/Banner";
import NavbarPage from "./components/NavbarPage";
import Footer from "./components/pages/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContenidoRecomendado from "./components/pages/ContenidoRecomendado/ContenidoRecomendado";
import SeccionPeliculas from "./components/pages/SeccionPeliculas/SeccionPeliculas";
import SeccionSeries from "./components/pages/SeccionSeries/SeccionSeries";
import Categorias from "./components/pages/Categorias/Categorias";
import Contacto from "./components/pages/Contacto/Contacto";
import Registro from "./components/pages/Registro/Registro";

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <NavbarPage></NavbarPage>
        </header>
        <main>
          {/* Pagina principal */}
          <Routes>
            <Route path="/"
              element={
                <>
                  <Banner></Banner>
                  <ContenidoRecomendado></ContenidoRecomendado>
                  <SeccionPeliculas></SeccionPeliculas>
                  <SeccionSeries></SeccionSeries>
                  <Categorias></Categorias>
                </>
              }
            >
            </Route>
            <Route path="/contacto"
              element={<Contacto />}
            >
            </Route>
            <Route path="/registro"
              element={<Registro />}
            >

            </Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
