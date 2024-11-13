import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from "@/components/NavLinks";
import YearlyStats from "@/container/Dashboard/YearlyStats";
import PaymentStats from "@/container/Dashboard/PaymentStats";
function Payments() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <PaymentStats />
      <YearlyStats />
    </MainLayout>
  );
}

export default Payments;
const navLinks = [{ label: "Foydalanuvchilar / To’lovlar", href: "/" }];
