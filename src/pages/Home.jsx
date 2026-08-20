import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import colors from "../assets/colors";
import heroBg from "../assets/home-hero.jpg";
import expertiseProgramming from "../assets/home-expertise-programming.png";
import expertiseServices from "../assets/home-expertise-services.png";
import expertiseFms from "../assets/home-expertise-fms.png";

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
  /* ── About Us: animated dot on scroll line ── */
  const aboutRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let target = 0;
    let current = 0;
    let rafId;

    const computeTarget = () => {
      if (!aboutRef.current) return;
      const rect = aboutRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight;
      const end = -rect.height;
      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      target = progress * 100;
    };

    const animate = () => {
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

  /* ── Our Expertise: animated dot on scroll line ── */
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

      {/* ════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════ */}
      <Box
        sx={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          minHeight: { xs: 560, sm: 660, md: 780 },
          display: "flex",
          alignItems: "center",
          py: { xs: 8, sm: 10, md: 14 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: 460, md: 520 },
              ml: { xs: 0, sm: 4, md: 8, lg: 12 },
            }}
          >
            {/* Sub-heading: FOR BUSINESS GROWTH */}
            <Typography
              sx={{
                color: colors.white,
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 500,
                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                letterSpacing: "3px",
                textTransform: "uppercase",
                mb: 1,
                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              FOR BUSINESS GROWTH
            </Typography>

            {/* Main heading: SMART IT SOLUTIONS */}
            <Typography
              sx={{
                color: colors.white,
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem" },
                lineHeight: 1.05,
                textTransform: "uppercase",
                mb: 2.5,
                textShadow: "0 2px 10px rgba(0,0,0,0.45)",
                letterSpacing: "1px",
              }}
            >
              SMART IT SOLUTIONS
            </Typography>

            {/* Body paragraph */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.88)",
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: "0.82rem", sm: "0.88rem", md: "0.92rem" },
                lineHeight: 1.75,
                mb: 4,
                maxWidth: 400,
                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              Crafting tailored IT strategies to align seamlessly with your
              organisational goals, ensuring optimal performance and efficiency.
            </Typography>

            {/* CTA button */}
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              startIcon={<CallIcon sx={{ fontSize: "1rem" }} />}
              sx={{
                backgroundColor: colors.accent,
                color: colors.white,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                px: { xs: 3, md: 3.5 },
                py: { xs: 1, md: 1.1 },
                borderRadius: "3px",
                textTransform: "none",
                fontSize: { xs: "0.82rem", md: "0.88rem" },
                letterSpacing: "0.3px",
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

      {/* ════════════════════════════════════════════
          ABOUT US SECTION
          ════════════════════════════════════════════ */}
      <Box
        ref={aboutRef}
        sx={{
          position: "relative",
          overflow: "hidden",           /* clips the hexagon at the edges */
          backgroundColor: "#6B7986",
          py: { xs: 7, sm: 9, md: 11 },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          {/* Section heading */}
          <Typography
            sx={{
              color: colors.navy,
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 600,
              fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.6rem" },
              letterSpacing: "1px",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            About Us
          </Typography>

          {/* Animated divider line + dot */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.85)",
              mb: 3.5,
            }}
          >
            <Box
              ref={dotRef}
              sx={{
                position: "absolute",
                top: "50%",
                left: "0%",
                width: "10px",
                height: "10px",
                backgroundColor: colors.accent,
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                willChange: "left",
                zIndex: 2,
              }}
            />
          </Box>

          {/* Body text — sits left, hex graphic floats right */}
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "62%", lg: "58%" },
            }}
          >
            <Typography
              sx={{
                color: colors.navy,
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                lineHeight: 1.85,
                fontWeight: 400,
              }}
            >
              iFathom makes innovation meet digital transformation. With 20+ years
              of growth and trusted by industry leaders like Philips &amp; ICICI
              Prudential, we empower businesses to thrive online and ensure their
              entire IT system is robust and future-ready. We plan the building
              blocks of the world's future.
            </Typography>
          </Box>
        </Container>

        {/* ── Hexagon cluster — right edge, ~3/4 visible ── */}
        {/*
          Strategy: position absolute, right-anchored so the right ~25% is clipped.
          On desktop the hex sits in the right portion of the section;
          on mobile it drops behind the text (z-index 1) and is partially visible.
        */}
        <Box
          sx={{
            position: "absolute",
            /* Vertically centered in the section */
            top: "50%",
            transform: "translateY(-50%)",
            /*
             * Push it right so roughly 1/4 of the hex is hidden off-screen.
             * The hex is `size` wide; we offset right by ~size * 0.25 so 75% shows.
             * We use a CSS custom-property trick via sx width to keep it DRY.
             */
            right: { xs: "-70px", sm: "-90px", md: "-110px" },
            width: { xs: 240, sm: 290, md: 360, lg: 400 },
            height: { xs: 240, sm: 290, md: 360, lg: 400 },
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          {/* Outer rotating hexagon */}
          <Box
            component="svg"
            viewBox="0 0 200 200"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              "@keyframes rotateCW": {
                from: { transform: "rotate(0deg)" },
                to: { transform: "rotate(360deg)" },
              },
              animation: "rotateCW 22s linear infinite",
              transformOrigin: "50% 50%",
            }}
          >
            <polygon
              points="100,6 183,53 183,147 100,194 17,147 17,53"
              fill="none"
              stroke="rgba(255,255,255,0.30)"
              strokeWidth="1.2"
            />
          </Box>

          {/* Middle hexagon */}
          <Box
            component="svg"
            viewBox="0 0 200 200"
            sx={{
              position: "absolute",
              left: "14%",
              top: "14%",
              width: "72%",
              height: "72%",
              "@keyframes rotateCCW": {
                from: { transform: "rotate(360deg)" },
                to: { transform: "rotate(0deg)" },
              },
              animation: "rotateCCW 28s linear infinite",
              transformOrigin: "50% 50%",
            }}
          >
            <polygon
              points="100,6 183,53 183,147 100,194 17,147 17,53"
              fill="none"
              stroke="rgba(255,255,255,0.40)"
              strokeWidth="1.2"
            />
          </Box>

          {/* Inner hexagon */}
          <Box
            component="svg"
            viewBox="0 0 200 200"
            sx={{
              position: "absolute",
              left: "30%",
              top: "30%",
              width: "40%",
              height: "40%",
              "@keyframes rotateCW2": {
                from: { transform: "rotate(0deg)" },
                to: { transform: "rotate(360deg)" },
              },
              animation: "rotateCW2 14s linear infinite",
              transformOrigin: "50% 50%",
            }}
          >
            <polygon
              points="100,6 183,53 183,147 100,194 17,147 17,53"
              fill="none"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="1.5"
            />
          </Box>

          {/* "Know More" link — centered inside the hex cluster */}
          <Box
            component={Link}
            to="/about"
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              color: colors.navy,
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: { xs: "0.88rem", md: "1rem" },
              fontWeight: 500,
              textDecoration: "none",
              whiteSpace: "nowrap",
              zIndex: 3,
              pointerEvents: "auto",
              "&:hover": { color: colors.accent },
            }}
          >
            Know More
          </Box>
        </Box>
      </Box>

      {/* ════════════════════════════════════════════
          OUR EXPERTISE SECTION
          ════════════════════════════════════════════ */}
      <Box
        id="our-expertise"
        sx={{
          position: "relative",
          backgroundColor: colors.white,
          py: { xs: 7, sm: 9, md: 11 },
        }}
      >
        <Container maxWidth="lg">

          {/* Section heading */}
          <Typography
            sx={{
              color: colors.navy,
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 600,
              fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.6rem" },
              letterSpacing: "1px",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Our Expertise
          </Typography>

          {/* Animated divider line + dot */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(107,121,134,0.4)",
              mb: { xs: 5, md: 6 },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: `${dotPosition}%`,
                width: "10px",
                height: "10px",
                backgroundColor: colors.accent,
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                willChange: "left",
                transition: "left 0.25s ease-out",
                zIndex: 2,
              }}
            />
          </Box>

          {/*
           * Orange background panel + cards.
           *
           * Reference site: the orange/warm panel extends wider than the cards,
           * with generous padding on all sides. Cards are narrower (not full-width
           * of the container). We achieve this by giving the panel negative
           * horizontal margins so it bleeds a bit beyond the card area while
           * keeping cards centred.
           */}
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#F5A55A",   /* warm orange background */
              borderRadius: "2px",
              /*
               * The panel is wider than the card grid. We extend it with
               * negative margins so it bleeds ~40px beyond the cards on each side.
               * Then we add matching horizontal padding to pull the cards back in.
               */
              mx: { xs: 0, md: "-40px", lg: "-60px" },
              px: { xs: 2, sm: 3, md: "56px", lg: "76px" },
              pt: { xs: 3.5, md: 5 },
              pb: { xs: 4, md: 6 },
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 2.5 }}
              justifyContent="center"
            >
              {expertise.map((item) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={item.title}
                  sx={{
                    /*
                     * Limit each card column width so cards are narrower than
                     * the full grid width, matching the reference proportions.
                     */
                    maxWidth: { md: "320px" },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: colors.white,
                      borderRadius: "2px",
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                  >
                    {/* Card image */}
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: { xs: 148, sm: 155, md: 165 },
                        objectFit: "cover",
                        display: "block",
                        flexShrink: 0,
                      }}
                    />

                    {/* Card body */}
                    <Box
                      sx={{
                        px: { xs: 2, md: 2.5 },
                        pt: { xs: 1.75, md: 2 },
                        pb: { xs: 2, md: 2.5 },
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Card title */}
                      <Typography
                        sx={{
                          color: colors.navy,
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 600,
                          fontSize: { xs: "0.85rem", md: "0.9rem" },
                          letterSpacing: "0.8px",
                          textTransform: "uppercase",
                          lineHeight: 1.3,
                          mb: 1.25,
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Card description */}
                      <Typography
                        sx={{
                          color: colors.grayText,
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: { xs: "0.78rem", md: "0.8rem" },
                          lineHeight: 1.7,
                          flexGrow: 1,
                          mb: 2,
                        }}
                      >
                        {item.description}
                      </Typography>

                      {/* "Know More" — bottom-right aligned, matching reference */}
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Box
                          component={Link}
                          to={item.to}
                          sx={{
                            color: colors.navy,
                            fontFamily: "'Georgia', 'Times New Roman', serif",
                            fontStyle: "italic",
                            fontSize: { xs: "0.82rem", md: "0.85rem" },
                            fontWeight: 500,
                            textDecoration: "none",
                            borderBottom: `1px solid ${colors.navy}`,
                            lineHeight: 1.4,
                            pb: "1px",
                            transition: "color 0.15s, border-color 0.15s",
                            "&:hover": {
                              color: colors.accent,
                              borderColor: colors.accent,
                            },
                          }}
                        >
                          Know More
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}
