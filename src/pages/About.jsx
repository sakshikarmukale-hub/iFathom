import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import colors from "../assets/colors";
import aboutHero from "../assets/about-hero.jpg";
import aboutCardBg from "../assets/aboutcardbg.png";
import socialLinkedin from "../assets/social-linkedin.png";
import socialFacebook from "../assets/social-facebook.png";
import socialInstagram from "../assets/social-instagram.png";

const HERO_IMG = aboutHero;

const socials = [
  {
    name: "LinkedIn",
    icon: socialLinkedin,
    href: "https://www.linkedin.com/company/ifathom",
  },
  {
    name: "Facebook",
    icon: socialFacebook,
    href: "https://www.facebook.com/ifathom",
  },
  {
    name: "Instagram",
    icon: socialInstagram,
    href: "#",
  },
];

export default function About() {
  // ── Orange-dot line animation — same rAF + lerp approach used in Home.jsx ──
  const techRef = useRef(null); // wraps the heading + line for this section
  const dotRef = useRef(null); // the orange dot — moved via DOM in rAF, not React state

  useEffect(() => {
    let target = 0; // 0-100, where the dot SHOULD be based on scroll
    let current = 0; // 0-100, where the dot IS right now (eased toward target)
    let rafId;

    const computeTarget = () => {
      if (!techRef.current) return;

      const rect = techRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress starts when the section enters viewport, ends when it leaves
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

  return (
    <Box>
      {/* ── Hero Banner ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 320, sm: 380, md: 540 },
          overflow: "hidden",
          // subtle perspective so the zoom reads as depth rather than a flat scale
          perspective: "1000px",
        }}
      >
        <Box
          component="img"
          src={HERO_IMG}
          alt="About iFathom"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            animation: "aboutHeroZoomBlink 2s ease-in-out infinite",

"@keyframes aboutHeroZoomBlink": {
  "0%": {
    transform: "scale(1.12)",
    filter: "brightness(1)",
  },
  "25%": {
    transform: "scale(1.08)",
    filter: "brightness(1.08)",
  },
  "50%": {
    transform: "scale(1.04)",
    filter: "brightness(1)",
  },
  "75%": {
    transform: "scale(1.01)",
    filter: "brightness(1.08)",
  },
  "100%": {
    transform: "scale(1.12)",
    filter: "brightness(1)",
  },
},
          }}
        />
        {/* Soft inset shadow for added depth around the edges */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            boxShadow: "inset 0 0 120px rgba(0,0,0,0.35)",
            pointerEvents: "none",
          }}
        />
        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        {/* Title at bottom-left */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 200,

            backgroundColor: "rgba(20, 30, 45, 0.45)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",

            px: { xs: 2, sm: 5, md: 7 },
            py: { xs: 1.5, sm: 2, md: 2.5 },

            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: { xs: "1.6rem", sm: "2rem", md: "3.6rem" },
              fontFamily: "anton, sans-serif",
              lineHeight: 1.2,
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              ml: 33,
              mt: 5,
              transform: "scaleY(1.5)",
            }}
          >
            About iFathom
          </Typography>
        </Box>
      </Box>

      {/* ── Navigating Technology section (white) ── */}
      <Box sx={{ backgroundColor: colors.white, py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg">
          <Box
            ref={techRef}
            sx={{
              maxWidth: 1000,
              mx: "auto",
              textAlign: "left",
            }}
          >
            {/* Heading */}
            <Typography
              sx={{
                color: colors.navy,
                fontWeight: 800,
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                fontFamily: "anton, sans-serif",
                mb: 1,
                transform: "scaleY(1.5)",
              }}
            >
              Navigating Technology, Powering Growth
            </Typography>

            {/* Line + Moving Dot — same behavior as Home.jsx */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(107,121,134,0.3)",
                mx: "auto",
                mt: 2,
                mb: 3,
              }}
            >
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

            {/* Body text */}
            <Typography
              sx={{
                color: colors.navy,
                fontSize: { xs: "0.85rem", md: "1rem" },
                lineHeight: 1.8,
                fontFamily: "open sans, sans-serif",
              }}
            >
              Welcome to iFathom Marketing, one of India's fastest-growing
              technology companies dedicated to helping businesses transition
              online. With over two decades of stable growth, we proudly support
              clients across 20 locations in India, fostering long-term
              relationships with industry giants like Philips and ICICI
              Prudential. Our young and dynamic team is committed to innovation,
              leveraging cutting-edge technology to set us apart in the
              competitive tech landscape. Join us as we shape the future of
              digital business together.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Contact cards section — aboutcardbg.jpg sits behind all three
          cards as the section background, not on the individual cards ── */}
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#1a2740",
          backgroundImage: `url(${aboutCardBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: { xs: 420, sm: 480, md: 400 },
          display: "flex",
          alignItems: "center",
          py: { xs: 6, md: 8 },
        }}
      >
        {/* Light green shadow/tint over the image, blended with a touch of
            dark so the cards/text on top stay readable */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(46,125,50,0.32) 0%, rgba(26,39,64,0.55) 100%)",
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center">
            {/* Card 1 — Request a Call Back */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: 290, sm: 230, md: 250 },
                  height: { xs: 150, sm: 170, md: 200 },
                  mx: "auto",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "rgba(36,52,80,0.55)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
              >
                {/* Content — fills the whole square */}
                <Box
                  sx={{
                    flex: "1 1 auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    p: { xs: 2, md: 2.5 },
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      mb: 1,
                      textTransform: "none",
                      letterSpacing: 0.2,
                    }}
                  >
                    Request a Call Back
                  </Typography>
                  <Box
                    component="a"
                    href="tel:+919820663764"
                    sx={{
                      color: colors.white,
                      fontWeight: 600,
                      fontSize: { xs: "0.88rem", md: "0.95rem" },
                      textDecoration: "none",
                      display: "block",
                      "&:hover": { color: colors.accent },
                    }}
                  >
                    +91 9820663764
                  </Box>
                </Box>

              </Box>
            </Grid>

            {/* Card 2 — Email */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                 maxWidth: { xs: 290, sm: 230, md: 250 },
                  height: { xs: 150, sm: 170, md: 200 },
                  mx: "auto",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "rgba(36,52,80,0.55)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
              >
                {/* Content — fills the whole square */}
                <Box
                  sx={{
                    flex: "1 1 auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    p: { xs: 2, md: 2.5 },
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    Email
                  </Typography>
                  <Box
                    component="a"
                    href="mailto:info@ifathomgroup.com"
                    sx={{
                      color: colors.white,
                      fontWeight: 600,
                      fontSize: { xs: "0.85rem", md: "0.92rem" },
                      textDecoration: "none",
                      display: "block",
                      wordBreak: "break-all",
                      "&:hover": { color: colors.accent },
                    }}
                  >
                    info@ifathomgroup.com
                  </Box>
                </Box>

              </Box>
            </Grid>

            {/* Card 3 — Follow us */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                 maxWidth: { xs: 290, sm: 230, md: 250 },
                  height: { xs: 150, sm: 170, md: 200 },
                  mx: "auto",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "rgba(36,52,80,0.55)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
              >
                {/* Content — fills the whole square */}
                <Box
                  sx={{
                    flex: "1 1 auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    p: { xs: 2, md: 2.5 },
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      mb: 1.25,
                    }}
                  >
                    Follow us
                  </Typography>
                  <Stack direction="row" spacing={1.5} justifyContent="center">
                    {socials.map((s) => (
                      <IconButton
                        key={s.name}
                        component="a"
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.name}
                        sx={{
                          p: 0.5,
                          "&:hover": { opacity: 0.8 },
                        }}
                      >
                        <Box
                          component="img"
                          src={s.icon}
                          alt={s.name}
                          sx={{
                            width: 22,
                            height: 22,
                            objectFit: "contain",
                            filter: "brightness(0) invert(1)",
                          }}
                        />
                      </IconButton>
                    ))}
                  </Stack>
                </Box>

              </Box>
            </Grid>
          </Grid>
        </Container>
        </Box>
      </Box>
    </Box>
  );
}