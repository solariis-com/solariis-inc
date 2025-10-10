import SectionsHomepage from "./imports/SectionsHomepage";
import Nav from "./components/Nav";
import HeroWithGradient from "./components/HeroWithGradient";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Nav />
      <div className="w-full">
        <HeroWithGradient />
        <SectionsHomepage />
      </div>
    </div>
  );
}
