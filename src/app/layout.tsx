import "./globals.css";
import { Providers } from "../Providers/providers";
import { ThemeProvider } from "@/Providers/theme-provider";

export const metadata = {
  title: "LUMINA-AI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <Providers>
          {children}
        </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
