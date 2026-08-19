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
  { label: "Facility Management Services", to: "/facility-management-services" },
  { label: "Network Integration Services", to: "/network-integration-services" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  return (
    <>
      {/*
       * Full-width transparent positioning wrapper — invisible, only for layout.
       * The visible gray pill is the inner Box below.
       */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          display: "flex",
          justifyContent: "center",
          pt: "8px",
          px: 1,
          pointerEvents: "none",
        }}
      >
        {/* ── Visible navbar container — compact gray pill ── */}
        <Box
          sx={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(230, 230, 235, 0.92)",
            borderRadius: "6px",
            px: "20px",
            py: "12px",
            mt:2.5,
            gap: 0,
            maxWidth: "100%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.14)",
          }}
        >
          {/* ── Logo section ── */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              textDecoration: "none",
              flexShrink: 0,
              pr: "10px",
              mr: "6px",
              borderRight: "1px solid #c4c8cf",
            }}
          >
            <Box
              component="img"
              src={ifathomLogo}
              alt="iFathom logo"
              sx={{
                width: 30,
                height: 30,
                objectFit: "contain",
                display: "block",
              }}
            />
            <Typography
              sx={{
                color: "#1a1a2e",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: 0.2,
                fontFamily: "'Poppins', sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              iFathom
            </Typography>
          </Box>

          {/* ── Desktop nav buttons ── */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "6px",
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
                    px: "18px",
                    py: "9px",
                    borderRadius: "4px",
                    backgroundColor: active ? "#1a2a4a" : "#ffffff",
                    color: active ? "#ffffff" : "#1a1a2e",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: active ? 600 : 400,
                    whiteSpace: "nowrap",
                    lineHeight: 1.4,
                    transition: "background-color 0.15s, color 0.15s",
                    "&:hover": {
                      backgroundColor: active ? "#243559" : "#e8ecf0",
                      color: active ? "#ffffff" : "#1a1a2e",
                    },
                  }}
                >
                  {link.label}
                </Box>
              );
            })}
          </Box>

          {/* ── Mobile hamburger ── */}
          <Box sx={{ display: { xs: "flex", lg: "none" }, ml: 1 }}>
            <IconButton
              onClick={toggleDrawer}
              sx={{ color: "#1a1a2e", p: "4px" }}
              aria-label="open menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Spacer so page content doesn't sit under the fixed navbar */}
<Box
  sx={{
    height: {
      xs: "19px",
      sm: "21px",
      lg: "20px",
    },
  }}
/>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: { xs: "80%", sm: "44%" },
            backgroundColor: "#f4f6f9",
          },
        }}
      >
        {/* Drawer header */}
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
            sx={{ display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }}
          >
            <Box
              component="img"
              src={ifathomLogo}
              alt="iFathom"
              sx={{ width: 28, height: 28, objectFit: "contain" }}
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
            sx={{ color: "#1a1a2e" }}
            aria-label="close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Drawer links */}
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
                    backgroundColor: active ? "#1a2a4a" : "#ffffff",
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      sx: {
                        color: active ? "#ffffff" : "#1a1a2e",
                        fontWeight: active ? 600 : 400,
                        fontSize: "0.9rem",
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
