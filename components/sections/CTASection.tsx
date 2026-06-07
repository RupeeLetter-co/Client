import Image from "next/image";

export function CTASection() {
  return (
    <>
      <style>{`
        .cta-btn-primary:hover { opacity: 0.88; }
        .cta-btn-outline:hover { border-color: rgba(255,255,255,0.6) !important; }
      `}</style>

      <section
        id="cta"
        aria-labelledby="cta-heading"
        className="w-full bg-white py-8 sm:py-12 lg:py-[100px] lg:pb-20"
      >
        {/* Horizontal centring container */}
        <div className="mx-auto max-w-[1096px] px-4 sm:px-6">
          {/* Card */}
          <div
            className="relative w-full min-h-[400px] sm:min-h-[450px] lg:min-h-[497px] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
            style={{
              background:
                "linear-gradient(135deg, #1A1A1A 0%, #2D1C1C 100%)",
            }}
          >
            {/* ── Ambient glow: red top-right ── */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full pointer-events-none translate-x-[30%] -translate-y-[30%] blur-[4px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(210,45,45,0.65) 0%, transparent 70%)",
              }}
            />

            {/* ── Ambient glow: teal bottom-left ── */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full pointer-events-none -translate-x-[30%] translate-y-[30%] blur-[4px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,175,155,0.50) 0%, transparent 70%)",
              }}
            />

            {/* ── Content (z-indexed above glows) ── */}
            <div className="relative z-10 flex flex-col items-center w-full">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full shrink-0"
                style={{ backgroundColor: "#FFFFFF1A" }}
              >
                <span
                  className="text-xs font-medium tracking-[0.15em] uppercase whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  ✦ READY TO GET STARTED?
                </span>
              </div>

              {/* Heading container */}
              <div className="mt-5 sm:mt-6 w-full max-w-[976px] text-center">
                {/* Line 1 */}
                <h2
                  id="cta-heading"
                  className="text-3xl sm:text-4xl lg:text-[48.25px] lg:leading-[64px] font-bold text-white m-0 p-0"
                  style={{
                    fontFamily:
                      "var(--font-fraunces, 'Fraunces', serif)",
                  }}
                >
                  Stop Chasing News.
                </h2>

                {/* Line 2 – italic accent */}
                <p
                  className="text-3xl sm:text-4xl lg:text-[48.25px] lg:leading-[64px] font-semibold italic m-0 p-0"
                  style={{
                    fontFamily:
                      "var(--font-fraunces, 'Fraunces', serif)",
                    color: "#FF4D57",
                  }}
                >
                  Let AI Do the Work.
                </p>
              </div>

              {/* Description */}
              <p
                className="mt-3 sm:mt-4 w-full max-w-[480px] text-center text-sm sm:text-base lg:text-[16.5px] lg:leading-7"
                style={{
                  fontFamily:
                    "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  color: "#FFFFFFA6",
                }}
              >
                Download RupeeLetter AI today and join thousands of investors who
                make smarter decisions every day.
              </p>

              {/* Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Download App */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.rupeeletter.newsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 h-[54px] rounded-full bg-white text-[#1A1A1A] font-semibold text-sm no-underline tracking-[0.01em] transition-opacity duration-200 shrink-0"
                  style={{
                    fontFamily:
                      "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  }}
                >
                  <span>Download App</span>
                  <Image
                    src="/assets/GooglePlayButton.svg"
                    alt="Google Play"
                    width={15}
                    height={17}
                    className="shrink-0"
                  />
                </a>

                {/* Contact Us */}
                <a
                  href="#contact"
                  className="cta-btn-outline inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 h-[54px] rounded-full bg-transparent text-white font-semibold text-sm no-underline tracking-[0.01em] transition-[border-color] duration-200 shrink-0"
                  style={{
                    fontFamily:
                      "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    border: "1px solid #FFFFFF4D",
                  }}
                >
                  <Image
                    src="/assets/mail.svg"
                    alt=""
                    aria-hidden="true"
                    width={18}
                    height={18}
                    className="shrink-0"
                  />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
