import React from "react";
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
  return (
    <Box>
      {/* ── Hero Banner ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 220, sm: 280, md: 340 },
          overflow: "hidden",
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
            bottom: { xs: 20, md: 32 },
            left: { xs: 20, sm: 40, md: 60 },
          }}
        >
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.6rem" },
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.2,
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            About iFathom
          </Typography>
        </Box>
      </Box>

      {/* ── Navigating Technology section (white) ── */}
      <Box sx={{ backgroundColor: colors.white, py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg">
          {/* Heading */}
          <Typography
            sx={{
              color: colors.navy,
              fontWeight: 700,
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
              fontFamily: "'Poppins', sans-serif",
              mb: 1,
            }}
          >
            Navigating Technology, Powering Growth
          </Typography>

          {/* Orange underline */}
          <Box
            sx={{
              width: 200,
              height: 2,
              backgroundColor: colors.accent,
              mb: 3,
            }}
          />

          {/* Body text */}
          <Typography
            sx={{
              color: colors.navy,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
              lineHeight: 1.8,
              maxWidth: 820,
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
        </Container>
      </Box>

      {/* ── Contact cards section (dark navy) ── */}
      <Box sx={{ backgroundColor: "#1a2740", py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {/* Card 1 — Request a Call Back */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  backgroundColor: "#243450",
                  borderRadius: "6px",
                  p: { xs: 2.5, md: 3 },
                  height: "100%",
                  minHeight: 110,
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
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
            </Grid>

            {/* Card 2 — Email */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  backgroundColor: "#243450",
                  borderRadius: "6px",
                  p: { xs: 2.5, md: 3 },
                  height: "100%",
                  minHeight: 110,
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
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
            </Grid>

            {/* Card 3 — Follow us */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  backgroundColor: "#243450",
                  borderRadius: "6px",
                  p: { xs: 2.5, md: 3 },
                  height: "100%",
                  minHeight: 110,
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    mb: 1.25,
                  }}
                >
                  Follow us
                </Typography>
                <Stack direction="row" spacing={1}>
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
