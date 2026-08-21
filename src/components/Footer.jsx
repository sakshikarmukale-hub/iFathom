import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import colors from "../assets/colors";

const openingsColumnOne = ["Python", "Javascript", "Java", "Go"];
const openingsColumnTwo = ["iOS Swift", "C++", "Verilog"];

const locations = [
  {
    country: "MALAYSIA",
    company: "ADA ITech SDN BHD",
    address: [
      "Level 12, Sunway V2 Tower,",
      "No. 158, Jalan Peel, Maluri,",
      "55100 Kuala Lumpur, Wilayah",
    ],
    email: "info.my@adaitech.com",
    mapUrl: "https://maps.app.goo.gl/Lmede1fXJ4iE3UDGA",
  },
  {
    country: "THAILAND",
    company: "ADA ITECH Co., LTD",
    address: [
      "RASA TWO, Office No: 1815,",
      "1818 Phetchaburi Rd, Makkasan,",
      "Ratchathewi, Bangkok 10400",
    ],
    email: "info.th@adaitech.com",
    mapUrl: "https://maps.app.goo.gl/dusCwHsPFNa5xrZN9",
  },
  {
    country: "INDIA (Head Office)",
    company: "",
    address: [
      "6 & 7, Ground Floor,",
      "23, Motilal Kanji Building,",
      "Navroji Sheth Street, Thakurdwar,",
      "Charni Road (East), Mumbai - 400002",
    ],
    email: "info@ifathomgroup.com",
    mapUrl: "https://maps.app.goo.gl/ifathomMumbai",
  },
];

const usefulLinks = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  "GDPR Compliance",
  "Privacy Policy",
  "Terms and Conditions",
];

const headingFont = "anton, sans-serif";

export default function Footer() {
  return (
    <Box component="footer">
      {/* ── Work at iFathom Banner (white) ── */}
      <Box sx={{ backgroundColor: colors.white, py: { xs: 4, md: 4.5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 2 }}>
            {/* Left: heading + description */}
            <Grid item xs={12} md={7}>
              <Typography
                sx={{
                  color: colors.navy,
                  fontWeight: 800,
                  fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.6rem" },
                  fontFamily: headingFont,
                  lineHeight: 1.2,
                  mb: 1.5,
                }}
              >
                Work at iFathom!
              </Typography>
              <Typography
                sx={{
                  color: colors.navy,
                  fontSize: { xs: "0.95rem", md: "1.02rem" },
                  lineHeight: 1.6,
                  maxWidth: 420,
                }}
              >
                Innovate, grow, and make an impact with a team that values
                creativity and collaboration. Build what's next!
              </Typography>
            </Grid>

            {/* Right: current openings + join button */}
            <Grid item xs={12} md={5}>
              <Typography
                align="center"
                sx={{
                  color: colors.navy,
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontFamily: headingFont,
                  letterSpacing: 0.3,
                  mb: 1,
                }}
              >
                Current Openings for
              </Typography>

              <Grid container sx={{ mb: 2, justifyContent: "center" }}>
                <Grid item xs="auto">
                  <Box
                    component="ul"
                    sx={{
                      m: 0,
                      pl: 2.5,
                      color: colors.navy,
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {openingsColumnOne.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs="auto" sx={{ ml: { xs: 4, sm: 6 } }}>
                  <Box
                    component="ul"
                    sx={{
                      m: 0,
                      pl: 2.5,
                      color: colors.navy,
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {openingsColumnTwo.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </Box>
                </Grid>
              </Grid>

              {/* Composite "Join Us NOW" button */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  component={Link}
                  to="/careers"
                  sx={{
                    display: "flex",
                    alignItems: "stretch",
                    textDecoration: "none",
                    borderRadius: "4px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(10,31,61,0.15)",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: colors.navy,
                      color: colors.white,
                      px: 2.5,
                      py: 1.25,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: headingFont,
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        lineHeight: 1.2,
                      }}
                    >
                      Join Us
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: headingFont,
                        fontWeight: 800,
                        fontSize: "1.3rem",
                        lineHeight: 1.2,
                      }}
                    >
                      NOW
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: colors.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      px: 4,
                      transition: "background-color 0.2s",
                      "&:hover": {
                        backgroundColor: colors.accentDark,
                      },
                    }}
                  >
                    <ArrowForwardIcon sx={{ color: colors.white, fontSize: "1.6rem" }} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Dark navy section: Our Locations + Links + Copyright ── */}
      <Box sx={{ backgroundColor: colors.navy }}>
        {/* Our Locations */}
        <Container maxWidth="lg" sx={{ py: { xs: 4.5, md: 5.5 } }}>
          <Typography
            align="center"
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: { xs: "1.6rem", md: "2rem" },
              fontFamily: headingFont,
              mb: 3.5,
            }}
          >
            Our Locations
          </Typography>

          <Grid container spacing={3}>
            {locations.map((loc) => (
              <Grid item xs={12} sm={6} md={4} key={loc.country}>
                <Typography
                  sx={{
                    color: colors.white,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: 0.5,
                    mb: 1,
                  }}
                >
                  {loc.country}
                </Typography>

                {loc.company && (
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      mb: 0.25,
                    }}
                  >
                    {loc.company}
                  </Typography>
                )}

                <Box sx={{ mb: 1 }}>
                  {loc.address.map((line, i) => (
                    <Typography
                      key={i}
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "0.88rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Box>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.88rem",
                    mb: 1,
                  }}
                >
                  Email ID:{" "}
                  <Box
                    component="a"
                    href={`mailto:${loc.email}`}
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      textDecoration: "none",
                      "&:hover": { color: colors.accent },
                    }}
                  >
                    {loc.email}
                  </Box>
                </Typography>

                <Box
                  component="a"
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.85rem",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    "&:hover": { color: colors.accent },
                  }}
                >
                  See on Map ›
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container maxWidth="lg">
          <Divider sx={{ borderColor: "rgba(255,255,255,0.15)" }} />
        </Container>

        {/* Links */}
        <Container maxWidth="lg" sx={{ py: { xs: 3.5, md: 4 } }}>
          <Grid container spacing={3} justifyContent="center">
            {/* Useful Links */}
            <Grid item xs={12} sm={4}>
              <Typography
                sx={{
                  color: colors.white,
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: 1.2,
                  mb: 1.25,
                  textTransform: "uppercase",
                }}
              >
                Useful Links
              </Typography>
              <Stack spacing={1}>
                {usefulLinks.map((l) => (
                  <Box
                    key={l.label}
                    component={Link}
                    to={l.to}
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      "&:hover": { color: colors.accent },
                    }}
                  >
                    {l.label}
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Legal */}
            <Grid item xs={12} sm={4}>
              <Typography
                sx={{
                  color: colors.white,
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: 1.2,
                  mb: 1.25,
                  textTransform: "uppercase",
                }}
              >
                Legal &amp; Compliances
              </Typography>
              <Stack spacing={1}>
                {legalLinks.map((l) => (
                  <Typography
                    key={l}
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      transition: "color 0.2s",
                      "&:hover": { color: colors.accent },
                    }}
                  >
                    {l}
                  </Typography>
                ))}
              </Stack>
            </Grid>

            {/* Contact */}
            <Grid item xs={12} sm={4}>
              <Typography
                sx={{
                  color: colors.white,
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: 1.2,
                  mb: 1.25,
                  textTransform: "uppercase",
                }}
              >
                Contact
              </Typography>
              <Stack spacing={1}>
                <Box
                  component="a"
                  href="mailto:info@ifathomgroup.com"
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    "&:hover": { color: colors.accent },
                  }}
                >
                  info@ifathomgroup.com
                </Box>
                <Box
                  component="a"
                  href="tel:+919820663764"
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    "&:hover": { color: colors.accent },
                  }}
                >
                  +91 9820663764
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>

        {/* Copyright */}
        <Box sx={{ pb: 2.5 }}>
          <Typography
            align="center"
            sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem" }}
          >
            © Copyright 2025 iFathom Group. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}