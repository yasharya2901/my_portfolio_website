import About from "./components/About";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <div className="w-full h-full bg-black flex flex-col items-center px-6">
      <div className="py-4 sticky top-0">
        <Navbar/>
      </div>
      <About/>
    </div>
    </>
  );
}
