import React from "react";
import CareerDetails from "./CareerDetails";

export default function JavaScriptDeveloper() {
  return (
    <CareerDetails
      title="JavaScript Developer"
      type="Full-Time"
      experience="1-3 Years"
      jobDescription="Join our team as a JavaScript Developer and contribute to creating highly interactive and dynamic web applications. You will work on both the front-end and back-end, using frameworks like React, Angular, and Node.js to build scalable applications."
      keyResponsibility={[
        "Build responsive, high-performance web UIs using React or Angular.",
        "Develop server-side logic and REST APIs using Node.js and Express.",
        "Collaborate with UI/UX designers to translate designs into functional interfaces.",
        "Integrate front-end components with backend services and third-party APIs.",
        "Write unit and integration tests to ensure code quality and stability.",
        "Optimize applications for speed, scalability, and cross-browser compatibility.",
        "Participate in code reviews and maintain high coding standards.",
        "Debug and resolve front-end and back-end issues across environments.",
      ]}
      requiredSkills={[
        "Strong proficiency in modern JavaScript (ES6+) and TypeScript.",
        "Experience with React.js or Angular for front-end development.",
        "Familiarity with Node.js and backend JavaScript development.",
        "Solid understanding of HTML5, CSS3, and responsive design.",
        "Experience with RESTful API design and consumption.",
        "Proficiency with Git and collaborative development workflows.",
        "Understanding of browser rendering and performance optimization.",
      ]}
      preferredQualifications={[
        "Experience with state management libraries such as Redux or Zustand.",
        "Familiarity with Next.js or other SSR/SSG frameworks.",
        "Knowledge of GraphQL and Apollo Client.",
        "Exposure to testing frameworks like Jest or Cypress.",
      ]}
      prevRoute="/careers/python-developer"
      prevLabel="Previous"
      nextRoute="/careers/java-developer"
      nextLabel="Next"
    />
  );
}
