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
} from "@mui/material";

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

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#14283A",
        color: "#fff",
        py: { xs: 6, md: 7 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: "760px",
          mx: "auto",
          px: { xs: 3, sm: 4, md: 0 },
        }}
      >
        {/* ================= HEADER ================= */}

        <Box
          sx={{
            textAlign: "center",
            pt: { xs: 2, md: 4 },
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontFamily: "anton, sans-serif",
              fontWeight: 800,
              transform: "scaleY(1.5)",
              fontSize: {
                xs: "2.2rem",
                sm: "2.7rem",
                md: "3rem",
              },
              lineHeight: 1,
              mb: 2.5,
            }}
          >
            Contact
          </Typography>

          <Typography
            sx={{
              color: "#f1f1f1",
              fontFamily: "open sans, sans-serif",
              fontSize: {
                xs: "0.82rem",
                sm: "0.88rem",
                md: "1rem",
              },
              lineHeight: 1.7,
              maxWidth: "650px",
              mx: "auto",
            }}
          >
            Welcome to iFathom. With a presence in Mumbai (HO), Malaysia, and
            Thailand, we offer 24/7 support services. For inquiries, please
            contact using the information below. We are here to assist you.
          </Typography>
        </Box>

        {/* ================= DIVIDER ================= */}

        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.22)",
            mt: { xs: 4, md: 5 },
            mb: { xs: 4, md: 4.5 },
          }}
        />

        {/* ================= LET'S CHAT ================= */}

        <Typography
          sx={{
            textAlign: "center",
            color: "#ffffff",
            fontFamily:
              "anton, sans-serif",
            fontWeight: 900,
            fontSize: {
              xs: "1.7rem",
              md: "2rem",
            },
            lineHeight: 1,
            mb: 2.8,
            transform: "scaleY(1.5)",
          }}
        >
          Let's Chat
        </Typography>

        {/* ================= CONTACT DETAILS ================= */}

        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{
            mb: { xs: 4, md: 4.5 },
            py:3,
          }}
        >
          {/* EMAIL */}

          <Grid item xs={12} sm={4}>
            <Typography
              sx={{
                color: "#ffffff",
                fontFamily:
                  "'Roboto Condensed', 'Arial Narrow', Arial, sans-serif",
                fontWeight: 900,
                fontSize: "1rem",
                mb: 1,
              }}
            >
              Email
            </Typography>

            <Typography
              component="a"
              href="mailto:info@ifathomgroup.com"
              sx={{
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "0.90rem",
              }}
            >
              info@ifathomgroup.com
            </Typography>
          </Grid>

          {/* CONTACT NUMBER */}

          <Grid item xs={12} sm={4}>
            <Typography
              sx={{
                color: "#ffffff",
                fontFamily:
                  "'Roboto Condensed', 'Arial Narrow', Arial, sans-serif",
                fontWeight: 900,
                fontSize: "1rem",
                mb: 1,
              }}
            >
              Contact Number
            </Typography>

            <Typography
              component="a"
              href="tel:+919820663764"
              sx={{
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "0.90rem",
              }}
            >
              +91 9820663764
            </Typography>
          </Grid>

          {/* SOCIAL MEDIA */}

          <Grid item xs={12} sm={4}>
            <Typography
              sx={{
                color: "#ffffff",
                fontFamily:
                  "'Roboto Condensed', 'Arial Narrow', Arial, sans-serif",
                fontWeight: 900,
                fontSize: "1rem",
                mb: 0.8,
              }}
            >
              Social Media
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              {socials.map((social) => (
                <IconButton
                  key={social.name}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  sx={{
                    padding: 0,
                    width: 20,
                    height: 20,
                    "&:hover": {
                      backgroundColor: "transparent",
                      opacity: 0.75,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={social.icon}
                    alt={social.name}
                    sx={{
                      width: 17,
                      height: 17,
                      objectFit: "contain",
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* ================= CONTACT FORM ================= */}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
          }}
        >
          {/* FIRST NAME / LAST NAME / EMAIL */}

          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
          >
            <Grid item xs={12} sm={4}>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontFamily: "Arial, sans-serif",
                  mb: 0.6,
                }}
              >
                First Name *
              </Typography>

              <TextField
                fullWidth
                required
                value={form.firstName}
                onChange={handleChange("firstName")}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "31px",
                    borderRadius: 0,
                    backgroundColor: "#ffffff",
                    padding: 0,

                    "& fieldset": {
                      border: "1px solid #b9a47a",
                    },

                    "&:hover fieldset": {
                      border: "1px solid #b9a47a",
                    },

                    "&.Mui-focused fieldset": {
                      border: "1px solid #b9a47a",
                    },
                  },

                  "& .MuiInputBase-input": {
                    color: "#14283A",
                    fontSize: "0.8rem",
                    padding: "5px 8px",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontFamily: "Arial, sans-serif",
                  mb: 0.6,
                }}
              >
                Last Name
              </Typography>

              <TextField
                fullWidth
                value={form.lastName}
                onChange={handleChange("lastName")}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "31px",
                    borderRadius: 0,
                    backgroundColor: "#ffffff",
                    padding: 0,

                    "& fieldset": {
                      border: "1px solid #b9a47a",
                    },

                    "&:hover fieldset": {
                      border: "1px solid #b9a47a",
                    },

                    "&.Mui-focused fieldset": {
                      border: "1px solid #b9a47a",
                    },
                  },

                  "& .MuiInputBase-input": {
                    color: "#14283A",
                    fontSize: "0.8rem",
                    padding: "5px 8px",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontFamily: "Arial, sans-serif",
                  mb: 0.6,
                }}
              >
                Email *
              </Typography>

              <TextField
                fullWidth
                required
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "31px",
                    borderRadius: 0,
                    backgroundColor: "#ffffff",
                    padding: 0,

                    "& fieldset": {
                      border: "1px solid #b9a47a",
                    },

                    "&:hover fieldset": {
                      border: "1px solid #b9a47a",
                    },

                    "&.Mui-focused fieldset": {
                      border: "1px solid #b9a47a",
                    },
                  },

                  "& .MuiInputBase-input": {
                    color: "#14283A",
                    fontSize: "0.8rem",
                    padding: "5px 8px",
                  },
                }}
              />
            </Grid>
          </Grid>

          {/* MESSAGE */}

          <Box sx={{ mt: 1.1 }}>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "0.72rem",
                fontFamily: "Arial, sans-serif",
                mb: 0.6,
              }}
            >
              Message *
            </Typography>

            <TextField
              fullWidth
              required
              multiline
              rows={3}
              value={form.message}
              onChange={handleChange("message")}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  backgroundColor: "#ffffff",
                  padding: 0,

                  "& fieldset": {
                    border: "1px solid #b9a47a",
                  },

                  "&:hover fieldset": {
                    border: "1px solid #b9a47a",
                  },

                  "&.Mui-focused fieldset": {
                    border: "1px solid #b9a47a",
                  },
                },

                "& .MuiInputBase-input": {
                  color: "#14283A",
                  fontSize: "0.8rem",
                  padding: "6px 8px",
                },
              }}
            />
          </Box>

          {/* SEND BUTTON */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 1.1,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{
                width: {
                  xs: "100%",
                  sm: "205px",
                },
                height: "30px",
                backgroundColor: "#ffffff",
                color: "#14283A",
                borderRadius: 0,
                textTransform: "none",
                fontFamily:
                  "'Roboto Condensed', 'Arial Narrow', Arial, sans-serif",
                fontWeight: 900,
                fontSize: "0.9rem",

                "&:hover": {
                  backgroundColor: "#3a3f47",
                  color: "#ffffff",
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>

      {/* ================= SUCCESS MESSAGE ================= */}

      <Snackbar
        open={submitted}
        autoHideDuration={4500}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={() => setSubmitted(false)}
          severity="success"
          variant="filled"
          sx={{
            width: "100%",
            borderRadius: "4px",
          }}
        >
          Thanks for reaching out! We'll get back to you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
}