"use client";

import Link from "next/link";
import React from "react";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import ThreePOutlinedIcon from "@mui/icons-material/ThreePOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    href: "/",
    title: "Dashboard",
    icon: <SpaceDashboardOutlinedIcon />,
  },
  {
    href: "/tasks",
    title: "Tasks",
    icon: <TaskAltIcon />,
  },
  {
    href: "/messages",
    title: "Massages",
    icon: <ForumOutlinedIcon />,
  },
  {
    href: "/calendar",
    title: "Calendar",
    icon: <EventOutlinedIcon />,
  },
  {
    href: "/filemanager",
    title: "File Manager",
    icon: <TopicOutlinedIcon />,
  },
  {
    href: "/requests",
    title: "Requests",
    icon: <ThreePOutlinedIcon />,
  },
  {
    href: "/mycontacts",
    title: "My Contacts",
    icon: <PeopleOutlineOutlinedIcon />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div
      className="py-2"
      style={{ borderRight: "1px solid #EDEDED", paddingRight: "1rem" }}
    >
      <aside className="w-full md:w-60">
        <nav>
          <ul>
            {menuItems.map(({ href, title, icon }) => (
              <Link key={title} href={href}>
                <li
                  style={{ display: "flex", alignItems: "center" }}
                  className={`rounded hover:bg-[#F0F1F2] cursor-pointer px-4 py-2 my-2 ${
                    pathname === href && "bg-[#F0F1F2] text-[#0064D9]"
                  }`}
                >
                  {icon}
                  <span className={`ml-2`}>{title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
