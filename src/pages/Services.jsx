import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import colors from "../assets/colors";
import servicesHero from "../assets/services-hero.png";
import serviceInfrastructure from "../assets/service-infrastructure.png";
import serviceDeployment from "../assets/service-deployment.png";
import serviceSecurity from "../assets/service-security.png";
import serviceEnterprise from "../assets/service-enterprise.jpg";
import serviceTraining from "../assets/service-training.png";
import serviceCloud from "../assets/service-cloud.png";

const HERO_IMG = servicesHero;

const services = [
  {
    image: serviceInfrastructure,
    title: "IT Infrastructure Solutions",
    description:
      "Providing cost-effective hardware, software, and network management.",
  },
  {
    image: serviceDeployment,
    title: "System Deployment & Upgrades",
    description: "Managing IT rollouts, migrations, and version upgrades.",
  },
  {
    image: serviceSecurity,
    title: "Security & Disaster Recovery",
    description:
      "Implementing cybersecurity measures and recovery strategies.",
  },
  {
    image: serviceEnterprise,
    title: "Enterprise IT Support",
    description:
      "Delivering end-to-end technical support, troubleshooting, and system maintenance.",
  },
  {
    image: serviceTraining,
    title: "IT Training & Skilled Resources",
    description:
      "Expertise in Linux, Windows, Microsoft Exchange, and enterprise management.",
  },
  {
    image: serviceCloud,
    title: "Cloud & Messaging Solutions",
    description:
      "Expertise in Linux, Windows, Microsoft Exchange, and enterprise management.",
  },
];

export default function Services() {
  // Tracks overall page-scroll progress (0–100) to animate the orange dot
  // along the "Services We Offer" underline.
  const [scrollPercent, setScrollPercent] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const updateScrollPercent = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent =
        docHeight > 0
          ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
          : 0;
      setScrollPercent(percent);
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(updateScrollPercent);
      }
    };

    updateScrollPercent();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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

        {/* Dark overlay — heavier at bottom where text sits */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        {/* Text — bottom-left */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 300,

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
              ml: { xs: 0, sm: 15, md: 33 },
              mt: 2,
              transform: "scaleY(1.5)",
            }}
          >
            Services
          </Typography>

          <Typography
            sx={{
              color: colors.white,
              fontWeight: 200,
              fontSize: { xs: "0.8rem", sm: "0.5rem", md: "0.9rem" },
              fontFamily: "open sans, sans-serif",
              lineHeight: 1.2,
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              ml: { xs: 0, sm: 15, md: 33 },
              mt: 5,
              transform: "scaleY(1.2)",
              maxWidth:700,
              letterSpacing:1,
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
        <Container maxWidth="md">
          {/* Section heading + underline with scroll-animated orange dot */}
          <Box sx={{ mb: { xs: 4, md: 5 } }}>
            <Typography
              sx={{
                color: colors.navy,
                fontWeight: 800,
                fontSize: { xs: "1.9rem", sm: "2.3rem", md: "2.6rem" },
                fontFamily: "anton, sans-serif",
                letterSpacing: 0.5,
                mb: 1.5,
              }}
            >
              Services We Offer
            </Typography>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 2,
                backgroundColor: colors.border || "rgba(10,31,61,0.25)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: `${scrollPercent}%`,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: colors.accent,
                  transform: "translate(-50%, -50%)",
                  transition: "left 0.15s ease-out",
                  boxShadow: "0 0 6px rgba(0,0,0,0.15)",
                }}
              />
            </Box>
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
                        color: colors.navy,
                        fontWeight: 700,
                        fontSize: { xs: "0.95rem", md: "1.02rem" },
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
                        fontSize: { xs: "0.82rem", md: "0.86rem" },
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
          backgroundColor: "#3a3f47",
          py: { xs: 5, md: 5 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              backgroundColor: "#b0b8c5",
              borderRadius: "6px",
              px: { xs: 3, md: 5 },
              py: { xs: 4, md: 7 },
            }}
          >
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
          </Box>
        </Container>
      </Box>
    </Box>
  );
}