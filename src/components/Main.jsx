import React from "react";
import headline_desktop_img from "../assets/images/image-web-3-desktop.jpg";
import headline_mobile_img from "../assets/images/image-web-3-mobile.jpg";
import article_imag_01 from "../assets/images/image-retro-pcs.jpg";
import article_imag_02 from "../assets/images/image-top-laptops.jpg";
import article_imag_03 from "../assets/images/image-gaming-growth.jpg";

function Main() {
  return (
    <main className="md:grid md:grid-cols-3 flex flex-col gap-x-[30px] gap-y-[60px] mt-[30px]">
      <section aria-labelledby="headline_title" className="md:col-span-2">
        <div className="headline_container md:grid md:grid-cols-2 md:gap-[30px]">
          <div className="img_container md:col-span-2">
            <img src={headline_desktop_img} alt="Headline" className="hidden md:block" />
            <img src={headline_mobile_img} alt="Headline" className="md:hidden" />
          </div>
          <h1 id="headline_title" className="text-[2.67rem] my-4 md:my-0 md:text-[3.73rem] leading-none font-extrabold">
            The Bright Future of Web 3.0?
          </h1>
          <div className="flex flex-col justify-between items-start">
            <p className="text-[#5E607A] py-4">
              We dive into the next evolution of the web that claims to put the power of the platforms back into the
              hands of the people. But is it really fulfilling its promise?
            </p>
            <button className="text-[14px] uppercase tracking-widest font-bold bg-soft-red hover:bg-black hover:text-white px-6 py-3">
              Read more
            </button>
          </div>
        </div>
      </section>
      <aside aria-label="New news" className="bg-very-dark-blue text-white p-6 md:col-span-1">
        <h2 className="text-[2.13rem] md:text-[2.67rem] font-bold text-yellow">New</h2>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="flex flex-col gap-2">
            <h3 className="text-[1.25rem] font-bold hover:text-yellow">
              <a href="#">Hydrogen VS Electric Cars</a>
            </h3>
            <p className="text-[#5E607A]">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </li>
          <hr className="border-[#5E607A] my-2" />
          <li className="flex flex-col gap-2">
            <h3 className="text-[1.25rem] font-bold hover:text-yellow">
              <a href="#">The Downsides of AI Artistry</a>
            </h3>
            <p className="text-[#5E607A]">What are the possible adverse effects of on-demand AI image generation?</p>
          </li>
          <hr className="border-[#5E607A] my-2" />
          <li className="flex flex-col gap-2">
            <h3 className="text-[1.25rem] font-bold hover:text-yellow">
              <a href="#">Is VC Funding Drying Up?</a>
            </h3>
            <p className="text-[#5E607A]">
              Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </p>
          </li>
        </ul>
      </aside>
      <section aria-labelledby="article_01_title" className="grid grid-cols-3 gap-4">
        <div className="img_container">
          <img src={article_imag_01} alt="Article 01" className="w-full h-full object-cover" />
        </div>
        <div className="text_container col-span-2 flex flex-col justify-center gap-4">
          <h3 className="text-[2.13rem] text-soft-red font-bold">01</h3>
          <h4 id="article_01_title" className="text-[1.2rem] text-very-dark-blue font-bold hover:text-soft-red">
            <a href="#">Reviving Retro PCs</a>
          </h4>
          <p className="text-[#5E607A]">What happens when old PCs are given modern upgrades?</p>
        </div>
      </section>
      <section aria-labelledby="article_02_title" className="grid grid-cols-3 gap-4">
        <div className="img_container">
          <img src={article_imag_02} alt="Article 02" className="w-full h-full object-cover" />
        </div>
        <div className="text_container col-span-2 flex flex-col justify-center gap-4">
          <h3 className="text-[2.13rem] text-soft-red font-bold">02</h3>
          <h4 id="article_02_title" className="text-[1.2rem] text-very-dark-blue font-bold hover:text-soft-red">
            <a href="#">Top 10 Laptops of 2022</a>
          </h4>
          <p className="text-[#5E607A]">Our best picks for various needs and budgets.</p>
        </div>
      </section>
      <section aria-labelledby="article_03_title" className="grid grid-cols-3 gap-4">
        <div className="img_container">
          <img src={article_imag_03} alt="Article 01" className="w-full h-full object-cover" />
        </div>
        <div className="text_container col-span-2 flex flex-col justify-center gap-4">
          <h3 className="text-[2.13rem] text-soft-red font-bold">03</h3>
          <h4 id="article_03_title" className="text-[1.2rem] text-very-dark-blue font-bold hover:text-soft-red">
            <a href="#">The Growth of Gaming</a>
          </h4>
          <p className="text-[#5E607A]">How the pandemic has sparked fresh opportunities.</p>
        </div>
      </section>
    </main>
  );
}

export default Main;
