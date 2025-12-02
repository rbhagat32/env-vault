import { SidebarContent } from "@/components/custom/sidebar/sidebar-content";
import { SidebarHeader } from "@/components/custom/sidebar/sidebar-header";
import { SidebarUserInfo } from "@/components/custom/sidebar/sidebar-user";
import {
  SidebarContent as ShadCNSidebarContent,
  SidebarFooter as ShadCNSidebarFooter,
  SidebarHeader as ShadCNSidebarHeader,
  Sidebar,
  SidebarRail,
} from "@/components/ui/sidebar";
import { currentUser } from "@clerk/nextjs/server";

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const loggedInUser = await currentUser();

  return (
    <Sidebar variant="floating" collapsible="offcanvas" {...props}>
      <ShadCNSidebarHeader>
        <SidebarHeader />
      </ShadCNSidebarHeader>

      <ShadCNSidebarContent>
        <SidebarContent />
      </ShadCNSidebarContent>

      <ShadCNSidebarFooter>
        <SidebarUserInfo user={JSON.parse(JSON.stringify(loggedInUser))} />
      </ShadCNSidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
