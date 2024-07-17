/* eslint-disable react/prop-types */


import RotatedText from "./RotatedText";

export default function Header() {
 

  return (
    <div>
      <div className="min-h-[100vh]">
        <div className=" top-0">
          <div>
            <img
              src="/file.png"
              alt=""
              className="lg:block hidden absolute top-0 right-0 sun-moon"
            />
          
          </div>
          <div className="max-w-[1200px] mx-auto xl:px-0 px-6 pb-16  pt-16 lg:flex items-center">
            <div
              className="lg:w-1/2 relative z-10"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <h6 className="text-textColor font-semibold mb-4">
              Your Personal Astrologer for Fun Cosmic Insights
              </h6>
              <h2 className="lg:text-[70px] font-bold lg:leading-[70px] uppercase mb-9">
              Experience the Magic of Astrology
              </h2>
              <button className="text-xs font-semibold text-white bg-slate-700 py-4 px-12 transition-bg hover:bg-black hover:text-white">
                DISCOVER MORE
              </button>
            </div>
            <div
              className="lg:mt-0 mt-8"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="relative z-10 rounded-[250px]  flex items-center justify-center">
                <img
                  src="/hero-img.png"
                  alt=""
                  className="lg:absolute rounded-[250px] top-0 lg:h-full z-10"
                />
                <img
                  src="/slider-3-shape-3.png"
                  alt=""
                  className="lg:block hidden main_slider_three_img relative z-10"
                />
                <img
                  src="/slider-3-shape-4.png"
                  alt=""
                  className="absolute left-4 top-4 main-slider-three_leaf_one lg:block hidden"
                />
                <img
                  src="/slider-3-shape-5.png"
                  alt=""
                  className="absolute right-16 bottom-0 main-slider-three_leaf_two lg:block hidden"
                />
                <img
                  src="/about-3-flower.png"
                  alt=""
                  className="lg:block hidden absolute right-8 top-0 z-10 about_three__thumb__flower_img"
                  style={{ rotate: "90deg" }}
                />
                <div className="absolute z-10 left-0 right-0 bottom-0 lg:block flex justify-center">
                  <div className="w-[173px] h-[173px] bg-white rounded-full relative flex items-center justify-center main-slider-three_left_text">
                    <RotatedText />
                    <div className="bg-main text-white w-[95px] h-[95px] rounded-full flex items-center justify-center absolute">
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}
