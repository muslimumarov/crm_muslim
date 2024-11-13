import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NavLinks from "@/components/NavLinks";
import ProjectsTaskList from "@/container/Projects/ProjectsTasksList";

function ProjectTasks() {
  return (
    <MainLayout>
      <NavLinks links={navLinks} />
      <ProjectsTaskList />
    </MainLayout>
  );
}

export default ProjectTasks;

const navLinks = [
  { label: "Foydalanuvchilar", href: "#" },
  { label: "Proyeklar", href: "/projects" },
];
