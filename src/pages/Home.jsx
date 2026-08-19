import React from "react";
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

const HERO_BG =
  "https://static.wixstatic.com/media/f01754_fc415d014cfa41ae9809d8bcbe791d92f000.jpg";

const expertise = [
  {
    image:
      "https://static.wixstatic.com/media/f01754_30e5ee7293644d4e972872c717df0ee2~mv2.png",
    title: "NEW AGE PROGRAMMING",
    description:
      "From scalable web applications to enterprise-grade software, our experts craft innovative future-ready technologies.",
    to: "/products",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_4220c13c10d94bd28a93c4f07dd96a7a~mv2.png",
    title: "SERVICES",
    description:
      "We offer comprehensive IT support, including desktop management, remote troubleshooting, and technology management for smooth operations.",
    to: "/services",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_726d8dbce99845af8e986636d7bdbb6a~mv2.png",
    title: "FMS/ NETWORK SERVICES",
    description:
      "Our FMS and networking services include secure remote access, firewall protection, and network optimization for enhanced connectivity and security.",
    to: "/facility-management-services",
  },
];

export default function Home() {
  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: { xs: 320, sm: 400, md: 480 },
          display: "flex",
          alignItems: "center",
          py: { xs: 7, sm: 9, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: { xs: "100%", sm: 440 } }}>
            <Typography
              sx={{
                color: colors.white,
                fontWeight: 800,
                fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
                lineHeight: 1.15,
                mb: 1,
                textTransform: "uppercase",
                fontFamily: "'Poppins', sans-serif",
                textShadow: "0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              SMART IT SOLUTIONS
            </Typography>
            <Typography
              sx={{
                color: colors.white,
                fontWeight: 500,
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                lineHeight: 1.3,
                mb: 2.5,
                textTransform: "uppercase",
                letterSpacing: 0.5,
                textShadow: "0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              FOR BUSINESS GROWTH
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "0.82rem", sm: "0.88rem" },
                lineHeight: 1.65,
                mb: 3.5,
                maxWidth: 380,
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
              startIcon={<CallIcon sx={{ fontSize: "1rem" }} />}
              sx={{
                backgroundColor: colors.accent,
                color: colors.white,
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: "4px",
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
      <Box sx={{ backgroundColor: "#e8e8e8", py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          {/* Heading + orange underline */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                color: colors.navy,
                fontWeight: 700,
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                fontFamily: "'Poppins', sans-serif",
                mb: 0.5,
              }}
            >
              About Us
            </Typography>
            {/* Orange accent line */}
            <Box
              sx={{
                width: 36,
                height: 3,
                backgroundColor: colors.accent,
                borderRadius: 2,
              }}
            />
          </Box>

          <Typography
            sx={{
              color: colors.navy,
              fontSize: { xs: "0.88rem", md: "0.93rem" },
              lineHeight: 1.75,
              mb: 2.5,
              maxWidth: 720,
            }}
          >
            iFathom makes innovation meet digital transformation. With 20+ years
            of growth and trusted by industry leaders like Philips & ICICI
            Prudential, we empower businesses to thrive online and ensure their
            entire IT system is robust and future-ready. We plan the building
            blocks of the world's future.
          </Typography>

          <Box
            component={Link}
            to="/about"
            sx={{
              color: colors.navy,
              fontSize: "0.88rem",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
              "&:hover": { color: colors.accent },
            }}
          >
            Know More
          </Box>
        </Container>
      </Box>

      {/* ── Our Expertise ── */}
      <Box sx={{ backgroundColor: colors.white, py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          {/* Section heading + orange underline */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                color: colors.navy,
                fontWeight: 700,
                fontSize: { xs: "1.4rem", md: "1.75rem" },
                fontFamily: "'Poppins', sans-serif",
                mb: 0.5,
              }}
            >
              Our Expertise
            </Typography>
            <Box
              sx={{
                width: 36,
                height: 3,
                backgroundColor: colors.accent,
                borderRadius: 2,
              }}
            />
          </Box>

          {/* Cards */}
          <Box sx={{ backgroundColor: "#fdf4ec", p: { xs: 2, md: 3 }, borderRadius: "4px" }}>
            <Grid container spacing={3}>
              {expertise.map((item) => (
                <Grid item xs={12} sm={4} key={item.title}>
                  <Box
                    sx={{
                      backgroundColor: colors.white,
                      border: `1px solid ${colors.border}`,
                      borderRadius: "4px",
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Card image */}
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: { xs: 140, md: 160 },
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    {/* Card body */}
                    <Box
                      sx={{
                        p: { xs: 1.5, md: 2 },
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          color: colors.navy,
                          fontWeight: 700,
                          fontSize: { xs: "0.8rem", md: "0.85rem" },
                          mb: 1,
                          textTransform: "uppercase",
                          letterSpacing: 0.3,
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: colors.grayText,
                          fontSize: { xs: "0.78rem", md: "0.82rem" },
                          lineHeight: 1.65,
                          mb: 2,
                          flexGrow: 1,
                        }}
                      >
                        {item.description}
                      </Typography>

                      {/* Read More button — outlined, dark border, centered */}
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                          component={Link}
                          to={item.to}
                          variant="outlined"
                          sx={{
                            borderColor: colors.navy,
                            color: colors.navy,
                            fontWeight: 600,
                            fontSize: "0.75rem",
                            textTransform: "none",
                            px: 3,
                            py: 0.6,
                            borderRadius: "4px",
                            "&:hover": {
                              backgroundColor: colors.navy,
                              color: colors.white,
                              borderColor: colors.navy,
                            },
                          }}
                        >
                          Read More
                        </Button>
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
