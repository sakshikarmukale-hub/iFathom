import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import colors from "../assets/colors";
import facilityHero from "../assets/facility-hero.jpg";
import facilityDesktopAdmin from "../assets/facility-desktop-admin.png";
import facilityRemoteTroubleshoot from "../assets/facility-remote-troubleshoot.png";
import serviceDeployment from "../assets/service-deployment.png";
import facilityInventory from "../assets/facility-inventory.png";
import facilityInfraMgmt from "../assets/facility-infra-mgmt.png";
import servicesHero from "../assets/services-hero.png";

const HERO_IMG = facilityHero;

const services = [
  {
    image: facilityDesktopAdmin,
    title: "Desktop Administration & Support",
    description: "Managing IT assets and providing desktop support.",
  },
  {
    image: facilityRemoteTroubleshoot,
    title: "Remote Troubleshooting",
    description: "Resolving desktop and server issues via remote control.",
  },
  {
    image: serviceDeployment,
    title: "Software Installation & Upgrades",
    description: "Deploying and updating software remotely.",
  },
  {
    image: facilityInventory,
    title: "Hardware & Software Inventory Management",
    description:
      "Maintaining accurate records of IT assets for tracking, and optimization.",
  },
  {
    image: facilityInfraMgmt,
    title: "Technology Infrastructure Management",
    description: "Overseeing hardware, software, and network systems.",
  },
  {
    image: servicesHero,
    title: "Data Security & Recovery",
    description:
      "Ensuring virus protection, backups, system recovery, and data security.",
  },
];

export default function FacilityManagementServices() {
  // Tracks overall page-scroll progress (0–100) to animate the orange dot
  // along the "Services We Offer" underline — same pattern as Services.jsx.
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
          height: { xs: 220, sm: 380, md: 480 },
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
              "linear-gradient(to top, rgba(45, 78, 101, 0.82) 0%, rgba(45, 78, 101, 0.55) 55%, rgba(20, 40, 55, 0.25) 100%)",
          }}
        />
        {/* Text — bottom, centered, frosted glass banner (Services.jsx style) */}
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

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "4rem" },
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.15,
              mb: 1.5,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Facility Management Services
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.88)",
              fontSize: { xs: "0.75rem", sm: "0.82rem", md: "1rem" },
              lineHeight: 1.65,
              textAlign: "justify",
              textShadow: "0 1px 6px rgba(0,0,0,0.5)",
              maxWidth: 700,
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
                    sx={{
                      px: { xs: 1.5, md: 1 },
                      py: { xs: 1.5, md: 1 },
                    }}
                  >
                    <Box
                      component="img"
                      src={s.image}
                      alt={s.title}
                      sx={{
                        width: "100%",
                        height: { xs: 150, md: 165 },
                        objectFit: "cover",
                        display: "block",
                        borderRadius: "3px",
                      }}
                    />
                  </Box>

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
          backgroundColor: "#677695",
          py: { xs: 5, md: 5 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              backgroundColor: "#c8ced6",
              borderRadius: "6px",
              maxWidth: "1290px",
              mx: "auto",
              px: { xs: 3, md: 5 },
              py: { xs: 4, md: 7 },
            }}
          >
            <Typography
              align="center"
              sx={{
                color: colors.navy,
                fontWeight: 800,
                fontSize: { xs: "1.3rem", md: "2.5rem" },
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