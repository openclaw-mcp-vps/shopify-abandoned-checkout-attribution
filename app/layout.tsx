import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abandoned Checkout Attribution | Track Which Ads Cause Cart Abandonment",
  description: "Analyze abandoned Shopify checkouts by traffic source. Identify which marketing channels have the highest abandonment rates and optimize your ad spend."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2e78ea96-9957-43a7-9ca0-fd7a75b8643e"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
