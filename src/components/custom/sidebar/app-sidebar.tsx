import {
  Sidebar,
  SidebarContent as ShadCNSidebarContent,
  SidebarFooter,
  SidebarHeader as ShadCNSidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarHeader } from "@/components/custom/sidebar/sidebar-header";
import { SidebarContent } from "@/components/custom/sidebar/sidebar-content";
import { SidebarUserInfo } from "@/components/custom/sidebar/sidebar-user";
import { currentUser } from "@clerk/nextjs/server";

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const loggedInUser = await currentUser();
  const user = {
    name: loggedInUser?.fullName ?? "",
    email: loggedInUser?.primaryEmailAddress?.emailAddress ?? "",
    avatar: loggedInUser?.imageUrl ?? "",
  };

  return (
    <Sidebar variant="floating" collapsible="offcanvas" {...props}>
      <ShadCNSidebarHeader>
        <SidebarHeader />
      </ShadCNSidebarHeader>

      <ShadCNSidebarContent>
        <SidebarContent />
      </ShadCNSidebarContent>

      <SidebarFooter>
        <SidebarUserInfo user={user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
