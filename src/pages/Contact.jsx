import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Snackbar,
  Alert,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import colors from "../assets/colors";
import socialLinkedin from "../assets/social-linkedin.png";
import socialFacebook from "../assets/social-facebook.png";
import socialInstagram from "../assets/social-instagram.png";

const socials = [
  {
    name: "LinkedIn",
    icon: socialLinkedin,
    href: "https://www.linkedin.com/company/ifathom",
  },
  {
    name: "Facebook",
    icon: socialFacebook,
    href: "https://www.facebook.com/ifathom",
  },
  {
    name: "Instagram",
    icon: socialInstagram,
    href: "#",
  },
];

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: colors.offWhite,
    "& fieldset": { borderColor: colors.border },
    "&:hover fieldset": { borderColor: colors.navy },
    "&.Mui-focused fieldset": { borderColor: colors.accent },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: colors.accent },
};

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <Box>
      {/* ── Page Header ── */}
      <Box
        sx={{
          backgroundColor: colors.offWhite,
          borderBottom: `1px solid ${colors.border}`,
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: colors.accent,
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: 2,
              mb: 1.5,
              textTransform: "uppercase",
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            sx={{
              color: colors.navy,
              fontWeight: 800,
              fontSize: { xs: "1.9rem", md: "2.6rem" },
              mb: 2,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Contact
          </Typography>
          <Typography
            sx={{
              color: colors.grayText,
              fontSize: { xs: "0.97rem", md: "1.05rem" },
              maxWidth: 700,
              lineHeight: 1.8,
            }}
          >
            Welcome to iFathom. With a presence in Mumbai (HO), Malaysia, and
            Thailand, we offer 24/7 support services. For inquiries, please
            contact using the information below. We are here to assist you.
          </Typography>
        </Container>
      </Box>

      {/* ── Main Content ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {/* Left — Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                color: colors.navy,
                fontWeight: 800,
                fontSize: "1.3rem",
                mb: 3.5,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Let's Chat
            </Typography>

            <Stack spacing={3.5}>
              {/* Email */}
              <Box>
                <Typography
                  sx={{
                    color: colors.grayText,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    mb: 0.75,
                    fontWeight: 600,
                  }}
                >
                  Email
                </Typography>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      backgroundColor: colors.offWhite,
                      borderRadius: "8px",
                      p: 1,
                      display: "flex",
                    }}
                  >
                    <EmailIcon sx={{ color: colors.accent, fontSize: "1.2rem" }} />
                  </Box>
                  <Box
                    component="a"
                    href="mailto:info@ifathomgroup.com"
                    sx={{
                      color: colors.navy,
                      fontWeight: 600,
                      fontSize: "0.93rem",
                      textDecoration: "none",
                      "&:hover": { color: colors.accent },
                    }}
                  >
                    info@ifathomgroup.com
                  </Box>
                </Stack>
              </Box>

              <Divider sx={{ borderColor: colors.border }} />

              {/* Phone */}
              <Box>
                <Typography
                  sx={{
                    color: colors.grayText,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    mb: 0.75,
                    fontWeight: 600,
                  }}
                >
                  Contact Number
                </Typography>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      backgroundColor: colors.offWhite,
                      borderRadius: "8px",
                      p: 1,
                      display: "flex",
                    }}
                  >
                    <PhoneIcon sx={{ color: colors.accent, fontSize: "1.2rem" }} />
                  </Box>
                  <Box
                    component="a"
                    href="tel:+919820663764"
                    sx={{
                      color: colors.navy,
                      fontWeight: 600,
                      fontSize: "0.93rem",
                      textDecoration: "none",
                      "&:hover": { color: colors.accent },
                    }}
                  >
                    +91 9820663764
                  </Box>
                </Stack>
              </Box>

              <Divider sx={{ borderColor: colors.border }} />

              {/* Address */}
              <Box>
                <Typography
                  sx={{
                    color: colors.grayText,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    mb: 0.75,
                    fontWeight: 600,
                  }}
                >
                  Head Office
                </Typography>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <Box
                    sx={{
                      backgroundColor: colors.offWhite,
                      borderRadius: "8px",
                      p: 1,
                      display: "flex",
                      flexShrink: 0,
                      mt: 0.25,
                    }}
                  >
                    <LocationOnIcon sx={{ color: colors.accent, fontSize: "1.2rem" }} />
                  </Box>
                  <Typography
                    sx={{
                      color: colors.grayText,
                      fontSize: "0.88rem",
                      lineHeight: 1.75,
                    }}
                  >
                    6 & 7, Ground Floor, 23, Motilal Kanji Building,
                    Navroji Sheth Street, Thakurdwar, Charni Road (East),
                    Mumbai - 400002
                  </Typography>
                </Stack>
              </Box>

              <Divider sx={{ borderColor: colors.border }} />

              {/* Socials */}
              <Box>
                <Typography
                  sx={{
                    color: colors.grayText,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    mb: 1.25,
                    fontWeight: 600,
                  }}
                >
                  Social Media
                </Typography>
                <Stack direction="row" spacing={1.5}>
                  {socials.map((s) => (
                    <IconButton
                      key={s.name}
                      component="a"
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.name}
                      sx={{
                        border: `1px solid ${colors.border}`,
                        backgroundColor: colors.white,
                        width: 40,
                        height: 40,
                        "&:hover": {
                          borderColor: colors.accent,
                          backgroundColor: colors.offWhite,
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={s.icon}
                        alt={s.name}
                        sx={{ width: 18, height: 18, objectFit: "contain" }}
                      />
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Grid>

          {/* Right — Contact Form */}
          <Grid item xs={12} md={8}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                border: `1px solid ${colors.border}`,
                borderRadius: "16px",
                p: { xs: 3, md: 5 },
                backgroundColor: colors.white,
              }}
            >
              <Typography
                sx={{
                  color: colors.navy,
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  mb: 3,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Send Us a Message
              </Typography>

              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    fullWidth
                    required
                    value={form.firstName}
                    onChange={handleChange("firstName")}
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    fullWidth
                    required
                    value={form.lastName}
                    onChange={handleChange("lastName")}
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    type="tel"
                    fullWidth
                    value={form.phone}
                    onChange={handleChange("phone")}
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    fullWidth
                    required
                    multiline
                    rows={5}
                    value={form.message}
                    onChange={handleChange("message")}
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      backgroundColor: colors.accent,
                      color: colors.white,
                      fontWeight: 700,
                      px: 5,
                      py: 1.4,
                      borderRadius: "8px",
                      textTransform: "none",
                      fontSize: "1rem",
                      boxShadow: "0 4px 16px rgba(232,129,58,0.35)",
                      "&:hover": {
                        backgroundColor: colors.accentDark,
                        boxShadow: "0 6px 20px rgba(232,129,58,0.45)",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ── Map / Locations strip ── */}
      <Box sx={{ backgroundColor: colors.offWhite, py: { xs: 6, md: 8 }, borderTop: `1px solid ${colors.border}` }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: colors.navy,
              fontWeight: 800,
              fontSize: { xs: "1.3rem", md: "1.6rem" },
              mb: 4,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Our Offices
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                country: "🇮🇳 India (Head Office)",
                address:
                  "6 & 7, Ground Floor, 23, Motilal Kanji Building, Navroji Sheth Street, Thakurdwar, Charni Road (East), Mumbai - 400002",
                email: "info@ifathomgroup.com",
              },
              {
                country: "🇲🇾 Malaysia",
                address:
                  "Level 12, Sunway V2 Tower, No. 158, Jalan Peel, Maluri, 55100 Kuala Lumpur",
                email: "info.my@adaitech.com",
              },
              {
                country: "🇹🇭 Thailand",
                address:
                  "RASA TWO, Office No: 1815, 1818 Phetchaburi Rd, Makkasan, Ratchathewi, Bangkok 10400",
                email: "info.th@adaitech.com",
              },
            ].map((office) => (
              <Grid item xs={12} sm={6} md={4} key={office.country}>
                <Box
                  sx={{
                    border: `1px solid ${colors.border}`,
                    borderRadius: "12px",
                    p: 3,
                    backgroundColor: colors.white,
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: colors.navy,
                      fontWeight: 700,
                      fontSize: "1rem",
                      mb: 1.5,
                    }}
                  >
                    {office.country}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.grayText,
                      fontSize: "0.88rem",
                      lineHeight: 1.75,
                      mb: 1.5,
                    }}
                  >
                    {office.address}
                  </Typography>
                  <Box
                    component="a"
                    href={`mailto:${office.email}`}
                    sx={{
                      color: colors.accent,
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {office.email}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Snackbar
        open={submitted}
        autoHideDuration={4500}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSubmitted(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%", borderRadius: "8px" }}
        >
          Thanks for reaching out! We'll get back to you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
}
