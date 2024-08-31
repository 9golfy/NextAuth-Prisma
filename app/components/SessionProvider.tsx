import { SessionProvider } from 'next-auth/react'

// ฟังก์ชัน RootLayout ที่รับ children เป็น prop
export default function RootLayout({
  children,
}: {
  children: React.ReactNode // กำหนดประเภทของ children เป็น React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Wrap children ด้วย SessionProvider เพื่อให้สามารถใช้งาน session */}
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
