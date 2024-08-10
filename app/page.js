import ImageGallery from "./components/ImageGallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Page() {
  return (
    <>
<Navbar bgColor="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-600" />
      <section className="text-gray-600 body-font">

      <div className="container mx-auto px-5 py-24 flex flex-wrap lg:flex-nowrap">
        {/* Left section with the iframe */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <h3 className="text-6xl font-bold flex justify-center text-black">
            CatSight 
          </h3>
          <br />
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
          </p>
          {/* Container for iframe */}
          <div className="w-full h-full mt-6">
            <iframe
              id="AuraXFrame"
              title="AuraX"
              width="100%"
              height="100%"
              style={{
                aspectRatio: '1',
                maxHeight: '100vh',
                maxWidth: '100vw',
                outline: 'none',
                border: 'none',
              }}
              src="https://dashboard.aurax.co.in/model/66b63125b51f55f767b0327f"
            />
          </div>
        </div>

        {/* Right section with the icons and text */}
        <div className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-400 text-green-500 mb-5">
              <img src="/screwm.webp" alt="pana" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-400 text-green-500 mb-5">
              <img src="\pana.webp" alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-400 text-green-500 mb-5">
              <img src="\ladder.webp" alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="additional-text-container align-text-bottom p-5 text-gray-900">
      <section className="text-gray-600 body-font">
        <h1 className="flex justify-center text-2xl">OUR TEAM</h1>
  <div className="container px-5 py-18 mx-auto">
    <div className="flex flex-wrap-m-4 ">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/rishi.jpg"/>
          <p className="leading-relaxed">Saptarshi Mahapatra</p>
          <span className="inline-block h-1 w-10 rounded bg-green-400 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">CatSight</h2>
          <p className="text-gray-500">UI/UX Designer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/WhatsApp Image 2024-08-10 at 00.43.32_f72522ec.jpg"/>
          <p className="leading-relaxed">Siddhant Bhagat</p>
          <span className="inline-block h-1 w-10 rounded bg-green-400 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">CatSight</h2>
          <p className="text-gray-500">Web Developer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/IMG_0109.jpg"/>
          <p className="leading-relaxed">Suyash Verma</p>
          <span className="inline-block h-1 w-10 rounded bg-green-400 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">CatSight</h2>
          <p className="text-gray-500">ML Developer</p>
        </div>
      </div>
    </div>
  </div>


</section>
      </div>

    <div className="container mx-auto p-8">
      <ImageGallery />
    </div>
    

<Footer/>
    </>
  );
}
