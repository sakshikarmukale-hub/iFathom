import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
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
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        backgroundColor: "#f0f2f5",
        borderBottom: "1px solid #d0d4db",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          px: { xs: 2, md: 3 },
          minHeight: { xs: 56, md: 62 },
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        {/* ── Logo ── */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.8,
            textDecoration: "none",
            flexShrink: 0,
            mr: { md: 1.5 },
          }}
        >
          <Box
            component="img"
            src={ifathomLogo}
            alt="iFathom logo"
            sx={{
              width: { xs: 32, md: 36 },
              height: { xs: 32, md: 36 },
              objectFit: "contain",
            }}
          />
          <Typography
            sx={{
              color: colors.darkText,
              fontWeight: 800,
              fontSize: { xs: "1.15rem", md: "1.25rem" },
              letterSpacing: 0.2,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            iFathom
          </Typography>
        </Box>

        {/* ── Desktop Nav ── */}
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            flexWrap: "nowrap",
            gap: 0.5,
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
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
                  px: 1.4,
                  py: 0.55,
                  borderRadius: "4px",
                  border: active ? "none" : "1px solid #b0b8c4",
                  backgroundColor: active ? colors.navy : "transparent",
                  color: active ? "#ffffff" : colors.darkText,
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontWeight: active ? 600 : 400,
                  whiteSpace: "nowrap",
                  transition: "background-color 0.15s, color 0.15s",
                  "&:hover": {
                    backgroundColor: active ? colors.navyLight : "#e2e6ea",
                    color: active ? "#ffffff" : colors.darkText,
                  },
                }}
              >
                {link.label}
              </Box>
            );
          })}
        </Box>

        {/* ── Mobile hamburger ── */}
        <Box sx={{ display: { xs: "flex", lg: "none" }, ml: "auto" }}>
          <IconButton
            onClick={toggleDrawer}
            sx={{ color: colors.darkText }}
            aria-label="open menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Toolbar>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: { xs: "80%", sm: "44%" },
            backgroundColor: "#f0f2f5",
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
            sx={{ display: "flex", alignItems: "center", gap: 0.8, textDecoration: "none" }}
          >
            <Box
              component="img"
              src={ifathomLogo}
              alt="iFathom"
              sx={{ width: 28, height: 28, objectFit: "contain" }}
            />
            <Typography
              sx={{
                color: colors.darkText,
                fontWeight: 800,
                fontSize: "1.05rem",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              iFathom
            </Typography>
          </Box>
          <IconButton onClick={toggleDrawer} sx={{ color: colors.darkText }} aria-label="close menu">
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
                    px: 3,
                    mx: 1.5,
                    my: 0.3,
                    borderRadius: "4px",
                    border: active ? "none" : "1px solid #b0b8c4",
                    backgroundColor: active ? colors.navy : "transparent",
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      sx: {
                        color: active ? "#ffffff" : colors.darkText,
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
    </AppBar>
  );
}
