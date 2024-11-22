import About from "./components/About";
import Navbar from "./components/Navbar";
import WhoAmI from "./components/WhoAmI";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-full bg-gradient-to-b from-black to-[#171717] flex flex-col items-center px-6">
        <div className="py-4 sticky top-0">
          <Navbar/>
        </div>
        <About/>
      </div>
      <div className="bg-[#262626]">
        <WhoAmI/>
      </div>
    </div>
  );
}
