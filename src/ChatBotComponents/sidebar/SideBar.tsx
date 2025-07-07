"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/Animations/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSearch,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Input from "../input/Input";
import { BotMessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SideBar({children}:{children:React.ReactNode}) {
  const links = [
    {
      label: "Profile",
      href: "/chatbot/profile",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Dashboard",
      href: "/chatbot/dashboard",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "/chatbot/settings",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-screen flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "User",
                href: "#",
                icon: (
                  <img
                    src="/assets/images/bot.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Layout>{children}</Layout>
    </div>
  );
}
export const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/chatbot")}
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      {/* <img src={BotIconSVG.image} alt="Bot Icon" className="h-10 w-10 shrink-0" /> */}
      <BotMessageSquare className="h-10 w-10 shrink-0 dark:text-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        LUMINA-AI
      </motion.span>
    </div>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="/chatbot"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      {/* <img src={BotIconSVG.src} alt="Bot Icon" className="h-10 w-10 shrink-0" /> */}
      <BotMessageSquare className="h-10 w-10 shrink-0 dark:text-white" />
    </a>
  );
};

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex gap-2">
          <div className="h-full w-full ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
