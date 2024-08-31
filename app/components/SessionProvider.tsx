// นำเข้า SessionProvider จาก next-auth/react เพื่อจัดการ session
import { SessionProvider } from 'next-auth/react'

// ฟังก์ชัน RootLayout ที่รับ children เป็น prop
export default function RootLayout({
  children,
}: {
  children: React.ReactNode // กำหนดประเภทของ children เป็น React.ReactNode
}) {
  return (
    // สร้าง HTML element กำหนดภาษาเป็น English
    <html lang="en">
      <body>
        {/* ห่อหุ้ม children ด้วย SessionProvider เพื่อให้สามารถใช้งาน session ได้ทั่วทั้งแอพ */}
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}