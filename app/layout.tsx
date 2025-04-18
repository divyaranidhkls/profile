import { ThemeProvider } from "next-themes";
import "./globals.css"
import React, { PropsWithChildren } from 'react'

export const RootLayout = (props: PropsWithChildren) => {
  return (
    <html suppressHydrationWarning className="scroll-smooth"><body><ThemeProvider attribute="class" defaultTheme="system" enableSystem>{props.children}</ThemeProvider></body></html>
  );
}

export default RootLayout;
