"use client";
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
} from "lucide-react";
import SidebarItem from "./item";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Transaction",
    path: "/transaction",
    icon: BadgeDollarSign,
  },
  {
    name: "Payment",
    path: "/payment",
    icon: WalletCards,
  },
  {
    name: "Manufacturers",
    path: "/manufacturers",
    icon: CircleUserRound,
  },
  {
    name: "Assembly Services",
    path: "/assembly-services",
    icon: CircleUserRound,
  },
  {
    name: "Design Repository",
    path: "/design-repository",
    icon: CircleUserRound,
    items: [
      {
        name: "Browse Designs",
        path: "/design-repository",
      },
      {
        name: "Submit Design",
        path: "/design-repository/submit",
      },
      {
        name: "Custom Requests",
        path: "/design-repository/requests",
      },
    ],
  },
  {
    name: "Community",
    path: "/community",
    icon: CircleUserRound,
    items: [
      {
        name: "Forum",
        path: "/community/forum",
      },
      {
        name: "Project Galleries",
        path: "/community/galleries",
      },
      {
        name: "User Profiles",
        path: "/community/profiles",
      },
    ],
  },
  {
    name: "Accounts",
    path: "/accounts",
    icon: CircleUserRound,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    items: [
      {
        name: "General",
        path: "/settings",
      },
      {
        name: "Security",
        path: "/settings/security",
      },
      {
        name: "Notifications",
        path: "/settings/notifications",
      },
    ],
  },
];


const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        <img className="h-10 w-fit" src="/logo-expanded.png" alt="Logo" />
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
