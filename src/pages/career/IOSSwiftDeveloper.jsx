import React from "react";
import CareerDetails from "./CareerDetails";

export default function IOSSwiftDeveloper() {
  return (
    <CareerDetails
      title="iOS Swift Developer"
      type="Full-Time"
      experience="1-3 Years"
      jobDescription="We are looking for a passionate iOS Swift Developer to join our team. The ideal candidate will be responsible for developing innovative, high-quality iOS applications that provide excellent user experiences."
      keyResponsibility={[
        "Design and develop high-quality iOS applications using Swift and SwiftUI/UIKit.",
        "Translate UI/UX designs into responsive, pixel-perfect iOS interfaces.",
        "Integrate mobile apps with backend REST APIs and third-party SDKs.",
        "Optimize application performance, memory footprint, and battery consumption.",
        "Implement local data persistence using Core Data, Realm, or SQLite.",
        "Ensure apps meet Apple App Store guidelines and pass submission reviews.",
        "Collaborate with QA engineers to identify, reproduce, and fix bugs.",
        "Participate in code reviews and contribute to a culture of technical excellence.",
      ]}
      requiredSkills={[
        "Strong proficiency in Swift and familiarity with Objective-C.",
        "Experience with both SwiftUI and UIKit for building user interfaces.",
        "Solid understanding of iOS frameworks: Foundation, UIKit, CoreData, CoreLocation.",
        "Experience integrating RESTful APIs and handling JSON serialization.",
        "Familiarity with Apple's Human Interface Guidelines and accessibility standards.",
        "Understanding of MVC, MVVM, or VIPER architectural patterns.",
        "Experience publishing apps to the Apple App Store.",
      ]}
      preferredQualifications={[
        "Experience with Combine or RxSwift for reactive programming.",
        "Knowledge of In-App Purchase, StoreKit, or Apple Pay integration.",
        "Exposure to ARKit, CoreML, or Vision framework.",
        "Familiarity with continuous delivery pipelines using Fastlane or Xcode Cloud.",
      ]}
      prevRoute="/careers/go-developer"
      prevLabel="Previous"
      nextRoute="/careers/cpp-developer"
      nextLabel="Next"
    />
  );
}
