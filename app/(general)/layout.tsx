import Navbar from "@/components/navbar/Navbar"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Navbar/>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-lg">General layout</h1>
          {children}
        </main>
      </>
    )
  }