import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Hero from "../../components/gym_win/Hero/Hero";
import Join from "../../components/gym_win/Join/Join";
import Plans from "../../components/gym_win/Plans/Plans";
import Programs from "../../components/gym_win/Programs/Programs";
import Reasons from "../../components/gym_win/Reasons/Reasons";
import Testimonials from "../../components/gym_win/Testimonials/Testimonials";
import Navbar from "../../components/navbar/navbar.jsx";

import CommentSection from "../Comment/CommentSection.jsx";
import { useGymContext } from "../../context/GymProvider.jsx";

function Gym() {
  const { gyms } = useGymContext();
  let { gymId } = useParams();

  const isLogin = Boolean(localStorage.getItem("token"));
  return (
    <>
      <Navbar isInPanel={false} isLogin={isLogin} />
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

if (!gyms.data) {
  return (
    <div className="z-90 fixed flex h-full w-full items-center justify-center bg-transparent text-center">
      <h1 className="text-3xl text-white">Loading...</h1>
    </div>
  );

  // console.log(gyms.data);
} else {
  // Filter gyms.data based on gymId
  const filteredGymData = gyms.data.filter((gym) => gym.id == gymId);

  return (
    <>
      <Navbar />
      <div className="Gym mt-20">
        <Hero data={filteredGymData} dataId={gymId} />
        <div id="programs">
          <Programs data={filteredGymData} dataId={gymId} />
        </div>
        <div id="reasons">
          <Reasons data={filteredGymData} dataId={gymId} />
        </div>
        <div id="plans">
          <Plans data={filteredGymData} dataId={gymId} />
        </div>
        <div id="testimonials">
          <Testimonials data={filteredGymData} dataId={gymId} />
        </div>
        <div className="px-8 py-10">
          <Join data={filteredGymData} dataId={gymId} />
        </div>
        <div className="py-10">
          <CommentSection data={filteredGymData} dataId={gymId} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Gym;
