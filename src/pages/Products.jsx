import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import colors from "../assets/colors";

const HERO_IMG =
  "https://static.wixstatic.com/media/f01754_6d7ab714266f4cd88ee5c0a952998e4e~mv2.jpg";

const products = [
  {
    image:
      "https://static.wixstatic.com/media/95afa1_9ca638d84430451b9ce0223cf6f2281f~mv2.png",
    title: "DESKTOPS",
    brands: "Acer, Apple, Dell, HP, Lenovo",
  },
  {
    image:
      "https://static.wixstatic.com/media/24a129_5f9c727915b34bcea248b1aae69bd83d~mv2.jpg",
    title: "SERVERS",
    brands: "Dell, HP, Lenovo",
  },
  {
    image:
      "https://static.wixstatic.com/media/95afa1_53f96296901d484885be08d3eceabef0~mv2.png",
    title: "LAPTOPS",
    brands: "Acer, Apple, Dell, HP, Lenovo",
  },
  {
    image:
      "https://static.wixstatic.com/media/95afa1_6f71738bda154d09ba312add75dddd51~mv2.png",
    title: "PRINTERS",
    brands: "Canon, EPSON, HP, Xerox",
  },
  {
    image:
      "https://static.wixstatic.com/media/24a129_5f9c727915b34bcea248b1aae69bd83d~mv2.jpg",
    title: "NETWORKING",
    brands: "Aruba, D Link, Cisco, Linksys",
  },
  {
    image:
      "https://static.wixstatic.com/media/95afa1_1fd426b170b745c2b73c71cd3f0f8b8a~mv2.jpg",
    title: "VIDEO CONFERENCING",
    brands: "CISCO, Logitech, Polycom, Vu",
  },
];

export default function Products() {
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
          alt="Our Products"
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
            bottom: { xs: 20, md: 32 },
            left: { xs: 20, sm: 40, md: 60 },
          }}
        >
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.6rem" },
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.15,
              mb: 0.75,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Our Products
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.88)",
              fontSize: { xs: "0.78rem", sm: "0.85rem", md: "0.9rem" },
              maxWidth: { xs: "100%", md: 520 },
              lineHeight: 1.55,
              textShadow: "0 1px 6px rgba(0,0,0,0.5)",
            }}
          >
            iFathom optimizes your IT with tailored infrastructure, cloud, and
            security solutions for efficiency and growth.
          </Typography>
        </Box>
      </Box>

      {/* ── Products Grid ── */}
      <Box sx={{ backgroundColor: colors.white, py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {products.map((p) => (
              <Grid item xs={12} sm={6} md={4} key={p.title}>
                <Box
                  sx={{
                    border: `1px solid ${colors.border}`,
                    borderRadius: "4px",
                    overflow: "hidden",
                    backgroundColor: colors.white,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.2s",
                    "&:hover": {
                      boxShadow: "0 4px 16px rgba(10,31,61,0.1)",
                    },
                  }}
                >
                  {/* Product image — full width, cover */}
                  <Box
                    component="img"
                    src={p.image}
                    alt={p.title}
                    sx={{
                      width: "100%",
                      height: { xs: 150, sm: 160, md: 175 },
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
                        fontSize: { xs: "0.82rem", md: "0.88rem" },
                        mb: 0.4,
                        textTransform: "uppercase",
                        letterSpacing: 0.4,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {p.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.grayText,
                        fontSize: { xs: "0.75rem", md: "0.8rem" },
                        lineHeight: 1.5,
                      }}
                    >
                      {p.brands}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Show More button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 4, md: 5 },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: colors.navy,
                color: colors.navy,
                fontWeight: 600,
                fontSize: "0.85rem",
                px: 4,
                py: 0.9,
                borderRadius: "4px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: colors.navy,
                  color: colors.white,
                  borderColor: colors.navy,
                },
              }}
            >
              Show More
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
