"use client"

import * as React from "react"
import {
  ListOrdered,
  Settings2,

  Users2,
  Zap,
} from "lucide-react"
import { LuLayoutDashboard, LuTickets } from "react-icons/lu";

import { NavMain } from "@/components/nav-main"
// import { IoWalletOutline } from "react-icons/io5";
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"








// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  company: {
    name: "Julio Dashboard",
    logo: Zap,
    plan: "Julio Dashboard",
  },
  navMain: [
    {
      title: "Overview",
      url: "/dashboard/overview",
      icon: LuLayoutDashboard,
    },
    {
      title: "Restaurants",
      url: "/dashboard/restaurant-management",
      icon: LuLayoutDashboard,
    },
    {
      title: "Orders",
      url: "/dashboard/order-management",
      icon: ListOrdered,
    },
    {
      title: "Customers",
      icon: Users2,
      url: "/dashboard/customer-management",
    },
    {
      title: "Coupons",
      icon: LuTickets,
      url: "/dashboard/coupons-management",
    },
    // {
    //   title: "Payments",
    //   url: "/dashboard/payment-monitoring",
    //   icon: IoWalletOutline,
    // },
    {
      title: "Admin",
      url: "/dashboard/admin-management",
      icon: Users2,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [

        { title: "Terms & Conditions", url: "/dashboard/policies/terms-and-con" },
        { title: "Privacy Policy", url: "/dashboard/policies/privacy-policy" },
        { title: "About Us", url: "/dashboard/policies/about-us" },
        { title: "FAQ", url: "/dashboard/faq" },
      ],
    },
  ],


}



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <>
      <Sidebar collapsible="icon" {...props} className="bg-linear-to-b from-emerald-900 to-emerald-600">
        <SidebarHeader>
          <TeamSwitcher company={data.company} />
        </SidebarHeader>
        <SidebarContent className="overflow-hidden">
          <NavMain items={data.navMain} groupLabel="Platform" />

        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

    </>
  )
}
