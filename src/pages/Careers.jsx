import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import colors from "../assets/colors";
import careersHero from "../assets/careers-hero.jpg";

const HERO_BG = careersHero;

const jobs = [
  {
    title: "Python Developer",
    experience: "1-3 Years",
    description:
      "We are looking for a talented and motivated Python Developer to join our dynamic team. The ideal candidate will be responsible for developing high-quality, efficient, and reusable code. You will work closely with front-end developers, build APIs, and automate processes.",
  },
  {
    title: "JavaScript Developer",
    experience: "1-3 Years",
    description:
      "Join our team as a JavaScript Developer and contribute to creating highly interactive and dynamic web applications. You will work on both the front-end and back-end, using frameworks like React, Angular, and Node.js to build scalable applications.",
  },
  {
    title: "Java Developer",
    experience: "1-3 Years",
    description:
      "We are seeking an experienced Java Developer to join our growing team. In this role, you will be responsible for developing robust and scalable Java applications, optimizing performance, and ensuring seamless integration with databases and APIs.",
  },
  {
    title: "Go Developer",
    experience: "1-3 Years",
    description:
      "We are looking for a skilled Go Developer to help us build high-performance applications. As part of the team, you will be working on scalable solutions, microservices, and ensuring application efficiency using Go's concurrency and parallelism features.",
  },
  {
    title: "iOS Swift",
    experience: "1-3 Years",
    description:
      "We are looking for a passionate iOS Swift Developer to join our team. The ideal candidate will be responsible for developing innovative, high-quality iOS applications that provide excellent user experiences.",
  },
  {
    title: "C++ Developer",
    experience: "1-3 Years",
    description:
      "We are seeking a C++ Developer to create high-performance applications and embedded systems. You will work with system-level programming, memory optimization, and multithreading to develop efficient solutions for complex challenges.",
  },
  {
    title: "Verilog Developer",
    experience: "1-3 Years",
    description:
      "We are seeking an experienced Verilog Developer to join our hardware design team. The role involves designing, testing, and optimizing digital circuits for FPGA and ASIC implementations using Verilog.",
  },
];

const flags = "🇲🇾 Malaysia  \u00a0 🇹🇭 Thailand  \u00a0 🇮🇳 India";

export default function Careers() {
  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          backgroundColor: colors.navyDark,
          backgroundImage: `linear-gradient(120deg, rgba(6,15,30,0.94) 0%, rgba(10,31,61,0.85) 60%, rgba(10,31,61,0.6) 100%), url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          py: { xs: 10, md: 14 },
          minHeight: { md: 460 },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: colors.accent,
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: 2.5,
              mb: 1.5,
              textTransform: "uppercase",
            }}
          >
            Grow with iFathom
          </Typography>
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.4rem" },
              lineHeight: 1.1,
              mb: 2.5,
              maxWidth: 680,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Do your life's best work at iFathom.
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.75)",
              fontSize: { xs: "0.98rem", md: "1.1rem" },
              maxWidth: 560,
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Innovate, grow, and make an impact with a team that values
            creativity and collaboration. Build what's next — join us.
          </Typography>
          <Button
            href="#openings"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: colors.accent,
              color: colors.white,
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: "6px",
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "0 4px 20px rgba(232,129,58,0.4)",
              "&:hover": { backgroundColor: colors.accentDark },
            }}
          >
            Current Openings
          </Button>
        </Container>
      </Box>

      {/* ── Current Openings ── */}
      <Container
        maxWidth="lg"
        id="openings"
        sx={{ py: { xs: 7, md: 10 } }}
      >
        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              color: colors.accent,
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: 2,
              mb: 1,
              textTransform: "uppercase",
            }}
          >
            Join Our Team
          </Typography>
          <Typography
            sx={{
              color: colors.navy,
              fontWeight: 800,
              fontSize: { xs: "1.6rem", md: "2.1rem" },
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Current Openings
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {jobs.map((job) => (
            <Grid item xs={12} md={6} key={job.title}>
              <Box
                sx={{
                  height: "100%",
                  border: `1px solid ${colors.border}`,
                  borderRadius: "14px",
                  p: { xs: 3, md: 3.5 },
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: colors.white,
                  transition: "box-shadow 0.25s ease, border-color 0.25s ease",
                  "&:hover": {
                    boxShadow: "0 10px 30px rgba(10,31,61,0.1)",
                    borderColor: colors.accent,
                  },
                }}
              >
                {/* Title row */}
                <Typography
                  sx={{
                    color: colors.navy,
                    fontWeight: 800,
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    mb: 1,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {job.title}
                </Typography>

                {/* Flags */}
                <Typography sx={{ fontSize: "0.98rem", mb: 1.5, lineHeight: 1.5 }}>
                  {flags}
                </Typography>

                {/* Experience chip */}
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={`Experience: ${job.experience}`}
                    size="small"
                    sx={{
                      backgroundColor: colors.offWhite,
                      color: colors.navy,
                      fontWeight: 600,
                      fontSize: "0.78rem",
                      border: `1px solid ${colors.border}`,
                      height: 26,
                    }}
                  />
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    color: colors.grayText,
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    flexGrow: 1,
                    mb: 2.5,
                  }}
                >
                  {job.description}
                </Typography>

                <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    alignSelf: "flex-start",
                    color: colors.accent,
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "0.88rem",
                    px: 0,
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: colors.accentDark,
                    },
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── Fathom the Future ── */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${colors.navyDark} 0%, #0F2847 100%)`,
          py: { xs: 8, md: 11 },
        }}
      >
        <Container maxWidth="md">
          <Typography
            align="center"
            sx={{
              color: colors.accent,
              fontWeight: 800,
              fontSize: { xs: "1.6rem", md: "2.1rem" },
              mb: 2.5,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Fathom the future!
          </Typography>
          <Typography
            align="center"
            sx={{
              color: "rgba(255,255,255,0.72)",
              fontSize: { xs: "0.97rem", md: "1.05rem" },
              lineHeight: 1.9,
              mb: 5,
              maxWidth: 620,
              mx: "auto",
            }}
          >
            At iFathom, you will create the impossible & shape a world beyond
            imagination. If you dream in code, think in solutions, and thrive
            on innovation, this is your place to make an impact.
          </Typography>

          <Box
            sx={{
              border: `1px solid ${colors.navyMid}`,
              borderRadius: "14px",
              p: { xs: 3.5, md: 5 },
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
          >
            <Typography
              sx={{
                color: colors.white,
                fontWeight: 700,
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                mb: 1,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Ready to take the next step in your career?
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.62)",
                fontSize: "0.95rem",
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              Connect with us on WhatsApp or Telegram to send your CV and
              accelerate your career!
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="center"
              spacing={2}
            >
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                href="https://wa.me/919820663764"
                target="_blank"
                rel="noreferrer"
                sx={{
                  backgroundColor: "#25D366",
                  color: colors.white,
                  fontWeight: 700,
                  px: 4,
                  py: 1.4,
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "0.97rem",
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#1fba58", boxShadow: "none" },
                }}
              >
                WhatsApp
              </Button>
              <Button
                variant="outlined"
                startIcon={<TelegramIcon />}
                href="https://t.me/ifathom"
                target="_blank"
                rel="noreferrer"
                sx={{
                  borderColor: "rgba(255,255,255,0.4)",
                  color: colors.white,
                  fontWeight: 700,
                  px: 4,
                  py: 1.4,
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "0.97rem",
                  "&:hover": {
                    borderColor: colors.accent,
                    color: colors.accent,
                    backgroundColor: "transparent",
                  },
                }}
              >
                Telegram
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
