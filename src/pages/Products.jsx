import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import colors from "../assets/colors";
import productsHero from "../assets/products-hero.jpg";
import productDesktops from "../assets/product-desktops.png";
import productServers from "../assets/product-servers.jpg";
import productLaptops from "../assets/product-laptops.png";
import productPrinters from "../assets/product-printers.png";
import productVideoconf from "../assets/product-videoconf.jpg";
import productSurveillence from "../assets/product-surveillence.png";
import productCybersecurity from "../assets/product-cyber_security.png";
import ProductScanners from "../assets/product-scanners.png";
import productPlotters from "../assets/product-plotters.png";
import productUps from "../assets/product-ups.png";

const HERO_IMG = productsHero;

const products = [
  {
    image: productDesktops,
    title: "DESKTOPS",
    brands: "Acer, Apple, Dell, HP, Lenovo",
  },
  {
    image: productServers,
    title: "SERVERS",
    brands: "Dell, HP, Lenovo",
  },
  {
    image: productLaptops,
    title: "LAPTOPS",
    brands: "Acer, Apple, Dell, HP, Lenovo",
  },
  {
    image: productPrinters,
    title: "PRINTERS",
    brands: "Canon, EPSON, HP, Xerox",
  },
  {
    image: productServers,
    title: "NETWORKING",
    brands: "Aruba, D Link, Cisco, Linksys",
  },
  {
    image: productVideoconf,
    title: "VIDEO CONFERENCING",
    brands: "CISCO, Logitech, Polycom, Vu",
  },
  {
    image: productSurveillence,
    title: "SURVEILLANCE",
    brands: "Hikvision, Honeywell, CP Plus",
  },
  {
    image: productCybersecurity,
    title: "CYBER SECURITY",
    brands: "FortiGate, Sophos, SonicWall",
  },
  {
    image: ProductScanners,
    title: "SCANNERS",
    brands: "Epson, HP",
  },
  {
    image: productPlotters,
    title: "PLOTTERS",
    brands: "Canon, HP",
  },
  {
    image: productUps,
    title: "UPS",
    brands: "APC, Powercom , Vertiv",
  },
];

export default function Products() {
  const [showAll, setShowAll] = useState(false);
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
            bottom: 0,
            left: 0,
            width: "100%",
            height: 200,

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
              fontSize: { xs: "1.5rem", sm: "2rem", md: "4rem" },
              fontFamily: "anton, sans-serif",
              lineHeight: 1.2,
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              ml: 33,
              mt: 2,
              transform: "scaleY(1.5)",
            }}
          >
            Our Products
          </Typography>

          <Typography
            sx={{
              color: colors.white,
              fontWeight: 200,
              fontSize: { xs: "0.8rem", sm: "0.5rem", md: "1rem" },
              fontFamily: "anton, sans-serif",
              lineHeight: 1,
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              ml: 33,
              mt: 5,
              transform: "scaleY(1)",
            }}
          >
            iFathom optimizes your IT with tailored infrastructure, cloud, and security solutions for efficiency and growth.
          </Typography>
        </Box>
      </Box>

      {/* ── Products Grid ── */}
      <Box sx={{ backgroundColor: colors.white, py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: 3,
              columnGap: { xs: 0, sm: 1, md: 1.5 },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            {(showAll ? products : products.slice(0, 6)).map((p) => (
              <Box
                key={p.title}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "calc(33.333% - 8px)",
                    md: "calc(33.333% - 12px)",
                  },
                  border: `1px solid ${colors.border}`,
                  borderRadius: "4px",
                  overflow: "hidden",
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.2s",
                  "&:hover": {
                    boxShadow: "0 4px 16px rgba(10,31,61,0.1)",
                  },
                  "&:hover .product-img-overlay": {
                    opacity: 1,
                  },
                }}
              >
                {/* Product image — full width, with light grey hover overlay */}
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={p.image}
                    alt={p.title}
                    sx={{
                      width: "100%",
                      height: { xs: 120, sm: 130, md: 140 },
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <Box
                    className="product-img-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(211,211,211,0.55)",
                      opacity: 0,
                      transition: "opacity 0.2s",
                      pointerEvents: "none",
                    }}
                  />
                </Box>

                {/* Card body */}
                <Box
                  sx={{
                    px: 2,
                    pt: 1.5,
                    pb: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      color: colors.navy,
                      fontWeight: 900,
                      fontSize: { xs: "1rem", md: "0.89rem" },
                      mb: 0.4,
                      textTransform: "uppercase",
                      transform: "scaleY(1.9)",
                      fontFamily: "open sans, sans-serif",
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
            ))}
          </Box>

          {/* Show More button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 4, md: 5 },
            }}
          >
            <Button
              variant="text"
              disableRipple
              onClick={() => setShowAll(!showAll)}
              sx={{
                color: colors.navy,
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                textTransform: "none",
                p: 0,
                minWidth: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: colors.accent,
                },
              }}
            >
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}