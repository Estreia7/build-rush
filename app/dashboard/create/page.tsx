export default function CreateWebsitePage() {
    return (
      <div className="max-w-xl space-y-4">
        <h2 className="text-xl font-semibold">Create a Website</h2>
  
        <input
          placeholder="Business name"
          className="w-full border p-2 rounded"
        />
  
        <select className="w-full border p-2 rounded">
          <option>Restaurant</option>
          <option>Cafe</option>
          <option>Freelancer</option>
          <option>Local Business</option>
        </select>
  
        <input
          placeholder="City"
          className="w-full border p-2 rounded"
        />
  
        <button className="bg-black text-white px-4 py-2 rounded">
          Generate Website
        </button>
      </div>
    )
  }