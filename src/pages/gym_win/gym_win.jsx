import Footer from "../../components/footer/footer";
import Hero from "../../components/gym_win/Hero/Hero";
import Join from "../../components/gym_win/Join/Join";
import Plans from "../../components/gym_win/Plans/Plans";
import Programs from "../../components/gym_win/Programs/Programs";
import Reasons from "../../components/gym_win/Reasons/Reasons";
import Testimonials from "../../components/gym_win/Testimonials/Testimonials";
import Navbar from "../../components/navbar/navbar.jsx";
import CommentSection from "../Comment/CommentSection.jsx";

function Gym() {
  return (
    <>
      <Navbar />
      <div className="Gym mt-20">
        <Hero />
        <div className="px-8 py-10">
          <Programs />
        </div>
        <div className="px-8 py-10">
          <Reasons />
        </div>
        <Plans />
        <div className="px-8 py-10">
          <Testimonials />
        </div>
        <div className="px-8 py-10">
          <Join />
        </div>
        <div className="py-10">
          <CommentSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Gym;
