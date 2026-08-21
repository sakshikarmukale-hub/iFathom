import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Container, Typography, Button, Divider } from "@mui/material";
import colors from "../../assets/colors";

/**
 * CareerDetails — shared job-detail layout matching the iFathom website design.
 *
 * Props:
 *   title               {string}    — Job title
 *   type                {string}    — Employment type, e.g. "Full-Time"
 *   experience          {string}    — e.g. "1-3 Years"
 *   jobDescription      {string}    — Paragraph description
 *   keyResponsibility   {string[]}  — Dot-prefixed list
 *   requiredSkills      {string[]}  — Dot-prefixed list
 *   preferredQualifications {string[]} — Dot-prefixed list (optional)
 *   prevRoute           {string}    — Route for "Previous" link (optional)
 *   nextRoute           {string}    — Route for "Next" link (optional)
 *   prevLabel           {string}    — Label for prev link (optional)
 *   nextLabel           {string}    — Label for next link (optional)
 */
export default function CareerDetails({
  title,
  type = "Full-Time",
  experience = "1-3 Years",
  jobDescription = "",
  keyResponsibility = [],
  requiredSkills = [],
  preferredQualifications = [],
  prevRoute = "",
  nextRoute = "",
  prevLabel = "Previous",
  nextLabel = "Next",
}) {
  const navigate = useNavigate();

  // Row renderer: left label + colon + right content
  const Row = ({ label, children, alignTop = false }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 0.5, sm: 0 },
        mb: 3,
      }}
    >
      {/* Label */}
      <Box
        sx={{
          width: { xs: "100%", sm: 170 },
          minWidth: { sm: 170 },
          textAlign: { xs: "left", sm: "right" },
          pr: { sm: 1.5 },
          pt: alignTop ? "2px" : 0,
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "0.88rem",
            color: colors.darkText,
            lineHeight: 1.6,
          }}
        >
          {label}
        </Typography>
      </Box>

      {/* Colon */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: alignTop ? "flex-start" : "center",
          px: 1.5,
          pt: alignTop ? "2px" : 0,
          flexShrink: 0,
        }}
      >
        <Typography sx={{ color: colors.darkText, fontSize: "0.88rem", lineHeight: 1.6 }}>
          :
        </Typography>
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1 }}>{children}</Box>
    </Box>
  );

  // Dot-prefixed bullet line
  const DotItem = ({ text }) => (
    <Typography
      sx={{
        fontSize: "0.87rem",
        color: "#444",
        lineHeight: 1.75,
        display: "block",
      }}
    >
      · {text}
    </Typography>
  );

  return (
    <Box sx={{ backgroundColor: colors.white, minHeight: "100vh" }}>
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 5 }, mt: 5 }}>

        {/* ── < Back ── */}
        <Button
          component={Link}
          to="/careers"
          sx={{
            color: colors.grayText,
            fontWeight: 400,
            fontSize: "0.88rem",
            textTransform: "none",
            px: 0,
            mb: 2.5,
            minWidth: 0,
            "&:hover": { backgroundColor: "transparent", color: colors.accent },
          }}
        >
          &lt; Back
        </Button>

        {/* ── "Job Details" heading + divider ── */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.1rem", md: "1.25rem" },
            color: colors.darkText,
            mb: 1,
            fontFamily: "sans-serif",
          }}
        >
          Job Details
        </Typography>
        <Divider sx={{ borderColor: "#c8c8c8", mb: 3.5 }} />

        {/* ── Title row: big title left + Type/Location right ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "flex-start" },
            gap: 2,
            mb: 3.5,
          }}
        >
          {/* Job title */}
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
              color: colors.darkText,
              lineHeight: 1.1,
              fontFamily: "Georgia, serif",
              letterSpacing: "-0.5px",
            }}
          >
            {title}
          </Typography>

          {/* Type + Location block */}
          <Box sx={{ flexShrink: 0, minWidth: 160, textAlign: { xs: "left", sm: "right" } }}>
            {/* Type row */}
            <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", sm: "flex-end" }, alignItems: "baseline", gap: 0.75, mb: 0.5 }}>
              <Typography sx={{ fontSize: "0.82rem", color: colors.grayText, fontWeight: 600 }}>
                Type :
              </Typography>
              <Typography sx={{ fontSize: "0.82rem", color: colors.accent, fontWeight: 600 }}>
                {type}
              </Typography>
            </Box>

            {/* Location row */}
            <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", sm: "flex-end" }, alignItems: "flex-start", gap: 0.75 }}>
              <Typography sx={{ fontSize: "0.82rem", color: colors.grayText, fontWeight: 600, mt: "1px" }}>
                Location :
              </Typography>
              <Box>
                <Typography sx={{ fontSize: "0.82rem", color: "#1565C0", fontWeight: 500, lineHeight: 1.7 }}>
                  🇲🇾 Malaysia
                </Typography>
                <Typography sx={{ fontSize: "0.82rem", color: "#1565C0", fontWeight: 500, lineHeight: 1.7 }}>
                  🇹🇭 Thailand
                </Typography>
                <Typography sx={{ fontSize: "0.82rem", color: "#1565C0", fontWeight: 500, lineHeight: 1.7 }}>
                  🇮🇳 India
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#e8e8e8", mb: 3.5 }} />

        {/* ── Experience ── */}
        <Row label="Experience">
          <Typography sx={{ fontSize: "0.88rem", color: "#444", lineHeight: 1.6 }}>
            {experience}
          </Typography>
        </Row>

        {/* ── Job Description ── */}
        {jobDescription && (
          <Row label="Job Description" alignTop>
            <Typography sx={{ fontSize: "0.87rem", color: "#444", lineHeight: 1.75 }}>
              {jobDescription}
            </Typography>
          </Row>
        )}

        {/* ── Key Responsibility ── */}
        {keyResponsibility.length > 0 && (
          <Row label="Key Responsibility" alignTop>
            <Box>
              {keyResponsibility.map((item, i) => (
                <DotItem key={i} text={item} />
              ))}
            </Box>
          </Row>
        )}

        {/* ── Required Skills ── */}
        {requiredSkills.length > 0 && (
          <Row label="Required Skills" alignTop>
            <Box>
              {requiredSkills.map((item, i) => (
                <DotItem key={i} text={item} />
              ))}
            </Box>
          </Row>
        )}

        {/* ── Preferred Qualifications ── */}
        {preferredQualifications.length > 0 && (
          <Row label="Preferred Qualifications" alignTop>
            <Box>
              {preferredQualifications.map((item, i) => (
                <DotItem key={i} text={item} />
              ))}
            </Box>
          </Row>
        )}

        {/* ── Apply Now button ── */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, mb: 4 }}>
          <Button
            href="https://wa.me/919820663764"
            target="_blank"
            rel="noreferrer"
            variant="contained"
            sx={{
              backgroundColor: colors.accent,
              color: colors.white,
              fontWeight: 700,
              fontSize: "0.92rem",
              px: 4,
              py: 1.1,
              borderRadius: "6px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": { backgroundColor: colors.accentDark, boxShadow: "none" },
            }}
          >
            Apply Now
          </Button>
        </Box>

        <Divider sx={{ borderColor: "#e8e8e8", mb: 2.5 }} />

        {/* ── Previous / Next ── */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {prevRoute ? (
            <Button
              component={Link}
              to={prevRoute}
              sx={{
                color: colors.accent,
                fontWeight: 500,
                fontSize: "0.88rem",
                textTransform: "none",
                px: 0,
                "&:hover": { backgroundColor: "transparent", color: colors.accentDark },
              }}
            >
              {prevLabel}
            </Button>
          ) : (
            <Box />
          )}

          {nextRoute ? (
            <Button
              component={Link}
              to={nextRoute}
              sx={{
                color: colors.accent,
                fontWeight: 500,
                fontSize: "0.88rem",
                textTransform: "none",
                px: 0,
                "&:hover": { backgroundColor: "transparent", color: colors.accentDark },
              }}
            >
              {nextLabel}
            </Button>
          ) : (
            <Box />
          )}
        </Box>

      </Container>
    </Box>
  );
}
