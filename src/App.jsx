import Banner from "./components/pages/Banner/Banner";
import NavbarPage from "./components/NavbarPage";

function App() {

  return (
    <>
      <header>
        <NavbarPage></NavbarPage>
        <main>
          <Banner></Banner>
        </main>
      </header>
    </>
  )
}

export default App;
