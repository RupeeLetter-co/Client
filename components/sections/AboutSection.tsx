import React from "react";
import { Info, Newspaper, Sparkles, User, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-[1920px] mx-auto min-h-0 bg-surface py-10 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
      aria-label="About RupeeLetter AI"
    >
      <div className="w-full max-w-[1160px] flex flex-col">
        {/* Top Row */}
        <div className="w-full max-w-[1096px] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-8 mb-10 lg:mb-12">
          {/* Left Column */}
          <div className="w-full lg:max-w-[516px]">
            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#FFF0F1] px-4 h-7 mb-6">
              <Info size={14} color="#E8393A" strokeWidth={2.5} />
              <span
                className="text-[13px] font-bold tracking-[0.05em] text-brand"
                style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
              >
                ABOUT RUPEELETTER
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-sans text-3xl md:text-4xl lg:text-[41.86px] font-bold leading-tight lg:leading-[50.39px] tracking-tight text-[#1A1A1A] mb-6">
              About RupeeLetter AI
            </h2>

            {/* Description */}
            <p
              className="text-sm md:text-[15.55px] leading-relaxed md:leading-[27px] text-[#666666] mb-8 lg:mb-10 max-w-[516px]"
              style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
            >
              We&apos;re building an AI-powered platform that helps investors and traders stay informed, understand market events faster, and make better financial decisions.
            </p>

            {/* Vision Card */}
            <div className="w-full max-w-[516px] rounded-[22px] bg-brand px-6 md:px-8 py-6 flex flex-col justify-center">
              <span
                className="text-[10px] font-bold tracking-[0.1em] text-white/80 mb-2"
                style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
              >
                OUR VISION
              </span>
              <p
                className="text-base md:text-lg font-bold leading-relaxed md:leading-[26px] text-white m-0"
                style={{ fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}
              >
                To become the most trusted AI-powered intelligence platform for retail investors in India.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:max-w-[516px] flex flex-col justify-center">
            <h3 className="font-sans text-xl md:text-2xl lg:text-[25.19px] font-semibold leading-snug lg:leading-[36px] text-[#1A1A1A] mb-5 lg:mb-6">
              Simplifying{" "}
              <span className="text-brand">Financial Information</span> for
              every retail investor in India.
            </h3>
            <p
              className="text-sm md:text-[14.61px] leading-relaxed md:leading-[25px] text-[#666666] m-0"
              style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
            >
              Financial news is often complex, scattered across multiple
              sources, and difficult to process quickly. RupeeLetter AI was
              created to make market information more accessible by combining
              real-time news, artificial intelligence, and easy-to-understand
              insights in one platform.
            </p>
          </div>
        </div>

        {/* Bottom Row - Cards */}
        <div className="w-full max-w-[1096px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="w-full rounded-[14px] border border-[#E8E6E1] bg-white p-5 md:p-6 flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-[#FFF0F1] text-[#E8393A] flex items-center justify-center mb-4">
              <Newspaper size={16} strokeWidth={2} />
            </div>
            <h4 className="font-sans font-bold text-base text-[#1A1A1A] mb-2">
              Real-Time Market News
            </h4>
            <p
              className="text-xs md:text-[12.67px] font-normal leading-5 text-[#666666] m-0"
              style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
            >
              Stay updated with important market developments as they happen,
              curated from trusted sources.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full rounded-[14px] border border-[#E8E6E1] bg-white p-5 md:p-6 flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-[#E6F9F7] text-[#00C4B5] flex items-center justify-center mb-4">
              <Sparkles size={16} strokeWidth={2} />
            </div>
            <h4 className="font-sans font-bold text-base text-[#1A1A1A] mb-2">
              AI-Powered Insights
            </h4>
            <p
              className="text-xs md:text-[12.67px] font-normal leading-5 text-[#666666] m-0"
              style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
            >
              Understand the impact of news and events faster with AI that
              explains what it means for your money.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full rounded-[14px] border border-[#E8E6E1] bg-white p-5 md:p-6 flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-[#FFF8E6] text-[#F5A623] flex items-center justify-center mb-4">
              <User size={16} strokeWidth={2} />
            </div>
            <h4 className="font-sans font-bold text-base text-[#1A1A1A] mb-2">
              Personalized Experience
            </h4>
            <p
              className="text-xs md:text-[12.67px] font-normal leading-5 text-[#666666] m-0"
              style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
            >
              Follow the stocks and topics that matter to you, and get insights
              tailored to your portfolio.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-full rounded-[14px] border border-[#E8E6E1] bg-white p-5 md:p-6 flex flex-col">
            <div className="w-8 h-8 rounded-lg bg-[#EBF3FF] text-[#2B6CB0] flex items-center justify-center mb-4">
              <Users size={16} strokeWidth={2} />
            </div>
            <h4 className="font-sans font-bold text-base text-[#1A1A1A] mb-2">
              Investor Community
            </h4>
            <p
              className="text-xs md:text-[12.67px] font-normal leading-5 text-[#666666] m-0"
              style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}
            >
              Learn, discuss, and grow with a community of like-minded investors
              across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
