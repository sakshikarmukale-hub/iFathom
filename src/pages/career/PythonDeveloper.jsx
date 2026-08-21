import React from "react";
import CareerDetails from "./CareerDetails";

export default function PythonDeveloper() {
  return (
    <CareerDetails
      title="Python Developer"
      type="Full-Time"
      experience="1-3 Years"
      jobDescription="We are looking for a talented and motivated Python Developer to join our dynamic team. The ideal candidate will be responsible for developing high-quality, efficient, and reusable code. You will work closely with front-end developers, build APIs, and automate processes"
      keyResponsibility={[
        "Develop clean, scalable Python applications.",
        "Collaborate with front-end developers for integration.",
        "Handle data manipulation and analysis using libraries like Pandas and Numpy.",
        "Design and implement RESTful APIs and integrate third-party APIs.",
        "Automate manual processes with custom scripts.",
        "Optimize performance of applications.",
        "Write and maintain unit tests to ensure code quality.",
        "Use version control tools (Git) for collaborative development.",
      ]}
      requiredSkills={[
        "Proficiency in Python programming.",
        "Strong knowledge of libraries such as Pandas, Numpy, and Flask/Django.",
        "Experience with API development and integration.",
        "Knowledge of data analysis techniques.",
        "Strong problem-solving and debugging skills.",
        "Familiarity with version control tools like Git.",
      ]}
      preferredQualifications={[
        "Experience with cloud platforms (AWS, GCP, etc.)",
        "Familiarity with Docker and containerization.",
      ]}
      nextRoute="/careers/javascript-developer"
      nextLabel="Next"
    />
  );
}
