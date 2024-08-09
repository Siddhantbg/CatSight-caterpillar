
export default function Page() {
  return (
    <>
      <div className="additional-text-container align-text-bottom p-5 bg-gray-300 text-gray-900">
      <section className="text-gray-600 body-font">
        <h1 className="flex justify-center text-2xl">MY TEAM</h1>
  <div className="container px-5 py-18 mx-auto">
    <div className="flex flex-wrap-m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/1-removebg-preview.png"/>
          <p className="leading-relaxed">Saptarshi Mahapatra</p>
          <span className="inline-block h-1 w-10 rounded bg-yellow-400 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">CatSight</h2>
          <p className="text-gray-500">UI/UX Designer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/1-removebg-preview.png"/>
          <p className="leading-relaxed">Siddhant Bhagat</p>
          <span className="inline-block h-1 w-10 rounded bg-yellow-400 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">CatSight</h2>
          <p className="text-gray-500">Web Developer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/1-removebg-preview.png"/>
          <p className="leading-relaxed">Suyash Verma</p>
          <span className="inline-block h-1 w-10 rounded bg-yellow-400 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">CatSight</h2>
          <p className="text-gray-500">ML Developer</p>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
      
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <h1 className="text-6xl font-bold text-black">CatSight- Hackathon <br /> ke liye banya gya</h1>
    <br />
    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      {/* h-full w-full */}
      {/* 3D MODEL SAPCE */}
      <img alt="feature" class="object-cover object-center" src="/2-removebg-preview.png"/>
      </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-400 text-yellow-500 mb-5">
          <img src="\screwlotee.svg" alt="pana" />
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a class="mt-3 text-yellow-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-400 text-yellow-500 mb-5">
          <img src="\panalotte.svg" alt="" />
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a class="mt-3 text-yellow-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-400 text-yellow-500 mb-5">
          <img src="\laderlotte.svg" alt="" />
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a class="mt-3 text-yellow-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
     
    </>
  );
}
