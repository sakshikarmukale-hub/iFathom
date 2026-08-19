import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Divider,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import colors from "../assets/colors";

const openings = [
  "Python",
  "JavaScript",
  "Java",
  "Go",
  "iOS Swift",
  "C++",
  "Verilog",
];

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

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: colors.navy }}>
      {/* ── Work at iFathom Banner ── */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${colors.navyDark} 0%, #0F2847 100%)`,
          borderBottom: `1px solid ${colors.navyMid}`,
          py: { xs: 5, md: 7 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                sx={{
                  color: colors.white,
                  fontWeight: 800,
                  fontSize: { xs: "1.4rem", md: "1.75rem" },
                  mb: 0.75,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Work at iFathom!
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: { xs: "0.93rem", md: "1rem" },
                  mb: 3,
                  maxWidth: 540,
                  lineHeight: 1.7,
                }}
              >
                Innovate, grow, and make an impact with a team that values
                creativity and collaboration. Build what's next!
              </Typography>
              <Typography
                sx={{
                  color: colors.accent,
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  mb: 1.5,
                  textTransform: "uppercase",
                  letterSpacing: 1.2,
                }}
              >
                Current Openings for
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {openings.map((role) => (
                  <Chip
                    key={role}
                    label={role}
                    size="small"
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      backgroundColor: "rgba(255,255,255,0.07)",
                      border: `1px solid rgba(255,255,255,0.15)`,
                      fontSize: "0.78rem",
                      height: 28,
                    }}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
              }}
            >
              <Button
                component={Link}
                to="/careers"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: colors.accent,
                  color: colors.white,
                  fontWeight: 700,
                  px: { xs: 3.5, md: 4.5 },
                  py: 1.5,
                  borderRadius: "6px",
                  textTransform: "none",
                  fontSize: "1rem",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: colors.accentDark,
                    boxShadow: "0 4px 14px rgba(232,129,58,0.4)",
                  },
                }}
              >
                Join Us Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Our Locations ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography
          sx={{
            color: colors.white,
            fontWeight: 800,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            mb: 4,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Our Locations
        </Typography>
        <Grid container spacing={4}>
          {locations.map((loc) => (
            <Grid item xs={12} sm={6} md={4} key={loc.country}>
              <Box
                sx={{
                  borderLeft: `3px solid ${colors.accent}`,
                  pl: 2.5,
                }}
              >
                <Typography
                  sx={{
                    color: colors.accent,
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    letterSpacing: 1.5,
                    mb: 0.75,
                    textTransform: "uppercase",
                  }}
                >
                  {loc.country}
                </Typography>
                {loc.company && (
                  <Typography
                    sx={{
                      color: colors.white,
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      mb: 0.5,
                    }}
                  >
                    {loc.company}
                  </Typography>
                )}
                <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ mb: 1 }}>
                  <LocationOnIcon
                    sx={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "1rem",
                      mt: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    {loc.address.map((line, i) => (
                      <Typography
                        key={i}
                        sx={{
                          color: "rgba(255,255,255,0.65)",
                          fontSize: "0.86rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <EmailIcon sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.95rem" }} />
                  <Box
                    component="a"
                    href={`mailto:${loc.email}`}
                    sx={{
                      color: colors.accent,
                      fontSize: "0.86rem",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {loc.email}
                  </Box>
                </Stack>
                <Box
                  component="a"
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.82rem",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.3)",
                    display: "inline-block",
                    mt: 0.5,
                    "&:hover": { color: colors.accent, borderColor: colors.accent },
                  }}
                >
                  See on Map →
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ borderColor: colors.navyMid }} />

      {/* ── Links / Legal / Contact ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Grid container spacing={4}>
          {/* Useful Links */}
          <Grid item xs={12} sm={4}>
            <Typography
              sx={{
                color: colors.white,
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: 1.5,
                mb: 2.5,
                textTransform: "uppercase",
              }}
            >
              Useful Links
            </Typography>
            <Stack spacing={1.25}>
              {usefulLinks.map((l) => (
                <Box
                  key={l.label}
                  component={Link}
                  to={l.to}
                  sx={{
                    color: "rgba(255,255,255,0.65)",
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
                fontSize: "0.82rem",
                letterSpacing: 1.5,
                mb: 2.5,
                textTransform: "uppercase",
              }}
            >
              Legal &amp; Compliances
            </Typography>
            <Stack spacing={1.25}>
              {legalLinks.map((l) => (
                <Typography
                  key={l}
                  sx={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.9rem",
                    cursor: "pointer",
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
                fontSize: "0.82rem",
                letterSpacing: 1.5,
                mb: 2.5,
                textTransform: "uppercase",
              }}
            >
              Contact
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ color: colors.accent, fontSize: "1.1rem" }} />
                <Box
                  component="a"
                  href="mailto:info@ifathomgroup.com"
                  sx={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    "&:hover": { color: colors.accent },
                  }}
                >
                  info@ifathomgroup.com
                </Box>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ color: colors.accent, fontSize: "1.1rem" }} />
                <Box
                  component="a"
                  href="tel:+919820663764"
                  sx={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    "&:hover": { color: colors.accent },
                  }}
                >
                  +91 9820663764
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: colors.navyMid }} />

      {/* ── Copyright ── */}
      <Box sx={{ py: 2.5 }}>
        <Typography
          align="center"
          sx={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}
        >
          © Copyright 2025 iFathom Group. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
