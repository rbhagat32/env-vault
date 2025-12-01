import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />

        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-6" />

        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Env Vault Logo" width={20} height={20} />
          <h1 className="font-semibold">Env Vault</h1>
        </div>
      </div>
    </header>
  );
}
