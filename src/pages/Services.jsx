import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import colors from "../assets/colors";

const HERO_IMG =
  "https://static.wixstatic.com/media/f01754_20d92766891246d1a72aef8b8fa5dd1e~mv2.png";

const services = [
  {
    image:
      "https://static.wixstatic.com/media/f01754_36dd1c4f24e84b0dbf67a673312280ac~mv2.png",
    title: "IT Infrastructure Solutions",
    description:
      "Providing cost-effective hardware, software, and network management.",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_af8ccf7df3814a2fb13e61dad8f2c815~mv2.png",
    title: "System Deployment & Upgrades",
    description: "Managing IT rollouts, migrations, and version upgrades.",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_4522483e80aa4d9eb7e36d0811e1f303~mv2.png",
    title: "Security & Disaster Recovery",
    description:
      "Implementing cybersecurity measures and recovery strategies.",
  },
  {
    image:
      "https://static.wixstatic.com/media/nsplsh_4ce9ba90b904431f84f9ee4e8eaf9fa1~mv2.jpg",
    title: "Enterprise IT Support",
    description:
      "Delivering end-to-end technical support, troubleshooting, and system maintenance.",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_7cfb477825d443bdae7b8c008e847bd2~mv2.png",
    title: "IT Training & Skilled Resources",
    description:
      "Expertise in Linux, Windows, Microsoft Exchange, and enterprise management.",
  },
  {
    image:
      "https://static.wixstatic.com/media/f01754_7290b2238d54452c92cb92674d209948~mv2.png",
    title: "Cloud & Messaging Solutions",
    description:
      "Expertise in Linux, Windows, Microsoft Exchange, and enterprise management.",
  },
];

export default function Services() {
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
          alt="Services"
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
              "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        {/* Text — bottom-left */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 20, md: 32 },
            left: { xs: 20, sm: 40, md: 60 },
            maxWidth: { xs: "90%", md: 560 },
          }}
        >
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.6rem" },
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.15,
              mb: 1,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Services
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.88)",
              fontSize: { xs: "0.75rem", sm: "0.82rem", md: "0.88rem" },
              lineHeight: 1.65,
              textShadow: "0 1px 6px rgba(0,0,0,0.5)",
            }}
          >
            Welcome to iFathom, your partner for optimal and cost-effective IT
            solutions. We specialize in hardware, software, network management,
            and addressing critical challenges like security and disaster
            recovery. Our certified team brings diverse expertise in Linux,
            Windows, and Networking to meet all your technical needs. Trust
            iFathom to navigate your technology complexities with confidence.
          </Typography>
        </Box>
      </Box>

      {/* ── Services We Offer ── */}
      <Box sx={{ backgroundColor: colors.white, py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg">
          {/* Section heading + orange underline */}
          <Box sx={{ mb: { xs: 3, md: 4 } }}>
            <Typography
              sx={{
                color: colors.navy,
                fontWeight: 700,
                fontSize: { xs: "1.3rem", md: "1.6rem" },
                fontFamily: "'Poppins', sans-serif",
                mb: 0.75,
              }}
            >
              Services We Offer
            </Typography>
            <Box
              sx={{
                width: 40,
                height: 3,
                backgroundColor: colors.accent,
                borderRadius: 2,
              }}
            />
          </Box>

          {/* Service cards grid */}
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
                        lineHeight: 1.6,
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
          backgroundColor: "#b0b8c5",
          py: { xs: 5, md: 7 },
        }}
      >
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
              maxWidth: 560,
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
