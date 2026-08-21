import React from "react";
import CareerDetails from "./CareerDetails";

export default function GoDeveloper() {
  return (
    <CareerDetails
      title="Go Developer"
      type="Full-Time"
      experience="1-3 Years"
      jobDescription="We are looking for a skilled Go Developer to help us build high-performance applications. As part of the team, you will be working on scalable solutions, microservices, and ensuring application efficiency using Go's concurrency and parallelism features."
      keyResponsibility={[
        "Design and develop high-performance backend services and microservices in Go.",
        "Leverage Go's native concurrency model (goroutines, channels) to build efficient systems.",
        "Build and document RESTful and gRPC APIs for internal and external consumers.",
        "Collaborate with infrastructure and DevOps teams on deployment and scaling strategies.",
        "Write comprehensive unit and integration tests to ensure service reliability.",
        "Profile and optimize services for latency, throughput, and memory usage.",
        "Participate in architecture reviews and contribute to technical decision-making.",
        "Ensure data integrity and security across service boundaries.",
      ]}
      requiredSkills={[
        "Strong understanding of Go idioms, standard library, and concurrency primitives.",
        "Experience building and consuming RESTful APIs or gRPC services.",
        "Proficiency with relational or NoSQL databases and optimized query writing.",
        "Familiarity with containerization using Docker and Kubernetes.",
        "Understanding of microservices architecture and distributed systems patterns.",
        "Solid grasp of networking fundamentals (HTTP, TCP/IP, TLS).",
        "Experience with Git and collaborative development workflows.",
      ]}
      preferredQualifications={[
        "Experience with service mesh technologies such as Istio or Linkerd.",
        "Familiarity with event-driven architectures using Kafka or NATS.",
        "Knowledge of cloud-native development on AWS, GCP, or Azure.",
        "Exposure to observability tools such as Prometheus and Grafana.",
      ]}
      prevRoute="/careers/java-developer"
      prevLabel="Previous"
      nextRoute="/careers/ios-swift"
      nextLabel="Next"
    />
  );
}
