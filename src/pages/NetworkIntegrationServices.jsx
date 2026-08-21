import React, { useEffect, useRef, useState } from "react";
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
  // Tracks overall page-scroll progress (0–100) to animate the orange dot
  // along the "Services We Offer" underline — same pattern as Services.jsx /
  // FacilityManagementServices.jsx.
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

        {/* Text — bottom, left-aligned, frosted glass banner (FacilityManagementServices.jsx style) */}
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
            alignItems: "flex-start",
            justifyContent: "center",
            textAlign: "left",
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
              maxWidth: 700,
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
        <Container maxWidth="md">
          {/* Section heading + underline with scroll-animated orange dot */}
         
        

            

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
                  {/* Card image with padding */}
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
    backgroundColor: "#6B7986",
    py: { xs: 5, md: 5 },
  }}
>
  <Container maxWidth="xl">
    <Box
      sx={{
        backgroundColor: "#FFFFFFA6",
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