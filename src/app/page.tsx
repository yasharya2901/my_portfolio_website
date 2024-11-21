import About from "./components/About";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-full bg-black">
      <Navbar/>
      <About/>
    </div>
  );
}
