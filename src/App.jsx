import Footer from "./global/footer";
import Header from "./global/header";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="-z-20 min-w-screen text-neutral-200">
      <Header />

      <main className="flex">
        <div className="mt-20 flex w-full flex-col px-5 md:mt-18 xl:px-20">
          <AppRoutes></AppRoutes>

          <img
            src="/bg.webp"
            alt="Background"
            className="fixed top-0 left-0 -z-10 h-full w-full object-cover"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
