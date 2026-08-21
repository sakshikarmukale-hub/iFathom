import React from "react";
import CareerDetails from "./CareerDetails";

export default function VerilogDeveloper() {
  return (
    <CareerDetails
      title="Verilog Developer"
      type="Full-Time"
      experience="1-3 Years"
      jobDescription="We are seeking an experienced Verilog Developer to join our hardware design team. The role involves designing, testing, and optimizing digital circuits for FPGA and ASIC implementations using Verilog."
      keyResponsibility={[
        "Design and implement digital logic circuits using Verilog HDL for FPGA and ASIC targets.",
        "Write synthesizable RTL code adhering to timing, area, and power constraints.",
        "Develop comprehensive testbenches and simulation environments to verify designs.",
        "Perform functional simulation, timing analysis, and post-synthesis verification.",
        "Collaborate with embedded software engineers to define hardware-software interfaces.",
        "Debug hardware issues using simulation waveforms and FPGA in-circuit debugging tools.",
        "Optimize existing designs for improved performance and reduced resource utilization.",
        "Maintain design documentation including specifications and verification plans.",
      ]}
      requiredSkills={[
        "Strong understanding of digital logic design fundamentals (combinational and sequential circuits).",
        "Proven experience targeting FPGAs from Xilinx (AMD) or Intel (Altera) platforms.",
        "Proficiency with HDL simulation tools such as ModelSim, QuestaSim, or Vivado Simulator.",
        "Knowledge of synthesis, place-and-route, and static timing analysis (STA) flows.",
        "Familiarity with standard bus interfaces such as AXI, APB, SPI, I2C, or UART.",
        "Experience writing self-checking testbenches and verifying RTL against specifications.",
        "Proficiency with Git and collaborative version control practices.",
      ]}
      preferredQualifications={[
        "Experience with SystemVerilog and UVM-based verification methodologies.",
        "Familiarity with ASIC design flows and standard cell libraries.",
        "Knowledge of high-level synthesis tools (Xilinx HLS, Catapult).",
        "Experience with formal verification tools (JasperGold, SymbiYosys).",
      ]}
      prevRoute="/careers/cpp-developer"
      prevLabel="Previous"
    />
  );
}
