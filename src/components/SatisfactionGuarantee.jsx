import React from "react";
import { Box, Container, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import colors from "../assets/colors";

export default function SatisfactionGuarantee() {
  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${colors.navyDark} 0%, #0F2847 100%)`,
        py: { xs: 7, md: 9 },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2.5,
          }}
        >
          <VerifiedIcon
            sx={{ color: colors.accent, fontSize: { xs: "2.5rem", md: "3rem" } }}
          />
        </Box>
        <Typography
          align="center"
          sx={{
            color: colors.white,
            fontWeight: 800,
            fontSize: { xs: "1.4rem", md: "1.8rem" },
            mb: 2,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Satisfaction Guarantee
        </Typography>
        <Typography
          align="center"
          sx={{
            color: "rgba(255,255,255,0.72)",
            fontSize: { xs: "0.96rem", md: "1.05rem" },
            lineHeight: 1.85,
            maxWidth: 640,
            mx: "auto",
          }}
        >
          iFathom guarantees reliable, high-quality IT solutions tailored to
          your business needs, ensuring satisfaction through expert service
          and support.
        </Typography>
      </Container>
    </Box>
  );
}
