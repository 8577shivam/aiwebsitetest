import React from "react";
import Navbar from "../components/Navbar";
import ImageSection from "../components/ImageSection";
import Header from "../components/Header";
import MouseFollowCircle from "../components/MouseFollowCircle";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ImageSection />
      {/* <MouseFollowCircle /> */}
    </div>
  );
};

export default Home;
