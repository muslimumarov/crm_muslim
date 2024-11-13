import EmployeeStats from "@/container/Dashboard/EmployeeStats";
import PaymentStats from "@/container/Dashboard/PaymentStats";
import ProjectStats from "@/container/Dashboard/ProjectStats";
import YearlyStats from "@/container/Dashboard/YearlyStats";
import MainLayout from "@/layouts/MainLayout";
import React from "react";
import NavLinks from "@/components/NavLinks";

export default function Home() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <YearlyStats />
      <PaymentStats />
      <ProjectStats />
      <EmployeeStats />
    </MainLayout>
  );
}

const navLinks = [{ label: "Dashboard", href: "/" }];
