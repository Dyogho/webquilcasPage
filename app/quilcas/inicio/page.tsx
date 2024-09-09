import Map from "@/components/ui/Map";
import { markers } from "@/src/data/map";
import MissionPage from '../nosotros/mission/page';
import Prueba from "@/components/ui/Prueba";
import FunFairSection from '../../../components/tourism/FunFairSection';
import VacationDestinations from "@/components/tourism/VacationDestiantions";
import Hero from "@/components/ui/Hero";
import { HeroSection } from "../cultura/page";

export default function PageInicio() {
  return (
    <>
      <Hero />
      <HeroSection />
      <MissionPage />

      <div className="w-full h-[500px]">
        <Map markers={markers} />
      </div>
      <FunFairSection />
      <div>
        <VacationDestinations />
      </div>

    </>
  );
}
