import Footer from "./global/footer";
import Header from "./global/header";
import AppRoutes from "./AppRoutes";
import { useQuery } from "@tanstack/react-query";
import getRandomUrl from "./public_pages/home/components/queries/getrandomurl";
import LoadingDiv from "./global/async/Loading";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["bgimg"],
    queryFn: getRandomUrl,
  });

  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (isLoading)
    return <LoadingDiv text={"Loading the cool backround image!"} />;

  return (
    <>
      {/* Background image */}
      <img
        src={`${data.img_url}`}
        alt="Background"
        loading="lazy"
        style={{
          filter: "grayscale(100%)",
          opacity: 0.06,
          mixBlendMode: "lighten",
        }}
        className="fixed top-0 left-0 -z-10 h-full w-full object-cover"
      />

      {/* Main content */}
      <div className="relative z-0 min-w-screen text-neutral-200">
        <Header />

        <main className="flex">
          <div className="mt-20 flex w-full flex-col px-5 md:mt-18 xl:px-20">
            <AppRoutes />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
