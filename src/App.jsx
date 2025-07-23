import Footer from "./global/footer";
import Header from "./global/header";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Header></Header>

      <main className="flex">
        <AppRoutes></AppRoutes>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
