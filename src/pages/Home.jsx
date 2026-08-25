import Nav from '../components/Nav';
import Hero from '../components/Hero';
import StorySection from '../components/StorySection';
import JourneyPreview from '../components/JourneyPreview';
import CraftPreview from '../components/CraftPreview';
import VillagePreview from '../components/VillagePreview';
import TeaPreview from '../components/TeaPreview';
import LocationPreview from '../components/LocationPreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StorySection />
        <JourneyPreview />
        <CraftPreview />
        <VillagePreview />
        <TeaPreview />
        <LocationPreview />
      </main>
      <Footer />
    </>
  );
}
