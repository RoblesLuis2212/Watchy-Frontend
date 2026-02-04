import Banner from "./components/pages/Banner/Banner";
import NavbarPage from "./components/NavbarPage";
import Footer from "./components/pages/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <NavbarPage></NavbarPage>
        </header>
        <main>
          <Banner></Banner>
          <Footer></Footer>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;
