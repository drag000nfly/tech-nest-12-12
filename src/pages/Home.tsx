import { Link } from 'react-router-dom'
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Make smarter choices about your education</h1>
        <p className="text-xl text-gray-600">Analytics and insights. Latest market trends. In-depth reviews and analysis.</p>
      </section>

      {/* Featured Categories */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Test Prep Reviews</h2>
          <p className="text-gray-600 mb-4">Comprehensive reviews of leading test preparation courses and materials.</p>
          <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
            <Link to="/reviews">Browse Reviews →</Link>
          </Button>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Study Guides</h2>
          <p className="text-gray-600 mb-4">Expert guides and tips to help you succeed in your educational journey.</p>
          <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
            <Link to="/best">View Guides →</Link>
          </Button>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Resources</h2>
          <p className="text-gray-600 mb-4">Helpful articles and tools to support your learning goals.</p>
          <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
            <Link to="/resources">Explore Resources →</Link>
          </Button>
        </Card>
      </section>
    </main>
  )
}
