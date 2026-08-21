import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import colors from "../assets/colors";
import ifathomLogo from "../assets/ifathom-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  {
    label: "Facility Management Services",
    to: "/facility-management-services",
  },
  {
    label: "Network Integration Services",
    to: "/network-integration-services",
  },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  return (
    <>
      {/* ── Fixed Navbar ── */}
      <Box
        sx={{
          position: "fixed",
          top: 8,
          left: 0,
          right: 0,
          zIndex: 1200,
          display: "flex",
          justifyContent: "center",
          px: 1,
          pointerEvents: "none",
        }}
      >
        {/* ── Visible Navbar Container ── */}
        <Box
          sx={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",

            /* Light gray background */
            backgroundColor: "#FFFFFF73",

            borderRadius: "6px",

            /* Reduced navbar padding */
            px: "12px",
            py: "15px",

            gap: 0,

            /* Reduce overall width */
            width: "fit-content",
            maxWidth: "calc(100% - 20px)",

            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          {/* ── Logo Section ── */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              textDecoration: "none",
              flexShrink: 0,
              pr: "8px",
              mr: "5px",
              borderRight: "1px solid #c4c8cf",
            }}
          >
            <Box
              component="img"
              src={ifathomLogo}
              alt="iFathom logo"
              sx={{
                width: 35,
                height: 35,
                objectFit: "contain",
                display: "block",
              }}
            />

            <Typography
              sx={{
                color: "#1a1a2e",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: 0.2,
                fontFamily: "'Poppins', sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              iFathom
            </Typography>
          </Box>

          {/* ── Desktop Nav Buttons ── */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => {
              const active = location.pathname === link.to;

              return (
                <Box
                  key={link.to}
                  component={Link}
                  to={link.to}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",

                    /* Smaller buttons */
                    px: "12px",
                    py: "10px",

                    borderRadius: "4px",

                    backgroundColor: active ? "#1a2a4a" : "#ffffff",

                    color: active ? "#ffffff" : "#1a1a2e",

                    textDecoration: "none",

                    fontSize: "0.78rem",

                    fontWeight: active ? 600 : 400,

                    whiteSpace: "nowrap",

                    lineHeight: 1.3,

                    transition:
                      "background-color 0.15s, color 0.15s",

                    /* Hover color */
                    "&:hover": {
                      backgroundColor: "#3a3f47",
                      color: "#ffffff",
                    },
                  }}
                >
                  {link.label}
                </Box>
              );
            })}
          </Box>

          {/* ── Mobile Hamburger ── */}
          <Box
            sx={{
              display: { xs: "flex", lg: "none" },
              ml: 1,
            }}
          >
            <IconButton
              onClick={toggleDrawer}
              sx={{
                color: "#1a1a2e",
                p: "4px",

                "&:hover": {
                  backgroundColor: "#3a3f47",
                  color: "#ffffff",
                },
              }}
              aria-label="open menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* ── No Spacer / No Extra Gap ── */}

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: {
              xs: "80%",
              sm: "44%",
            },
            backgroundColor: "#f4f6f9",
          },
        }}
      >
        {/* ── Drawer Header ── */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2.5,
            py: 1.8,
            borderBottom: "1px solid #d0d4db",
          }}
        >
          <Box
            component={Link}
            to="/"
            onClick={toggleDrawer}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={ifathomLogo}
              alt="iFathom"
              sx={{
                width: 28,
                height: 28,
                objectFit: "contain",
              }}
            />

            <Typography
              sx={{
                color: "#1a1a2e",
                fontWeight: 700,
                fontSize: "1rem",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              iFathom
            </Typography>
          </Box>

          <IconButton
            onClick={toggleDrawer}
            sx={{
              color: "#1a1a2e",

              "&:hover": {
                backgroundColor: "#3a3f47",
                color: "#ffffff",
              },
            }}
            aria-label="close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* ── Drawer Links ── */}
        <List sx={{ pt: 1 }}>
          {navLinks.map((link) => {
            const active = location.pathname === link.to;

            return (
              <ListItem key={link.to} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.to}
                  onClick={toggleDrawer}
                  sx={{
                    py: 1.2,
                    px: 2.5,
                    mx: 1.5,
                    my: 0.3,
                    borderRadius: "4px",

                    backgroundColor: active
                      ? "#1a2a4a"
                      : "#ffffff",

                    "&:hover": {
                      backgroundColor: "#3a3f47",
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      sx: {
                        color: active
                          ? "#ffffff"
                          : "#1a1a2e",

                        fontWeight: active ? 600 : 400,

                        fontSize: "0.9rem",

                        transition: "color 0.15s",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}