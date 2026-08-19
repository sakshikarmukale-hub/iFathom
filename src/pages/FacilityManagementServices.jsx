import React from "react";
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
       {/* Text — center */}
<Box
  sx={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "80%", md: "70%" },
    maxWidth: 900,
    textAlign: "center",
    pb: { xs: 2, md: 4 },
  }}
>
  <Typography
    sx={{
      color: colors.white,
      fontWeight: 800,
      fontSize: { xs: "1.3rem", sm: "1.7rem", md: "3.5rem" },
      fontFamily: "'Poppins', sans-serif",
      lineHeight: 1.15,
      mb: 1.5,
      mt: 36,
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
    textAlign: "left",
    textShadow: "0 1px 6px rgba(0,0,0,0.5)",
    mb: 4,
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
                        color: "#000",
                        fontWeight: 800,
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
    py: { xs: 4, md: 5 },
    px: { xs: 2, md: 5 },
  }}
>
  <Container maxWidth="lg">
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
          fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.5rem" },
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
