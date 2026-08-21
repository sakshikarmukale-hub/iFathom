// import React from "react";
// import { Box, Card, CardContent, Typography } from "@mui/material";
// import colors from "../assets/colors";

// export default function InfoCard({ image, title, description, imageContain, icon }) {
//   return (
//     <Card
//       elevation={0}
//       sx={{
//         height: "100%",
//         border: `1px solid ${colors.border}`,
//         borderRadius: "12px",
//         overflow: "hidden",
//         backgroundColor: colors.cardBg,
//         transition: "box-shadow 0.25s ease, transform 0.25s ease",
//         "&:hover": {
//           boxShadow: "0 10px 30px rgba(10,31,61,0.1)",
//           transform: "translateY(-4px)",
//         },
//       }}
//     >
//       {image && (
//         <Box
//           sx={{
//             backgroundColor: imageContain ? colors.offWhite : "transparent",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             height: imageContain ? 160 : 190,
//             overflow: "hidden",
//             p: imageContain ? 3 : 0,
//           }}
//         >
//           <Box
//             component="img"
//             src={image}
//             alt={title}
//             sx={{
//               width: "100%",
//               height: "100%",
//               objectFit: imageContain ? "contain" : "cover",
//             }}
//           />
//         </Box>
//       )}
//       {icon && (
//         <Box
//           sx={{
//             backgroundColor: colors.offWhite,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             height: 100,
//             p: 2,
//           }}
//         >
//           {icon}
//         </Box>
//       )}
//       <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
//         <Typography
//           sx={{
//             color: colors.navy,
//             fontWeight: 700,
//             fontSize: { xs: "0.97rem", md: "1.05rem" },
//             mb: description ? 1 : 0,
//             lineHeight: 1.4,
//             fontFamily: "'Poppins', sans-serif",
//           }}
//         >
//           {title}
//         </Typography>
//         {description && (
//           <Typography
//             sx={{
//               color: colors.grayText,
//               fontSize: "0.88rem",
//               lineHeight: 1.7,
//             }}
//           >
//             {description}
//           </Typography>
//         )}
//       </CardContent>
//     </Card>
//   );
// }
