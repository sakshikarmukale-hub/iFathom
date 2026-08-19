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
  Container,
  Popper,
  Paper,
  Grow,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import colors from "../assets/colors";

const LOGO_URL =
  "https://static.wixstatic.com/media/24a129_e45c9eb5c39a49a095a7de55e26f0490~mv2.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Services", to: "/services" },
      { label: "Facility Management Services", to: "/facility-management-services" },
      { label: "Network Integration Services", to: "/network-integration-services" },
    ],
  },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

function DesktopDropdown({ link, active }) {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const location = useLocation();

  const isChildActive = link.children?.some((c) => location.pathname === c.to);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      sx={{ position: "relative" }}
    >
      <Box
        ref={anchorRef}
        component={Link}
        to={link.to}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.3,
          color: active || isChildActive ? colors.accent : colors.white,
          textDecoration: "none",
          fontSize: "0.88rem",
          fontWeight: active || isChildActive ? 700 : 500,
          whiteSpace: "nowrap",
          borderBottom:
            active || isChildActive
              ? `2px solid ${colors.accent}`
              : "2px solid transparent",
          pb: 0.5,
          transition: "color 0.2s",
          "&:hover": { color: colors.accent },
        }}
      >
        {link.label}
        {open ? (
          <ExpandLessIcon sx={{ fontSize: "1rem" }} />
        ) : (
          <ExpandMoreIcon sx={{ fontSize: "1rem" }} />
        )}
      </Box>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        style={{ zIndex: 1300 }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={180}>
            <Paper
              elevation={8}
              sx={{
                mt: 0.5,
                minWidth: 230,
                borderRadius: "8px",
                overflow: "hidden",
                border: `1px solid ${colors.border}`,
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList disablePadding>
                  {link.children.map((child) => (
                    <MenuItem
                      key={child.to}
                      component={Link}
                      to={child.to}
                      onClick={handleClose}
                      sx={{
                        fontSize: "0.88rem",
                        fontWeight: location.pathname === child.to ? 700 : 500,
                        color:
                          location.pathname === child.to
                            ? colors.accent
                            : colors.darkText,
                        py: 1.3,
                        px: 2.5,
                        "&:hover": {
                          backgroundColor: colors.offWhite,
                          color: colors.accent,
                        },
                      }}
                    >
                      {child.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
    setServicesExpanded(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={2}
      sx={{
        backgroundColor: colors.navy,
        borderBottom: `1px solid ${colors.navyMid}`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 0.75,
            minHeight: { xs: 64, md: 70 },
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={LOGO_URL}
              alt="iFathom logo"
              sx={{
                width: { xs: 36, md: 40 },
                height: { xs: 36, md: 40 },
                objectFit: "contain",
              }}
            />
            <Typography
              sx={{
                color: colors.white,
                fontWeight: 800,
                fontSize: { xs: "1.2rem", md: "1.4rem" },
                letterSpacing: 0.3,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              iFathom
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: { lg: 2, xl: 3 },
            }}
          >
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              if (link.children) {
                return (
                  <DesktopDropdown key={link.to} link={link} active={active} />
                );
              }
              return (
                <Box
                  key={link.to}
                  component={Link}
                  to={link.to}
                  sx={{
                    color: active ? colors.accent : colors.white,
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    fontWeight: active ? 700 : 500,
                    whiteSpace: "nowrap",
                    borderBottom: active
                      ? `2px solid ${colors.accent}`
                      : "2px solid transparent",
                    pb: 0.5,
                    transition: "color 0.2s",
                    "&:hover": { color: colors.accent },
                  }}
                >
                  {link.label}
                </Box>
              );
            })}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            onClick={toggleDrawer}
            sx={{ display: { xs: "flex", lg: "none" }, color: colors.white }}
            aria-label="open menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: { xs: "82%", sm: "46%" },
            backgroundColor: colors.navyDark,
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
            py: 2,
            borderBottom: `1px solid ${colors.navyMid}`,
          }}
        >
          <Box
            component={Link}
            to="/"
            onClick={toggleDrawer}
            sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none" }}
          >
            <Box
              component="img"
              src={LOGO_URL}
              alt="iFathom"
              sx={{ width: 30, height: 30, objectFit: "contain" }}
            />
            <Typography sx={{ color: colors.white, fontWeight: 800, fontSize: "1.1rem" }}>
              iFathom
            </Typography>
          </Box>
          <IconButton onClick={toggleDrawer} sx={{ color: colors.white }} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ pt: 1 }}>
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            if (link.children) {
              const isChildActive = link.children.some(
                (c) => location.pathname === c.to
              );
              return (
                <React.Fragment key={link.to}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => setServicesExpanded((p) => !p)}
                      sx={{
                        py: 1.3,
                        px: 3,
                        borderLeft: isChildActive
                          ? `3px solid ${colors.accent}`
                          : "3px solid transparent",
                      }}
                    >
                      <ListItemText
                        primary={link.label}
                        primaryTypographyProps={{
                          sx: {
                            color: isChildActive ? colors.accent : colors.white,
                            fontWeight: isChildActive ? 700 : 500,
                            fontSize: "0.97rem",
                          },
                        }}
                      />
                      {servicesExpanded ? (
                        <ExpandLessIcon sx={{ color: colors.white, fontSize: "1.1rem" }} />
                      ) : (
                        <ExpandMoreIcon sx={{ color: colors.white, fontSize: "1.1rem" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={servicesExpanded} timeout="auto">
                    <List disablePadding>
                      {link.children.map((child) => (
                        <ListItem key={child.to} disablePadding>
                          <ListItemButton
                            component={Link}
                            to={child.to}
                            onClick={toggleDrawer}
                            sx={{
                              py: 1,
                              pl: 5,
                              pr: 3,
                              borderLeft:
                                location.pathname === child.to
                                  ? `3px solid ${colors.accent}`
                                  : "3px solid transparent",
                            }}
                          >
                            <ListItemText
                              primary={child.label}
                              primaryTypographyProps={{
                                sx: {
                                  color:
                                    location.pathname === child.to
                                      ? colors.accent
                                      : "rgba(255,255,255,0.75)",
                                  fontWeight:
                                    location.pathname === child.to ? 700 : 400,
                                  fontSize: "0.88rem",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              );
            }
            return (
              <ListItem key={link.to} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.to}
                  onClick={toggleDrawer}
                  sx={{
                    py: 1.3,
                    px: 3,
                    borderLeft: active
                      ? `3px solid ${colors.accent}`
                      : "3px solid transparent",
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      sx: {
                        color: active ? colors.accent : colors.white,
                        fontWeight: active ? 700 : 500,
                        fontSize: "0.97rem",
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
