import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import colors from "../assets/colors";

const HERO_IMG =
  "https://static.wixstatic.com/media/f01754_8afee2a565684f5b9e3ee904154cd621~mv2.jpg";

const services = [
  {
    image:
      "https://static.wixstatic.com/media/f01754_e8b0b4b6aa004c2ca68508d7b82f6df4~mv2.png",
    title: "Firewall Solutions",
    description:
      "Implementing multi-layered security to protect networks from unauthorized access, with real-time alerts for intrusion detection and prevention.",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_90f38c77568147abb8dc807eed2ca923~mv2.png",
    title: "Mail & Messaging Solutions",
    description:
      "Designing, deploying, and migrating mail and messaging systems, including MS Exchange and intranet solutions, to optimize communication.",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_bc797955301944dbb18127993c8497fc~mv2.jpg",
    title: "Remote Access Services",
    description:
      "Enabling secure remote connectivity for mobile users and remote locations through access servers, routers, and built-in OS solutions.",
  },
];

export default function NetworkIntegrationServices() {
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
          alt="Network Integration Services"
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
            maxWidth: { xs: "90%", md: 580 },
          }}
        >
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.4rem" },
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.15,
              mb: 1,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Network Integration Services
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.88)",
              fontSize: { xs: "0.75rem", sm: "0.82rem", md: "0.88rem" },
              lineHeight: 1.65,
              textShadow: "0 1px 6px rgba(0,0,0,0.5)",
            }}
          >
            iFathom offers robust internet security and communication solutions,
            including firewalls, mail and messaging systems, and secure remote
            access, ensuring seamless connectivity and protection for your
            organization's network.
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
