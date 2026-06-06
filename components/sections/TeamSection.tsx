import React from "react";

export function TeamSection() {
  return (
    <section
      id="team"
      style={{
        width: "100%",
        maxWidth: "1920px",
        margin: "0 auto",
        height: "637px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "1160px",
          height: "477px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            width: "140px",
            height: "28px",
            borderRadius: "100px",
            backgroundColor: "#FFF0F1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            marginBottom: "24px",
          }}
        >
          <svg viewBox="0 0 640 512" width="20" height="20" fill="#E8393A">
            <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80-35.8 80-80 80zm352 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM320 256c-61.9 0-112-50.1-112-112S258.1 32 320 32s112 50.1 112 112-50.1 112-112 112zm176 32h-16.5c-20 12.3-44.4 19.5-70.3 20.8 38.3 33.3 62.8 81.3 62.8 135.2V480h104c26.5 0 48-21.5 48-48v-28c0-64.1-51.9-116-116-116zm-352 0C80.1 288 28.2 339.9 28.2 404v28c0 26.5 21.5 48 48 48h104v-36c0-53.9 24.5-101.9 62.8-135.2-25.9-1.3-50.3-8.5-70.3-20.8H144zM320 320c-70.7 0-128 57.3-128 128v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-70.7-57.3-128-128-128z" />
          </svg>
          <span
            style={{
              color: "#E8393A",
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            OUR TEAM
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "41.63px",
            lineHeight: "52px",
            letterSpacing: "-0.84px",
            color: "#1A1A1A",
            textAlign: "center",
            margin: "0 0 48px 0",
            whiteSpace: "pre-line",
          }}
        >
          {"Built by a Team Passionate About\nFinance & Technology"}
        </h2>

        {/* Cards Container */}
        <div
          style={{
            width: "1096px",
            height: "278px",
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              position: "relative",
              width: "280px",
              height: "278px",
              borderRadius: "22px",
              border: "1px solid #E8E6E1",
              backgroundColor: "#F9F8F6",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "33px",
                left: "100px",
                width: "80px",
                height: "80px",
                borderRadius: "50px",
                border: "3px solid #FFFFFF",
                background: "linear-gradient(135deg, #FFF0F1 0%, #F9E8EA 100%)",
                color: "#E8393A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sans, sans-serif)",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              HG
            </div>
            <h3
              style={{
                position: "absolute",
                top: "128.8px",
                left: "29px",
                width: "239px",
                height: "23px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "17.98px",
                lineHeight: "23px",
                textAlign: "center",
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Harshwardhan Gawandi
            </h3>
            <p
              style={{
                position: "absolute",
                top: "156px",
                left: "29px",
                width: "222px",
                height: "17px",
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 500,
                fontSize: "12.98px",
                lineHeight: "17px",
                textAlign: "center",
                color: "#5A5A5A",
                margin: 0,
              }}
            >
              Founder & CEO
            </p>
            <p
              style={{
                position: "absolute",
                top: "183px",
                left: "29px",
                width: "222px",
                height: "62.39px",
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 400,
                fontSize: "12.51px",
                lineHeight: "20px",
                textAlign: "center",
                color: "#5A5A5A",
                margin: 0,
              }}
            >
              Passionate about making financial intelligence accessible to every retail investor in India.
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              position: "relative",
              width: "280px",
              height: "278px",
              borderRadius: "22px",
              border: "1px solid #E8E6E1",
              backgroundColor: "#F9F8F6",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "33px",
                left: "100px",
                width: "80px",
                height: "80px",
                borderRadius: "50px",
                border: "3px solid #FFFFFF",
                background: "linear-gradient(135deg, #E6F9F7 0%, #E0F3F1 100%)",
                color: "#00C4B5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sans, sans-serif)",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              SP
            </div>
            <h3
              style={{
                position: "absolute",
                top: "128.8px",
                left: "29px",
                width: "239px",
                height: "23px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "17.98px",
                lineHeight: "23px",
                textAlign: "center",
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Suyash Pathak
            </h3>
            <p
              style={{
                position: "absolute",
                top: "156px",
                left: "29px",
                width: "222px",
                height: "17px",
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 500,
                fontSize: "12.98px",
                lineHeight: "17px",
                textAlign: "center",
                color: "#5A5A5A",
                margin: 0,
              }}
            >
              Technical Co-Founder
            </p>
            <p
              style={{
                position: "absolute",
                top: "183px",
                left: "29px",
                width: "222px",
                height: "62.39px",
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 400,
                fontSize: "12.51px",
                lineHeight: "20px",
                textAlign: "center",
                color: "#5A5A5A",
                margin: 0,
              }}
            >
              Building the AI infrastructure that powers real-time market intelligence at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
