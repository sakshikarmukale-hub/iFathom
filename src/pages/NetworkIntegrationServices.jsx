import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import colors from "../assets/colors";
import networkHero from "../assets/network-hero.jpg";
import networkFirewall from "../assets/network-firewall.png";
import networkMail from "../assets/network-mail.png";
import networkRemote from "../assets/network-remote.jpg";

const HERO_IMG = networkHero;

const services = [
  {
    image: networkFirewall,
    title: "Firewall Solutions",
    description:
      "Implementing multi-layered security to protect networks from unauthorized access, with real-time alerts for intrusion detection and prevention.",
  },
  {
    image: networkMail,
    title: "Mail & Messaging Solutions",
    description:
      "Designing, deploying, and migrating mail and messaging systems, including MS Exchange and intranet solutions, to optimize communication.",
  },
  {
    image: networkRemote,
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
          height: { xs: 220, sm: 280, md: 480 },
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

        {/* Dark blue overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(30, 65, 82, 0.90) 0%, rgba(30, 65, 82, 0.65) 55%, rgba(10, 35, 48, 0.30) 100%)",
          }}
        />

        {/* Text — center-left */}
        <Box
          sx={{
            position: "absolute",
            top: "58%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "80%", md: "65%" },
            maxWidth: 1100,
          }}
        >
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: { xs: "1.4rem", sm: "1.8rem", md: "3.5rem" },
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.15,
              mb: 1.5,
              textAlign: "left",
              mt: 25,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Network Integration Services
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.88)",
              fontSize: { xs: "0.75rem", sm: "0.82rem", md: "1rem" },
              lineHeight: 1.65,
              textAlign: "left",
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
        <Container
          maxWidth={false}
          sx={{
            width: "90%",
            maxWidth: "900px",
            mx: "auto",
          }}
        >
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
                        color: "#000",
                        fontWeight: 700,
                        fontSize: { xs: "0.88rem", md: "1.1rem" },
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
     <Box
  sx={{
    backgroundColor: "#6F7E8C",
    py: { xs: 3, md: 5 },
    px: { xs: 2, md: 5 },
  }}
>
  <Container
    maxWidth={false}
    sx={{
      width: { xs: "95%", sm: "90%", md: "90%" },
      maxWidth: "1700px",
      mx: "auto",
      p: 0,
    }}
  >
    <Box
      sx={{
        backgroundColor: "#D3D8DE",
        borderRadius: "10px",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 5 },
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: colors.navy,
          fontWeight: 800,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          fontFamily: "'Poppins', sans-serif",
          mb: 1.5,
        }}
      >
        Satisfaction Guarantee
      </Typography>

      <Typography
        sx={{
          color: colors.navy,
          fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
          lineHeight: 1.75,
          maxWidth: 850,
          mx: "auto",
        }}
      >
        iFathom guarantees reliable, high-quality IT solutions tailored to
        your business needs, ensuring satisfaction through expert service
        and support.
      </Typography>
    </Box>
  </Container>
</Box>
    </Box>
  );
}
