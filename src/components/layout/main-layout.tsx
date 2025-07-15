"use client";

import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Sidebar } from "./sidebar";
import { PlayerBar } from "./player-bar";
import { ThemeToggle } from "../theme-toggle";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-grow"
      >
        <ResizablePanel defaultSize={18} minSize={15} maxSize={25}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={82}>
          <div className="flex flex-col h-full">
            <header className="flex items-center justify-end p-4 border-b border-border bg-background">
              <ThemeToggle />
            </header>
            <main className="flex-grow overflow-auto p-6 bg-background">
              {children}
            </main>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <PlayerBar />
    </div>
  );
}