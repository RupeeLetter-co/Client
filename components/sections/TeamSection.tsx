import React from "react";

export function TeamSection() {
  return (
    <section
      id="team"
      className="w-full max-w-[1920px] mx-auto bg-white flex items-center justify-center py-10 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-[1160px] flex flex-col items-center">
        {/* Badge */}
        <div className="w-[140px] h-7 rounded-full bg-brand-light flex items-center justify-center gap-1.5 mb-6">
          <svg viewBox="0 0 640 512" width="20" height="20" fill="#E8393A">
            <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80-35.8 80-80 80zm352 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM320 256c-61.9 0-112-50.1-112-112S258.1 32 320 32s112 50.1 112 112-50.1 112-112 112zm176 32h-16.5c-20 12.3-44.4 19.5-70.3 20.8 38.3 33.3 62.8 81.3 62.8 135.2V480h104c26.5 0 48-21.5 48-48v-28c0-64.1-51.9-116-116-116zm-352 0C80.1 288 28.2 339.9 28.2 404v28c0 26.5 21.5 48 48 48h104v-36c0-53.9 24.5-101.9 62.8-135.2-25.9-1.3-50.3-8.5-70.3-20.8H144zM320 320c-70.7 0-128 57.3-128 128v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-70.7-57.3-128-128-128z" />
          </svg>
          <span
            className="text-brand text-[13px] font-bold tracking-wider"
            style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
          >
            OUR TEAM
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-bold text-2xl sm:text-3xl lg:text-[41.63px] lg:leading-[52px] tracking-tight text-[#1A1A1A] text-center mb-8 md:mb-12 whitespace-pre-line"
          style={{ fontFamily: "var(--font-sans, sans-serif)" }}
        >
          {"Built by a Team Passionate About\nFinance & Technology"}
        </h2>

        {/* Cards Container */}
        <div className="w-full max-w-[1096px] grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {/* Card 1 */}
          <div className="w-full max-w-[280px] rounded-[22px] border border-[#E8E6E1] bg-[#F9F8F6] flex flex-col items-center px-6 py-8">
            {/* Avatar */}
            <div
              className="w-20 h-20 rounded-full border-3 border-white flex items-center justify-center font-bold text-xl text-[#E8393A]"
              style={{
                background: "linear-gradient(135deg, #FFF0F1 0%, #F9E8EA 100%)",
                fontFamily: "var(--font-sans, sans-serif)",
              }}
            >
              HG
            </div>
            {/* Name */}
            <h3
              className="mt-4 font-bold text-base lg:text-lg leading-snug text-center text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-sans, sans-serif)" }}
            >
              Harshwardhan Gawandi
            </h3>
            {/* Role */}
            <p
              className="mt-1 font-medium text-[13px] leading-[17px] text-center text-[#5A5A5A]"
              style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
            >
              Founder & CEO
            </p>
            {/* Description */}
            <p
              className="mt-3 font-normal text-xs sm:text-[12.5px] leading-5 text-center text-[#5A5A5A]"
              style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
            >
              Passionate about making financial intelligence accessible to every retail investor in India.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[280px] rounded-[22px] border border-[#E8E6E1] bg-[#F9F8F6] flex flex-col items-center px-6 py-8">
            {/* Avatar */}
            <div
              className="w-20 h-20 rounded-full border-3 border-white flex items-center justify-center font-bold text-xl text-[#00C4B5]"
              style={{
                background: "linear-gradient(135deg, #E6F9F7 0%, #E0F3F1 100%)",
                fontFamily: "var(--font-sans, sans-serif)",
              }}
            >
              SP
            </div>
            {/* Name */}
            <h3
              className="mt-4 font-bold text-base lg:text-lg leading-snug text-center text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-sans, sans-serif)" }}
            >
              Suyash Pathak
            </h3>
            {/* Role */}
            <p
              className="mt-1 font-medium text-[13px] leading-[17px] text-center text-[#5A5A5A]"
              style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
            >
              Technical Co-Founder
            </p>
            {/* Description */}
            <p
              className="mt-3 font-normal text-xs sm:text-[12.5px] leading-5 text-center text-[#5A5A5A]"
              style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
            >
              Building the AI infrastructure that powers real-time market intelligence at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
