import prisma from "../lib/prisma"

export default async function Home() {
  let users: Array<{
    id: string
    email: string
    name: string
    createdAt: Date
    websites: Array<{
      id: string
      title: string
      slug: string
      createdAt: Date
    }>
  }> = []
  let error = null

  try {
    users = await prisma.user.findMany({
      include: {
        websites: {
          select: {
            id: true,
            title: true,
            slug: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  } catch (e) {
    console.error("Error fetching users:", e)
    error = "Failed to load users. Make sure your DATABASE_URL is configured."
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users from Database</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : users.length === 0 ? (
        <p>No users yet. Create one using the API at /api/users</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="border p-4 rounded">
              <div className="mb-2">
                <p className="font-semibold text-lg">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Created: {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
              {user.websites.length > 0 && (
                <div className="mt-3 pt-3 border-t">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Websites ({user.websites.length}):
                  </p>
                  <ul className="space-y-1">
                    {user.websites.map((website) => (
                      <li key={website.id} className="text-sm text-gray-600">
                        • {website.title} ({website.slug})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
