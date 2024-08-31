// กำหนดให้เป็น client-side component
'use client' 
// นำเข้า Inter font จาก next/font/google
import { Inter } from "next/font/google";
// นำเข้า global CSS
import "./globals.css";
// นำเข้า SessionProvider จาก next-auth/react
import { SessionProvider } from "next-auth/react";
// นำเข้า ReactNode type จาก react
import type { ReactNode } from "react";

// กำหนดค่า Inter font
const inter = Inter({ subsets: ["latin"] });

// ฟังก์ชัน RootLayout component
export default function RootLayout({
  children,
}: {
  children: ReactNode; // กำหนดประเภทของ children เป็น ReactNode
}) {
  return (
    // สร้าง HTML element กำหนดภาษาเป็น English
    <html lang="en">
      {/* ใช้ class จาก Inter font */}
      <body className={inter.className}>
        {/* ห่อหุ้ม children ด้วย SessionProvider */}
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}