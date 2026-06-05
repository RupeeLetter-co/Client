import React from "react";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <>
      <style>{`
        .contact-btn-submit:hover { opacity: 0.9; }
      `}</style>
    <section
      id="contact"
      style={{
        width: "100%",
        maxWidth: "1920px",
        margin: "0 auto",
        height: "929px",
        backgroundColor: "#F9F8F6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Center Container */}
      <div
        style={{
          width: "1160px",
          height: "749px",
          position: "relative",
          margin: "0 auto",
        }}
      >
        {/* Header Area */}
        <div
          style={{
            width: "560px",
            height: "165px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              borderRadius: "100px",
              border: "1px solid rgba(232, 57, 58, 0.2)",
              backgroundColor: "rgba(232, 57, 58, 0.05)",
              color: "#e8393a",
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <Mail size={12} strokeWidth={2.5} />
            CONTACT
          </div>

          {/* Heading */}
          <h2
            style={{
              marginTop: "20px",
              fontFamily: "var(--font-sans, sans-serif)",
              fontWeight: 700,
              fontSize: "40px",
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            We'd Love to Hear From You
          </h2>

          {/* Description */}
          <p
            style={{
              marginTop: "16px",
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontSize: "16px",
              lineHeight: "26px",
              color: "#666666",
            }}
          >
            Have a question, partnership opportunity, feedback, or media
            inquiry? Get in touch.
          </p>
        </div>

        {/* Content Area */}
        <div
          style={{
            width: "1096px",
            height: "528px",
            marginTop: "55.8px", // 220.8px from top of container - 165px header = 55.8px
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
          }}
        >
          {/* Left Card (Contact Form) */}
          <div
            style={{
              position: "relative",
              width: "516px",
              height: "528px",
              borderRadius: "32px",
              border: "1px solid #E8E6E1",
              backgroundColor: "#FFFFFF",
              padding: "41px",
              boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.02)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontWeight: 700,
                fontSize: "22px",
                color: "#1A1A1A",
                marginBottom: "32px",
              }}
            >
              Send a Message
            </h3>

            <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    marginBottom: "8px",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#F6F5F3",
                    border: "1px solid transparent",
                    padding: "0 16px",
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    marginBottom: "8px",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  style={{
                    width: "100%",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#F6F5F3",
                    border: "1px solid transparent",
                    padding: "0 16px",
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  marginBottom: "8px",
                }}
              >
                Subject
              </label>
              <input
                type="text"
                style={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "#F6F5F3",
                  border: "1px solid transparent",
                  padding: "0 16px",
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ marginBottom: "0", flex: 1 }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  marginBottom: "8px",
                }}
              >
                Message
              </label>
              <textarea
                style={{
                  width: "100%",
                  height: "120px",
                  borderRadius: "12px",
                  backgroundColor: "#F6F5F3",
                  border: "1px solid transparent",
                  padding: "16px",
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontSize: "14px",
                  outline: "none",
                  resize: "none",
                }}
              />
            </div>

            <button
              className="contact-btn-submit"
              style={{
                width: "434px",
                height: "48px",
                margin: "0 auto",
                borderRadius: "100px",
                backgroundColor: "#E54350",
                color: "#FFFFFF",
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 600,
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "opacity 0.2s",
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              Send Message
            </button>
          </div>

          {/* Right Information Column */}
          <div
            style={{
              width: "516px",
              height: "528px",
              marginLeft: "64px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                borderRadius: "20px",
                border: "1px solid #E8E6E1",
                backgroundColor: "#FFFFFF",
                padding: "24px",
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(232, 57, 58, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#e8393a",
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-sans, sans-serif)",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#1A1A1A",
                    marginBottom: "4px",
                  }}
                >
                  General Inquiries
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "14px",
                    color: "#e8393a",
                  }}
                >
                  harshgawandi24@gmail.com
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              style={{
                borderRadius: "20px",
                border: "1px solid #E8E6E1",
                backgroundColor: "#FFFFFF",
                padding: "24px",
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(0, 196, 181, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00C4B5",
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z" />
                </svg>
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-sans, sans-serif)",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#1A1A1A",
                    marginBottom: "6px",
                  }}
                >
                  Business & Partnerships
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "14px",
                    color: "#666666",
                    lineHeight: "22px",
                    marginBottom: "6px",
                  }}
                >
                  For partnerships, collaborations, media inquiries, and business
                  opportunities:
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "14px",
                    color: "#e8393a",
                  }}
                >
                  harshgawandi24@gmail.com
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              style={{
                borderRadius: "20px",
                border: "1px solid #E8E6E1",
                backgroundColor: "#FFFFFF",
                padding: "24px",
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 176, 32, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFB020",
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-sans, sans-serif)",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#1A1A1A",
                    marginBottom: "6px",
                  }}
                >
                  Product Feedback
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "14px",
                    color: "#666666",
                    lineHeight: "22px",
                  }}
                >
                  We're constantly improving RupeeLetter AI and value feedback from
                  our users. If you have suggestions or feature requests, we'd love
                  to hear from you.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              style={{
                borderRadius: "20px",
                border: "1px solid rgba(232, 57, 58, 0.1)",
                backgroundColor: "#FFF5F5",
                padding: "24px",
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                flex: 1,
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "#e8393a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z" />
                </svg>
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-sans, sans-serif)",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#e8393a",
                    marginBottom: "6px",
                  }}
                >
                  Download the App
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "14px",
                    color: "#666666",
                    lineHeight: "22px",
                  }}
                >
                  Experience RupeeLetter AI on your phone. Available soon on iOS
                  and Android.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
