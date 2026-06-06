import React from "react";
import { Info, Newspaper, Sparkles, User, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        width: "100%",
        maxWidth: "1920px",
        margin: "0 auto",
        height: "924px",
        backgroundColor: "#F9F8F6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="About RupeeLetter AI"
    >
      <div
        style={{
          width: "1160px",
          height: "744px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top Row */}
        <div
          style={{
            width: "1096px",
            height: "351px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "48px",
          }}
        >
          
          {/* Left Column */}
          <div style={{ width: "516px", height: "351px" }}>
            {/* Badge */}
            <div
              style={{
                width: "210px",
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
              <Info size={14} color="#E8393A" strokeWidth={2.5} />
              <span
                style={{
                  color: "#E8393A",
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                ABOUT RUPEELETTER
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "41.86px",
                fontWeight: 700,
                lineHeight: "50.39px",
                letterSpacing: "-0.84px",
                color: "#1A1A1A",
                margin: "0 0 24px 0",
              }}
            >
              About RupeeLetter AI
            </h2>

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontSize: "15.55px",
                lineHeight: "27px",
                color: "#666666",
                margin: "0 0 40px 0",
                width: "516px",
              }}
            >
              We're building an AI-powered platform that helps investors and traders stay informed, understand market events faster, and make better financial decisions.
            </p>

            {/* Vision Card */}
            <div
              style={{
                width: "516px",
                height: "131px",
                borderRadius: "22px",
                backgroundColor: "#E54350",
                padding: "24px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: "8px",
                }}
              >
                OUR VISION
              </span>
              <p
                style={{
                  fontFamily: "var(--font-fraunces, 'Fraunces', serif)",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "26px",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                To become the most trusted AI-powered intelligence platform for retail investors in India.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div
            style={{
              width: "516px",
              height: "195px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "25.19px",
                fontWeight: 600,
                lineHeight: "36px",
                color: "#1A1A1A",
                margin: "0 0 24px 0",
              }}
            >
              Simplifying <span style={{ color: "#E8393A" }}>Financial Information</span> for every retail investor in India.
            </h3>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontSize: "14.61px",
                lineHeight: "25px",
                color: "#666666",
                margin: 0,
                width: "516px",
              }}
            >
              Financial news is often complex, scattered across multiple sources, and difficult to process quickly. RupeeLetter AI was created to make market information more accessible by combining real-time news, artificial intelligence, and easy-to-understand insights in one platform.
            </p>
          </div>
        </div>

        {/* Bottom Row - Cards */}
        <div
          style={{
            width: "1096px",
            height: "345px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            rowGap: "15px",
            columnGap: "16px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              width: "540px",
              height: "165px",
              borderRadius: "14px",
              border: "1px solid #E8E6E1",
              backgroundColor: "#FFFFFF",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "#FFF0F1", color: "#E8393A", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <Newspaper size={16} strokeWidth={2} />
            </div>
            <h4 style={{ fontFamily: "var(--font-sans, sans-serif)", fontWeight: 700, fontSize: "16px", color: "#1A1A1A", margin: "0 0 8px 0" }}>Real-Time Market News</h4>
            <p style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)", fontSize: "12.67px", fontWeight: 400, lineHeight: "20px", color: "#666666", margin: 0 }}>Stay updated with important market developments as they happen, curated from trusted sources.</p>
          </div>
          {/* Card 2 */}
          <div
            style={{
              width: "540px",
              height: "165px",
              borderRadius: "14px",
              border: "1px solid #E8E6E1",
              backgroundColor: "#FFFFFF",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "#E6F9F7", color: "#00C4B5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <Sparkles size={16} strokeWidth={2} />
            </div>
            <h4 style={{ fontFamily: "var(--font-sans, sans-serif)", fontWeight: 700, fontSize: "16px", color: "#1A1A1A", margin: "0 0 8px 0" }}>AI-Powered Insights</h4>
            <p style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)", fontSize: "12.67px", fontWeight: 400, lineHeight: "20px", color: "#666666", margin: 0 }}>Understand the impact of news and events faster with AI that explains what it means for your money.</p>
          </div>
          {/* Card 3 */}
          <div
            style={{
              width: "540px",
              height: "165px",
              borderRadius: "14px",
              border: "1px solid #E8E6E1",
              backgroundColor: "#FFFFFF",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "#FFF8E6", color: "#F5A623", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <User size={16} strokeWidth={2} />
            </div>
            <h4 style={{ fontFamily: "var(--font-sans, sans-serif)", fontWeight: 700, fontSize: "16px", color: "#1A1A1A", margin: "0 0 8px 0" }}>Personalized Experience</h4>
            <p style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)", fontSize: "12.67px", fontWeight: 400, lineHeight: "20px", color: "#666666", margin: 0 }}>Follow the stocks and topics that matter to you, and get insights tailored to your portfolio.</p>
          </div>
          {/* Card 4 */}
          <div
            style={{
              width: "540px",
              height: "165px",
              borderRadius: "14px",
              border: "1px solid #E8E6E1",
              backgroundColor: "#FFFFFF",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "#EBF3FF", color: "#2B6CB0", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <Users size={16} strokeWidth={2} />
            </div>
            <h4 style={{ fontFamily: "var(--font-sans, sans-serif)", fontWeight: 700, fontSize: "16px", color: "#1A1A1A", margin: "0 0 8px 0" }}>Investor Community</h4>
            <p style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)", fontSize: "12.67px", fontWeight: 400, lineHeight: "20px", color: "#666666", margin: 0 }}>Learn, discuss, and grow with a community of like-minded investors across India.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
