import Image from "next/image";

export function CTASection() {
  return (
    /*
     * Figma: Section = 1920×697px, bg #FFFFFF
     * Vertical centring: (697 - 497) / 2 = 100px top + bottom
     */
    <>
    <style>{`
      .cta-btn-primary:hover { opacity: 0.88; }
      .cta-btn-outline:hover { border-color: rgba(255,255,255,0.6) !important; }
    `}</style>
    <section
      id="cta"
      aria-labelledby="cta-heading"
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "100px",
        paddingBottom: "80px",
        width: "100%",
      }}
    >
      {/* Horizontal centring – card is 1096px on a 1920px canvas */}
      <div
        style={{
          maxWidth: "1096px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        {/*
         * Figma: Card = 1096×497px
         * bg: linear-gradient(135deg, #1A1A1A 0%, #2D1C1C 100%)
         * border-radius: 32px
         */}
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "497px",
            borderRadius: "32px",
            background:
              "linear-gradient(135deg, #1A1A1A 0%, #2D1C1C 100%)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            /* Exact Figma internal padding derived from top positions:
               badge top=80px, bottom=80px (497−54−357=86≈80) */
            paddingTop: "80px",
            paddingBottom: "80px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          {/* ── Ambient glow: red top-right ── */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(210,45,45,0.65) 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
              filter: "blur(4px)",
              pointerEvents: "none",
            }}
          />

          {/* ── Ambient glow: teal bottom-left ── */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,175,155,0.50) 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
              filter: "blur(4px)",
              pointerEvents: "none",
            }}
          />

          {/* ── Content (z-indexed above glows) ── */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/*
             * Figma Badge:
             * w=198px h=26px border-radius=100px bg=#FFFFFF1A
             * From card top: 80px (already handled by paddingTop)
             */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                width: "198px",
                height: "26px",
                borderRadius: "100px",
                backgroundColor: "#FFFFFF1A",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.65)",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                ✦ READY TO GET STARTED?
              </span>
            </div>

            {/*
             * Figma: Heading container top=130px from card top.
             * Badge bottom = 80+26 = 106px → gap = 130-106 = 24px
             */}
            <div
              style={{
                marginTop: "24px",
                width: "100%",
                maxWidth: "976px",
                textAlign: "center",
              }}
            >
              {/* Line 1: Fraunces 700, 48.25px, lh 64px, #FFFFFF */}
              <h2
                id="cta-heading"
                style={{
                  fontFamily:
                    "var(--font-fraunces, 'Fraunces', serif)",
                  fontWeight: 700,
                  fontSize: "48.25px",
                  lineHeight: "64px",
                  color: "#FFFFFF",
                  margin: 0,
                  padding: 0,
                }}
              >
                Stop Chasing News.
              </h2>

              {/* Line 2: Fraunces 600 italic, 48.25px, lh 64px, #FF4D57 */}
              <p
                style={{
                  fontFamily:
                    "var(--font-fraunces, 'Fraunces', serif)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  fontSize: "48.25px",
                  lineHeight: "64px",
                  color: "#FF4D57",
                  margin: 0,
                  padding: 0,
                }}
              >
                Let AI Do the Work.
              </p>
            </div>

            {/*
             * Figma: Description top=265.6px from card top.
             * Heading bottom = 130 + 119.59 = 249.59px → gap = 265.6-249.59 ≈ 16px
             */}
            <p
              style={{
                marginTop: "16px",
                width: "100%",
                maxWidth: "480px",
                fontFamily:
                  "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 400,
                fontSize: "16.5px",
                lineHeight: "28px",
                color: "#FFFFFFA6",
                textAlign: "center",
              }}
            >
              Download RupeeLetter AI today and join thousands of investors who
              make smarter decisions every day.
            </p>

            {/*
             * Figma: Buttons
             * Description bottom = 265.6 + 57.78 = 323.38px
             * Buttons sit ~34px below description bottom
             */}
            <div
              style={{
                marginTop: "34px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {/* Download App: 191×54px, radius 100px, bg #FFFFFF — GP icon right */}
              <a
                href="#download"
                className="cta-btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "191px",
                  height: "54px",
                  borderRadius: "100px",
                  backgroundColor: "#FFFFFF",
                  color: "#1A1A1A",
                  fontFamily:
                    "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "opacity 0.2s",
                  flexShrink: 0,
                }}
              >
                <span>Download App</span>
                <Image
                  src="/assets/GooglePlayButton.svg"
                  alt="Google Play"
                  width={15}
                  height={17}
                  style={{ flexShrink: 0 }}
                />
              </a>

              {/* Contact Us: 165×54px, radius 100px, transparent + border — mail icon left */}
              <a
                href="#contact"
                className="cta-btn-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "165px",
                  height: "54px",
                  borderRadius: "100px",
                  backgroundColor: "transparent",
                  border: "1px solid #FFFFFF4D",
                  color: "#FFFFFF",
                  fontFamily:
                    "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "border-color 0.2s",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/assets/mail.svg"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                  style={{ flexShrink: 0 }}
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
