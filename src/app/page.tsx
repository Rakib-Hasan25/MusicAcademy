import FeaturedSections from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection"
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpcomingWebiner from "@/components/UpcomingWebiner";
import WhyChooseUs from "@/components/WhyChooseUs";


//react.reactnode type functions
export default function Home() {
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]"> 
    
       <HeroSection />
       <FeaturedSections />
       <WhyChooseUs />
       <MusicSchoolTestimonialCards />
       <UpcomingWebiner />
       <Instructors />
       <Footer />
       
    </main>
   
  );
}
