# iFathom Group — React + MUI Clone

A recreation of https://www.ifathomgroup.com/ built with React (Vite) and Material UI, using inline `sx` styling only (no external CSS files).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── assets/            # shared color palette (colors.js) — no image binaries needed,
│                       original site images are referenced directly via their live URLs
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PageHeader.jsx
│   ├── InfoCard.jsx
│   └── SatisfactionGuarantee.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Products.jsx
│   ├── Services.jsx
│   ├── FacilityManagementServices.jsx
│   ├── NetworkIntegrationServices.jsx
│   ├── Careers.jsx
│   └── Contact.jsx
├── Routes/
│   └── AppRoutes.jsx
├── App.jsx
└── main.jsx
```

## Notes

- Images are pulled directly from the original site's Wix media CDN
  (`static.wixstatic.com`) so the visuals match the source site exactly —
  no placeholder/replacement images were created.
- Routing is handled with `react-router-dom`; the Navbar mobile menu uses a
  MUI `Drawer` triggered by `MenuIcon` / `CloseIcon`.
- All styling is done via MUI's `sx` prop — there are no separate `.css`
  files in the project.
