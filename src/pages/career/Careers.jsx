import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import PlaceIcon from "@mui/icons-material/Place";
import colors from "../../assets/colors";
import careersHeroBg from "../../assets/careers-hero.jpg";

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
const headingFont = "anton, sans-serif";
const FLAGS = "🇲🇾 Malaysia   🇹🇭 Thailand   🇮🇳 India";

const jobs = [
  {
    title: "Python Developer",
    experience: "1-3 Years",
    slug: "python-developer",
    description:
      "We are looking for a talented and motivated Python Developer to join our dynamic team. The ideal candidate will be responsible for developing high-quality, efficient, and reusable code. You will work closely with front-end developers, build APIs, and automate processes.",
  },
  {
    title: "JavaScript Developer",
    experience: "1-3 Years",
    slug: "javascript-developer",
    description:
      "Join our team as a JavaScript Developer and contribute to creating highly interactive and dynamic web applications. You will work on both the front-end and back-end, using frameworks like React, Angular, and Node.js to build scalable applications.",
  },
  {
    title: "Java Developer",
    experience: "1-3 Years",
    slug: "java-developer",
    description:
      "We are seeking an experienced Java Developer to join our growing team. In this role, you will be responsible for developing robust and scalable Java applications, optimizing performance, and ensuring seamless integration with databases and APIs.",
  },
  {
    title: "Go Developer",
    experience: "1-3 Years",
    slug: "go-developer",
    description:
      "We are looking for a skilled Go Developer to help us build high-performance applications. As part of the team, you will be working on scalable solutions, microservices, and ensuring application efficiency using Go's concurrency and parallelism features.",
  },
  {
    title: "iOS Swift",
    experience: "1-3 Years",
    slug: "ios-swift",
    description:
      "We are looking for a passionate iOS Swift Developer to join our team. The ideal candidate will be responsible for developing innovative, high-quality iOS applications that provide excellent user experiences.",
  },
  {
    title: "C++ Developer",
    experience: "1-3 Years",
    slug: "cpp-developer",
    description:
      "We are seeking a C++ Developer to create high-performance applications and embedded systems. You will work with system-level programming, memory optimization, and multithreading to develop efficient solutions for complex challenges.",
  },
  {
    title: "Verilog Developer",
    experience: "1-3 Years",
    slug: "verilog-developer",
    description:
      "We are seeking an experienced Verilog Developer to join our hardware design team. The role involves designing, testing, and optimizing digital circuits for FPGA and ASIC implementations using Verilog.",
  },
];

const locations = [
  {
    country: "MALAYSIA",
    company: "ADA ITech SDN BHD",
    address: [
      "Level 12, Sunway V2 Tower,",
      "No. 158, Jalan Peel, Maluri,",
      "55100 Kuala Lumpur, Wilayah",
    ],
    email: "info.my@adaitech.com",
    mapUrl: "https://maps.app.goo.gl/Lmede1fXJ4iE3UDGA",
  },
  {
    country: "THAILAND",
    company: "ADA ITECH Co., LTD",
    address: [
      "RASA TWO, Office No: 1815,",
      "1818 Phetchaburi Rd, Makkasan,",
      "Ratchathewi, Bangkok 10400",
    ],
    email: "info.th@adaitech.com",
    mapUrl: "https://maps.app.goo.gl/dusCwHsPFNa5xrZN9",
  },
  {
    country: "INDIA (Head Office)",
    company: "",
    address: [
      "6 & 7, Ground Floor,",
      "23, Motilal Kanji Building,",
      "Navroji Sheth Street, Thakurdwar,",
      "Charni Road (East), Mumbai - 400002",
    ],
    email: "info@ifathomgroup.com",
    mapUrl: "https://maps.app.goo.gl/ifathomMumbai",
  },
];

// ─────────────────────────────────────────────
// JobCard
// ─────────────────────────────────────────────
function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#DCEEFA",
        borderRadius: "10px",
        p: { xs: 2, md: 2.5 },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "flex-start" },
        gap: 1.5,
        transition: "box-shadow 0.2s",
        "&:hover": {
          boxShadow: "0 4px 18px rgba(10,31,61,0.12)",
        },
      }}
    >
      {/* Left content */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          sx={{
            color: colors.navyDark,
            fontWeight: 700,
            fontFamily: headingFont,
            fontSize: { xs: "1.15rem", md: "1.4rem" },
            mb: 0.5,
          }}
        >
          {job.title}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={0.7} sx={{ mb: 0.5 }}>
          <PlaceIcon sx={{ fontSize: 15, color: colors.accent }} />
          <Typography sx={{ fontSize: "0.82rem", color: colors.navy }}>
            {FLAGS}
          </Typography>
        </Stack>

        <Typography sx={{ fontSize: "0.83rem", color: colors.navy, mb: 1 }}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            Experience:
          </Box>{" "}
          {job.experience}
        </Typography>

        <Typography
          sx={{
            color: colors.grayText,
            fontSize: "0.86rem",
            lineHeight: 1.6,
            mb: 0.75,
            ...(expanded
              ? {}
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }),
          }}
        >
          {job.description}
        </Typography>

        <Button
          onClick={() => setExpanded((e) => !e)}
          sx={{
            color: colors.navyDark,
            fontWeight: 600,
            textTransform: "none",
            fontSize: "0.83rem",
            px: 0,
            minWidth: 0,
            py: 0.25,
            "&:hover": { backgroundColor: "transparent", color: colors.accent },
          }}
        >
          {expanded ? "Read less" : "Read more"}
        </Button>
      </Box>

      {/* View Details button */}
      <Button
        variant="contained"
        onClick={() => navigate(`/careers/${job.slug}`)}
        endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem !important" }} />}
        sx={{
          backgroundColor: colors.navyDark,
          color: colors.white,
          fontWeight: 500,
          px: 2.5,
          py: 0.9,
          borderRadius: "6px",
          textTransform: "none",
          fontSize: "0.86rem",
          boxShadow: "none",
          whiteSpace: "nowrap",
          flexShrink: 0,
          alignSelf: { xs: "flex-start", sm: "center" },
          "&:hover": { backgroundColor: colors.accent, boxShadow: "none" },
        }}
      >
        View Details
      </Button>
    </Box>
  );
}

// ─────────────────────────────────────────────
// Main Careers page
// ─────────────────────────────────────────────
export default function Careers() {
  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          background: `
            linear-gradient(90deg, rgba(90,40,150,0.55) 0%, rgba(10,10,20,0) 35%, rgba(10,10,20,0) 65%, rgba(20,110,110,0.55) 100%),
            linear-gradient(135deg, #6b2fbf 0%, #1a1030 30%, #0a0a14 50%, #0d1f2d 70%, #1f7a7a 100%)
          `,
          py: { xs: 10, md: 14 },
          minHeight: { xs: 280, md: 320 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 700,
              fontFamily: headingFont,
              letterSpacing: 1,
              lineHeight: 1.1,
              fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem" },
              textShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            Grow with
            <br />
            <Box
              component="span"
              sx={{ fontSize: { xs: "3.2rem", sm: "4.2rem", md: "5.2rem" } }}
            >
              iFathom
            </Box>
          </Typography>
        </Container>
      </Box>

      {/* ── Do your life's best work ── */}
      <Box
        sx={{
          backgroundColor: colors.white,
          pt: { xs: 7, md: 10 },
          pb: { xs: 7, md: 9 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            sx={{
              color: colors.navyDark,
              fontWeight: 700,
              fontFamily: headingFont,
              letterSpacing: 0.5,
              lineHeight: 1.3,
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
              mb: 4,
            }}
          >
            Do your life's best work at iFathom.
          </Typography>

          <Typography
            sx={{
              color: colors.navyDark,
              fontWeight: 600,
              fontFamily: headingFont,
              lineHeight: 2.2,
              fontSize: { xs: "1.05rem", sm: "1.25rem", md: "1.4rem" },
            }}
          >
            Innovate, grow, and make an impact with a team that
            <br />
            values creativity and collaboration.
            <br />
            Build what's next — join us.
          </Typography>
        </Container>
      </Box>

      {/* ── Current Openings ── */}
      <Box sx={{ backgroundColor: colors.offWhite, py: { xs: 7, md: 10 } }}>
        <Container
          id="openings"
          sx={{ maxWidth: "700px !important", mx: "auto" }}
        >
          {/* Heading bar */}
          <Box
            sx={{
              backgroundColor: colors.navyDark,
              borderRadius: "10px",
              py: 2.5,
              mb: 5,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: colors.white,
                fontWeight: 600,
                fontFamily: headingFont,
                fontSize: { xs: "1.6rem", md: "2rem" },
              }}
            >
              Current Openings
            </Typography>
          </Box>

          <Stack spacing={2.5}>
            {jobs.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ── Fathom the Future ── */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `linear-gradient(rgba(5,15,35,0.78), rgba(5,15,35,0.78)), url(${careersHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: { xs: 8, md: 11 },
        }}
      >
        <Container maxWidth="sm">
          <Typography
            align="center"
            sx={{
              color: "#4FD1E8",
              fontWeight: 700,
              fontFamily: headingFont,
              fontSize: { xs: "1.8rem", md: "2.6rem" },
              mb: 2.5,
              textShadow: "0 0 25px rgba(79,209,232,0.6)",
            }}
          >
            Fathom the future!
          </Typography>
          <Typography
            align="center"
            sx={{
              color: "rgba(255,255,255,0.9)",
              fontSize: { xs: "0.97rem", md: "1.08rem" },
              lineHeight: 1.9,
              mb: 4,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            At iFathom, you will create the impossible &amp; shape a world
            beyond imagination. If you dream in code, think in solutions, and
            thrive on innovation, this is your place to make an impact.
          </Typography>

          <Box
            sx={{
              width: 160,
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.35)",
              mx: "auto",
              mb: 4,
            }}
          />

          <Typography
            align="center"
            sx={{
              color: "rgba(255,255,255,0.88)",
              fontWeight: 600,
              fontFamily: headingFont,
              fontSize: { xs: "1.05rem", md: "1.25rem" },
              mb: 1,
            }}
          >
            Ready to take the next step in your career?
          </Typography>
          <Typography
            align="center"
            sx={{
              color: "rgba(255,255,255,0.7)",
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
        </Container>
      </Box>

      {/* ── Work at iFathom ── */}
      <Box sx={{ backgroundColor: colors.white, py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 3, md: 5 },
                maxWidth: 820,
                width: "100%",
              }}
            >
              {/* Left */}
              <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 46%" }, textAlign: "left" }}>
                <Typography
                  sx={{
                    color: colors.navy,
                    fontWeight: 800,
                    fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.4rem" },
                    fontFamily: headingFont,
                    lineHeight: 1.2,
                    mb: 1.5,
                  }}
                >
                  Work at iFathom!
                </Typography>
                <Typography
                  sx={{
                    color: colors.navy,
                    fontSize: { xs: "0.92rem", md: "1rem" },
                    lineHeight: 1.7,
                  }}
                >
                  Innovate, grow, and make an impact with a team that values
                  creativity and collaboration. Build what's next!
                </Typography>
              </Box>

              {/* Right */}
              <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 44%" } }}>
                <Typography
                  sx={{
                    color: colors.navy,
                    fontWeight: 700,
                    fontSize: { xs: "1.05rem", md: "1.2rem" },
                    fontFamily: headingFont,
                    letterSpacing: 0.3,
                    mb: 1,
                    textAlign: "left",
                  }}
                >
                  Current Openings for
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
                  <Box
                    component="ul"
                    sx={{ m: 0, pl: 2.5, color: colors.navy, fontSize: "0.88rem", lineHeight: 1.7 }}
                  >
                    {["Python", "Javascript", "Java", "Go"].map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </Box>
                  <Box
                    component="ul"
                    sx={{ m: 0, ml: { xs: 4, sm: 5 }, pl: 2.5, color: colors.navy, fontSize: "0.88rem", lineHeight: 1.7 }}
                  >
                    {["iOS Swift", "C++", "Verilog"].map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </Box>
                </Box>

                {/* Join Us NOW button */}
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <Box
                    component={Link}
                    to="#openings"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("openings")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    sx={{
                      display: "flex",
                      alignItems: "stretch",
                      width: 190,
                      height: 68,
                      textDecoration: "none",
                      borderRadius: "6px",
                      overflow: "hidden",
                      border: `5px solid ${colors.navy}`,
                      boxSizing: "border-box",
                      backgroundColor: colors.navy,
                    }}
                  >
                    <Box
                      sx={{
                        width: 82,
                        backgroundColor: colors.navy,
                        color: colors.white,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        px: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: headingFont,
                          fontWeight: 700,
                          fontSize: "0.7rem",
                          lineHeight: 1,
                          color: colors.white,
                          whiteSpace: "nowrap",
                        }}
                      >
                        Join Us
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: headingFont,
                          fontWeight: 800,
                          fontSize: "1.4rem",
                          lineHeight: 1,
                          color: colors.white,
                          mt: 0.5,
                        }}
                      >
                        NOW
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        backgroundColor: colors.accent,
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": { backgroundColor: colors.accentDark },
                      }}
                    >
                      <ArrowForwardIosIcon
                        sx={{ color: colors.white, fontSize: "1.8rem" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Our Locations ── */}
      <Box sx={{ backgroundColor: colors.navy, py: { xs: 5, md: 6 } }}>
        <Container maxWidth="md">
          <Typography
            align="center"
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: { xs: "1.6rem", md: "2rem" },
              fontFamily: headingFont,
              mb: 3,
            }}
          >
            Our Locations
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {locations.map((loc) => (
              <Box
                key={loc.country}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 28%" },
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    color: colors.white,
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    letterSpacing: 0.5,
                    mb: 0.75,
                  }}
                >
                  {loc.country}
                </Typography>

                {loc.company && (
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      fontWeight: 400,
                      fontSize: "0.78rem",
                      mb: 0.25,
                    }}
                  >
                    {loc.company}
                  </Typography>
                )}

                <Box sx={{ mb: 0.75 }}>
                  {loc.address.map((line, i) => (
                    <Typography
                      key={i}
                      sx={{
                        color: "rgba(255,255,255,0.82)",
                        fontSize: "0.78rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Box>

                <Typography
                  sx={{ color: "rgba(255,255,255,0.82)", fontSize: "0.78rem", mb: 0.75 }}
                >
                  Email ID:{" "}
                  <Box
                    component="a"
                    href={`mailto:${loc.email}`}
                    sx={{
                      color: "rgba(255,255,255,0.82)",
                      textDecoration: "none",
                      "&:hover": { color: colors.accent },
                    }}
                  >
                    {loc.email}
                  </Box>
                </Typography>

                <Box
                  component="a"
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    color: "rgba(255,255,255,0.82)",
                    fontSize: "0.78rem",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    "&:hover": { color: colors.accent },
                  }}
                >
                  See on Map ›
                </Box>
              </Box>
            ))}
          </Box>
        </Container>

        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", mb: 2 }} />
          <Typography
            align="center"
            sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem" }}
          >
            © Copyright 2025 iFathom Group
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
