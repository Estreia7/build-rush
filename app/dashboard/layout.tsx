export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="h-14 border-b bg-white px-6 flex items-center">
          <h1 className="font-semibold text-lg">Build Rush</h1>
        </header>
  
        <main className="p-6">{children}</main>
      </div>
    )
  }