import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import colors from "../assets/colors";

const HERO_IMG =
  "https://static.wixstatic.com/media/f01754_191ece38321a4f7f8da22a4a6650903a~mv2.jpg";

const services = [
  {
    image:
      "https://static.wixstatic.com/media/f01754_b9bbc8985f504d67aafe23990d41c170~mv2.png",
    title: "Desktop Administration & Support",
    description: "Managing IT assets and providing desktop support.",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_cb8c2b904c0c45669b20f6107d125095~mv2.png",
    title: "Remote Troubleshooting",
    description: "Resolving desktop and server issues via remote control.",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_af8ccf7df3814a2fb13e61dad8f2c815~mv2.png",
    title: "Software Installation & Upgrades",
    description: "Deploying and updating software remotely.",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_a6be702eff47413591df42efb0fa7905~mv2.png",
    title: "Hardware & Software Inventory Management",
    description:
      "Maintaining accurate records of IT assets for tracking, and optimization.",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_e07852d783cf4f0691348d2f556c76e7~mv2.png",
    title: "Technology Infrastructure Management",
    description: "Overseeing hardware, software, and network systems.",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_20d92766891246d1a72aef8b8fa5dd1e~mv2.png",
    title: "Data Security & Recovery",
    description:
      "Ensuring virus protection, backups, system recovery, and data security.",
  },
];

export default function FacilityManagementServices() {
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
          alt="Facility Management Services"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
        {/* Dark gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.12) 100%)",
          }}
        />
        {/* Text — bottom-left */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 20, md: 32 },
            left: { xs: 20, sm: 40, md: 60 },
            maxWidth: { xs: "90%", md: 600 },
          }}
        >
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2.4rem" },
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.15,
              mb: 1,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Facility Management Services
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.88)",
              fontSize: { xs: "0.75rem", sm: "0.82rem", md: "0.88rem" },
              lineHeight: 1.65,
              textShadow: "0 1px 6px rgba(0,0,0,0.5)",
            }}
          >
            We provide comprehensive IT management services, including remote
            troubleshooting, software upgrades, asset tracking, infrastructure
            maintenance, and data security, ensuring seamless operations and
            optimal performance for your organization.
          </Typography>
        </Box>
      </Box>

      {/* ── Service Cards ── */}
      <Box sx={{ backgroundColor: colors.white, py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {services.map((s) => (
              <Grid item xs={12} sm={6} md={4} key={s.title}>
                <Box
                  sx={{
                    border: `1px solid ${colors.border}`,
                    borderRadius: "4px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: colors.white,
                    transition: "box-shadow 0.2s",
                    "&:hover": {
                      boxShadow: "0 4px 16px rgba(10,31,61,0.1)",
                    },
                  }}
                >
                  {/* Full-width cover image */}
                  <Box
                    component="img"
                    src={s.image}
                    alt={s.title}
                    sx={{
                      width: "100%",
                      height: { xs: 150, md: 165 },
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* Card body */}
                  <Box sx={{ px: 2, pt: 1.5, pb: 2, flexGrow: 1 }}>
                    <Typography
                      sx={{
                        color: colors.accent,
                        fontWeight: 700,
                        fontSize: { xs: "0.82rem", md: "0.88rem" },
                        mb: 0.75,
                        lineHeight: 1.35,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {s.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grayText,
                        fontSize: { xs: "0.76rem", md: "0.8rem" },
                        lineHeight: 1.65,
                      }}
                    >
                      {s.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Satisfaction Guarantee ── */}
      <Box sx={{ backgroundColor: "#b0b8c5", py: { xs: 5, md: 7 } }}>
        <Container maxWidth="md">
          <Typography
            align="center"
            sx={{
              color: colors.navy,
              fontWeight: 800,
              fontSize: { xs: "1.3rem", md: "1.6rem" },
              fontFamily: "'Poppins', sans-serif",
              mb: 1.5,
            }}
          >
            Satisfaction Guarantee
          </Typography>
          <Typography
            align="center"
            sx={{
              color: colors.navy,
              fontSize: { xs: "0.85rem", md: "0.92rem" },
              lineHeight: 1.75,
              maxWidth: 540,
              mx: "auto",
            }}
          >
            iFathom guarantees reliable, high-quality IT solutions tailored to
            your business needs, ensuring satisfaction through expert service
            and support.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
