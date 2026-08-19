import React from "react";
import { Box, Container, Typography } from "@mui/material";
import colors from "../assets/colors";

export default function PageHeader({ eyebrow, title, description, imageSrc, dark }) {
  if (dark) {
    return (
      <Box
        sx={{
          backgroundColor: colors.navy,
          backgroundImage: `linear-gradient(135deg, ${colors.navyDark} 0%, #0F2847 100%)`,
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          {eyebrow && (
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
              {eyebrow}
            </Typography>
          )}
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.8rem" },
              mb: description ? 2 : 0,
              lineHeight: 1.2,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              sx={{
                color: "rgba(255,255,255,0.72)",
                fontSize: { xs: "0.97rem", md: "1.05rem" },
                maxWidth: 760,
                lineHeight: 1.8,
              }}
            >
              {description}
            </Typography>
          )}
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: colors.offWhite,
        borderBottom: `1px solid ${colors.border}`,
        py: { xs: 5.5, md: 7.5 },
      }}
    >
      <Container maxWidth="lg">
        {imageSrc && (
          <Box
            component="img"
            src={imageSrc}
            alt={title}
            sx={{
              width: { xs: 80, md: 100 },
              height: { xs: 80, md: 100 },
              borderRadius: "10px",
              mb: 3,
              objectFit: "cover",
              boxShadow: "0 4px 16px rgba(10,31,61,0.1)",
            }}
          />
        )}
        {eyebrow && (
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
            {eyebrow}
          </Typography>
        )}
        <Typography
          sx={{
            color: colors.navy,
            fontWeight: 800,
            fontSize: { xs: "1.75rem", md: "2.4rem" },
            mb: description ? 2 : 0,
            lineHeight: 1.2,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            sx={{
              color: colors.grayText,
              fontSize: { xs: "0.96rem", md: "1.05rem" },
              maxWidth: 820,
              lineHeight: 1.8,
            }}
          >
            {description}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
