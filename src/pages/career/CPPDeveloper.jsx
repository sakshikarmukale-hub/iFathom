import React from "react";
import CareerDetails from "./CareerDetails";

export default function CPPDeveloper() {
  return (
    <CareerDetails
      title="C++ Developer"
      type="Full-Time"
      experience="1-3 Years"
      jobDescription="We are seeking a C++ Developer to create high-performance applications and embedded systems. You will work with system-level programming, memory optimization, and multithreading to develop efficient solutions for complex challenges."
      keyResponsibility={[
        "Design and implement high-performance C++ applications, libraries, and system components.",
        "Write low-level, memory-efficient code with a strong focus on performance and safety.",
        "Develop multithreaded and concurrent systems using C++ standard threading primitives.",
        "Collaborate with hardware and firmware teams on embedded or near-hardware software.",
        "Profile applications and identify performance bottlenecks using appropriate tooling.",
        "Write and maintain unit tests and integration tests for C++ components.",
        "Review code for correctness, safety, and adherence to C++ best practices.",
        "Maintain and improve build systems using CMake, Makefiles, or similar tools.",
      ]}
      requiredSkills={[
        "Strong proficiency in modern C++ (C++11/14/17/20) including move semantics and the STL.",
        "Deep understanding of memory management, pointers, and RAII principles.",
        "Experience with multithreading, concurrency, and synchronization techniques.",
        "Familiarity with debugging tools such as GDB, Valgrind, or AddressSanitizer.",
        "Experience with build systems such as CMake or Bazel.",
        "Strong understanding of data structures, algorithms, and computational complexity.",
        "Ability to read and understand hardware documentation or low-level system specifications.",
      ]}
      preferredQualifications={[
        "Experience with embedded systems programming (bare-metal or RTOS).",
        "Familiarity with cross-compilation toolchains for ARM or RISC-V targets.",
        "Knowledge of inter-process communication mechanisms (sockets, shared memory).",
        "Exposure to GPU programming with CUDA or OpenCL.",
      ]}
      prevRoute="/careers/ios-swift"
      prevLabel="Previous"
      nextRoute="/careers/verilog-developer"
      nextLabel="Next"
    />
  );
}
