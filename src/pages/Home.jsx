import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import colors from "../assets/colors";
import heroBg from "../assets/home-hero.jpg";
import expertiseProgramming from "../assets/home-expertise-programming.png";
import expertiseServices from "../assets/home-expertise-services.png";
import expertiseFms from "../assets/home-expertise-fms.png";
import { Scale } from "@mui/icons-material";

const HERO_BG = heroBg;

const expertise = [
  {
    image: expertiseProgramming,
    title: "NEW AGE PROGRAMMING",
    description:
      "From scalable web applications to enterprise-grade software, our experts craft innovative future-ready technologies.",
    to: "/products",
  },
  {
    image: expertiseServices,
    title: "SERVICES",
    description:
      "We offer comprehensive IT support, including desktop management, remote troubleshooting, and technology management for smooth operations.",
    to: "/services",
  },
  {
    image: expertiseFms,
    title: "FMS/ NETWORK SERVICES",
    description:
      "Our FMS and networking services include secure remote access, firewall protection, and network optimization for enhanced connectivity and security.",
    to: "/facility-management-services",
  },
];

export default function Home() {
  const aboutRef = useRef(null); // wraps the whole About section
  const dotRef = useRef(null); // the orange dot — moved via DOM in rAF, not React state

  useEffect(() => {
    let target = 0; // 0-100, where the dot SHOULD be based on scroll
    let current = 0; // 0-100, where the dot IS right now (eased toward target)
    let rafId;

    const computeTarget = () => {
      if (!aboutRef.current) return;

      const rect = aboutRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress starts when About section enters viewport, ends when it leaves
      const start = windowHeight;
      const end = -rect.height;

      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));

      target = progress * 100;
    };

    const animate = () => {
      // ease current toward target (lerp) — this is what makes the motion smooth
      current += (target - current) * 0.08;
      if (dotRef.current) {
        dotRef.current.style.left = `${current}%`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleScroll = () => computeTarget();

    computeTarget();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  //Expert Section
  const [dotPosition, setDotPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const expertiseSection = document.getElementById("our-expertise");

      if (!expertiseSection) return;

      const rect = expertiseSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = -rect.height;

      let progress = (start - rect.top) / (start - end);

      progress = Math.max(0, Math.min(1, progress));

      setDotPosition(progress * 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          minHeight: {
            xs: 600, // mobile
            sm: 700, // tablet
            md: 800, // desktop
          },

          display: "flex",
          alignItems: "center",
          py: {
            xs: 7,
            sm: 9,
            md: 12,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: 600 },
              ml: { xs: 0, sm: 6, md: 12, lg: 16 },
            }}
          >
            <Typography
              sx={{
                color: colors.white,
                fontWeight: 800,
                fontSize: { xs: "1.6rem", sm: "2rem", md: "2rem" },
                lineHeight: 1.1,
                letterSpacing: "-3px",
                mb: 1,
                textTransform: "uppercase",
                fontFamily: "antom, sans-serif",
                transform: "scaleY(1.55)",
                transformOrigin: "center",
                letterSpacing: 0.10,
                textShadow: "0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              SMART IT SOLUTIONS
            </Typography>
            <Typography
              sx={{
                color: colors.white,
                fontWeight: 500,
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.66rem" },
                lineHeight: 1.5,
                mb: 2.5,
                textTransform: "uppercase",
                letterSpacing: 0.9,
                //transform: Scale(2.1),
                fontFamily: "open sans, sans-serif",
                textShadow: "0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              FOR BUSINESS GROWTH
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "0.82rem", sm: "0.98rem" },
                lineHeight: 1.65,
                mb: 3.5,
                fontWeight: 600,
                maxWidth: 900,
                fontFamily: "open sans, sans-serif",
                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              Crafting tailored IT strategies to align seamlessly with your
              organisational goals, ensuring optimal performance and efficiency.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                backgroundColor: colors.accent,
                color: colors.white,
                fontWeight: 500,
                px: 3,
                py: 1,
                borderRadius: "8px",
                textTransform: "none",
                fontSize: "0.88rem",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: colors.accentDark,
                  boxShadow: "none",
                },
              }}
            >
              Call Us Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── About Us ── */}
      <Box
        ref={aboutRef}
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#6B7986",
          minHeight: { xs: 420, sm: 500, md: 480 },
          py: { xs: 6, sm: 8, md: 10 },
          mt: -10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
          }}
        >
          {/* ── About Content ── */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1100px",
              mx: "auto",
              textAlign: "left",
            }}
          >
            {/* About Us Heading */}
            <Typography
              sx={{
                color: colors.white,
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.6rem" },
                fontFamily: "Anton, sans-serif",
                letterSpacing: "-3px",
                mb: 2,
                textAlign: "left",
              }}
            >
              About Us
            </Typography>

            {/* ── Line + Moving Dot ── */}
            <Box
              sx={{
                position: "relative",
                width: {
                  xs: "100%",
                  md: "calc(100% + 60px)",
                },
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.9)",
                mb: 3.5,
              }}
            >
              {/* Orange Moving Dot */}
              <Box
                ref={dotRef}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "0%",
                  width: "9px",
                  height: "9px",
                  backgroundColor: colors.accent,
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                  willChange: "left",
                  zIndex: 2,
                }}
              />
            </Box>

            {/* ── About Description ── */}
            <Typography
              sx={{
                color: colors.white,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.8,
                mb: 3,
                fontFamily: "open sans, sans-serif",
                maxWidth: "960px",
                textAlign: "left",
              }}
            >
              iFathom makes innovation meet digital transformation. With 20+
              years of growth and trusted by industry leaders like Philips &
              ICICI Prudential, we empower businesses to thrive online and
              ensure their entire IT system is robust and future-ready. We plan
              the building blocks of the world's future.
            </Typography>
          </Box>

          {/* ── Hexagon Cluster ── */}
          <Box
            sx={{
              position: "absolute",

              // Hexagons below the text
              left: "90%",
              bottom: "-105%",

              transform: "translateX(-50%)",

              width: { xs: 220, sm: 270, md: 330 },
              height: { xs: 220, sm: 270, md: 330 },

              zIndex: 1,
            }}
          >
            {/* Outer Hexagon */}
            <Box
              component="svg"
              viewBox="0 0 200 200"
              sx={{
                position: "absolute",
                inset: 0,
                width: "80%",
                height: "80%",
                mt: 8,
                pointerEvents: "none",

                "@keyframes rotateCW": {
                  from: {
                    transform: "rotate(0deg)",
                  },
                  to: {
                    transform: "rotate(360deg)",
                  },
                },

                animation: "rotateCW 20s linear infinite",
                transformOrigin: "50% 50%",
              }}
            >
              <polygon
                points="65,6 135,6 194,65 194,135 135,194 65,194 6,135 6,65"
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="0.5"
              />
            </Box>

            {/* Inner Hexagon */}
            <Box
              component="svg"
              viewBox="0 0 200 200"
              sx={{
                position: "absolute",
                left: "18%",
                top: "22%",
                width: "80%",
                height: "80%",
                mt: 1,
                pointerEvents: "none",

                "@keyframes rotateCCW": {
                  from: {
                    transform: "rotate(360deg)",
                  },
                  to: {
                    transform: "rotate(0deg)",
                  },
                },

                animation: "rotateCCW 26s linear infinite",
                transformOrigin: "50% 50%",
              }}
            >
              <polygon
                points="65,6 135,6 194,65 194,135 135,194 65,194 6,135 6,65"
                fill="none"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="0.5"
              />
            </Box>

            {/* Know More */}
            <Box
              component={Link}
              to="/about"
              sx={{
                position: "absolute",
                left: "50%",
                top: "48%",
                transform: "translate(-50%, -50%)",
                color: colors.white,
                fontFamily: "helvetica-w01-light.woff2,helvetica-w02-light.woff2",
                fontStyle: "italic",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                fontWeight: 500,
                textDecoration: "none",
                whiteSpace: "nowrap",

                "&:hover": {
                  color: colors.accent,
                },
              }}
            >
              Know More
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Our Expertise ── */}
      {/* ── Our Expertise ── */}
      <Box
        id="our-expertise"
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: colors.white,
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Container maxWidth="xl">
          {/* ── Section Heading + Line + Dot ── */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1100px",
              mx: "auto",
              mb: 5,
            }}
          >
            {/* Our Expertise Heading */}
            <Typography
              sx={{
                color: colors.navy,
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.6rem" },
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "0.5px",
                mb: 2,
                textAlign: "left",
              }}
            >
              Our Expertise
            </Typography>

            {/* ── Line + Moving Dot ── */}
            <Box
              sx={{
                position: "relative",
                width: {
                  xs: "100%",
                  md: "calc(100% + 60px)",
                },
                height: "1px",
                backgroundColor: "rgba(107,121,134,0.45)",
                mb: 4,
              }}
            >
              {/* Orange Moving Dot */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: `${dotPosition}%`,
                  width: "9px",
                  height: "9px",
                  backgroundColor: colors.accent,
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                  willChange: "left",
                  transition: "left 0.25s ease-out",
                  zIndex: 2,
                }}
              />
            </Box>
          </Box>

          {/* ── Cards Background ── */}

          <Box
            sx={{
              backgroundColor: "#FA8E0026",
              px: { xs: 2, sm: 4, md: 6 },
              py: { xs: 3, sm: 4, md: 5 },
              width: "100%",
              maxWidth: 1400,
              mx: "auto",
              borderRadius: "4px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: { xs: 3, md: 5 },
              }}
            >
              {expertise.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    backgroundColor: colors.white,
                    border: `1px solid ${colors.border}`,
                    borderRadius: "14px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    flex: { xs: "1 1 100%", sm: "0 1 300px" },
                    width: { xs: "100%", sm: 300 },
                  }}
                >
                  {/* Card image */}
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: { xs: 130, md: 150 },
                      objectFit: "cover",
                      display: "block",
                      py: 1,
                      px: 1,
                      borderRadius: 4,
                    }}
                  />

                  {/* Card body */}
                  <Box
                    sx={{
                      p: { xs: 1.5, md: 2 },
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      height: 250,
                    }}
                  >
                    <Typography
                      sx={{
                        color: colors.navy,
                        fontWeight: 800,
                        fontSize: { xs: "0.8rem", md: "0.85rem" },
                        mb: 1,
                        textTransform: "uppercase",
                        letterSpacing: -1,
                        transform: "scaleY(1.5)",
                        fontFamily: "anton, sans-serif",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: colors.navy,
                        fontSize: { xs: "0.78rem", md: "0.82rem" },
                        mt: 4,
                        lineHeight: 1.25,
                        mb: 2,
                        fontFamily: "'Open Sans', sans-serif",
                        flexGrow: 1,
                        transform: "scaleY(1.5)",
                        letterSpacing: 0.7,
                      }}
                    >
                      {item.description}
                    </Typography>

                    {/* Read More — bottom-right of the card */}
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Button
                        component={Link}
                        to={item.to}
                        variant="outlined"
                        sx={{
                          backgroundColor: colors.navy,
                          borderColor: colors.navy,
                          color: colors.white,
                          fontWeight: 500,
                          fontSize: "0.75rem",
                          textTransform: "none",
                          px: 3,
                          py: 0.6,
                          borderRadius: "4px",
                          "&:hover": {
                            backgroundColor: colors.accent,
                            color: colors.navy,
                            borderColor: colors.accent,
                          },
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}