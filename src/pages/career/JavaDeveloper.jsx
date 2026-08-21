import React from "react";
import CareerDetails from "./CareerDetails";

export default function JavaDeveloper() {
  return (
    <CareerDetails
      title="Java Developer"
      type="Full-Time"
      experience="1-3 Years"
      jobDescription="We are seeking an experienced Java Developer to join our growing team. In this role, you will be responsible for developing robust and scalable Java applications, optimizing performance, and ensuring seamless integration with databases and APIs."
      keyResponsibility={[
        "Design and develop scalable Java applications and backend services.",
        "Build and expose RESTful or SOAP APIs for integration with front-end and third-party systems.",
        "Write high-quality, maintainable code following SOLID principles.",
        "Work with relational and NoSQL databases, write efficient SQL queries and ORM mappings.",
        "Perform code reviews and mentor junior developers on best practices.",
        "Diagnose and resolve performance bottlenecks and concurrency issues.",
        "Collaborate with cross-functional teams in an Agile environment.",
        "Ensure applications meet security, compliance, and reliability standards.",
      ]}
      requiredSkills={[
        "Strong command of Java 8+ including streams, lambdas, and concurrency.",
        "Experience with the Spring Framework (Spring Boot, Spring MVC, Spring Data).",
        "Solid knowledge of object-oriented design patterns and principles.",
        "Proficiency with relational databases (MySQL, PostgreSQL) and JDBC/JPA.",
        "Familiarity with build tools such as Maven or Gradle.",
        "Understanding of microservices architecture and RESTful API design.",
        "Experience with Git and collaborative version control workflows.",
      ]}
      preferredQualifications={[
        "Experience with message brokers such as Apache Kafka or RabbitMQ.",
        "Familiarity with containerization using Docker and Kubernetes.",
        "Knowledge of cloud platforms (AWS, GCP, or Azure).",
        "Experience with CI/CD pipelines using Jenkins or GitHub Actions.",
      ]}
      prevRoute="/careers/javascript-developer"
      prevLabel="Previous"
      nextRoute="/careers/go-developer"
      nextLabel="Next"
    />
  );
}
