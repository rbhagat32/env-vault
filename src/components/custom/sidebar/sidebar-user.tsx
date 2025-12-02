"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SignOutButton, useClerk } from "@clerk/nextjs";
import { type User } from "@clerk/nextjs/server";
import { ChevronsUpDown, LogOut as LogoutIcon, User as UserIcon } from "lucide-react";

export function SidebarUserInfo({ user }: { user: User | null }) {
  const { openUserProfile } = useClerk();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer border"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user?.imageUrl ?? ""} alt="User Avatar" />
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate">{`${user?.firstName} ${user?.lastName}`}</span>
                <span className="truncate text-xs font-light">
                  {user?.emailAddresses[0]?.emailAddress}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) rounded-lg"
            align="start"
            sideOffset={6}
          >
            <DropdownMenuItem className="m-1 cursor-pointer" onClick={() => openUserProfile()}>
              <UserIcon />
              Manage account
            </DropdownMenuItem>

            <Separator />

            <SignOutButton>
              <DropdownMenuItem className="m-1 cursor-pointer">
                <LogoutIcon />
                Sign out
              </DropdownMenuItem>
            </SignOutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
