import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

export default function Reviews() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Test Prep Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample review cards - these would be populated from your data */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-2">MCAT Prep Courses</h2>
          <p className="text-gray-600 mb-4">Compare the best MCAT prep courses and find the right one for your needs.</p>
          <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
            <Link to="/reviews/mcat">Read More →</Link>
          </Button>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-2">LSAT Prep Courses</h2>
          <p className="text-gray-600 mb-4">Find the perfect LSAT prep course to help you achieve your target score.</p>
          <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
            <Link to="/reviews/lsat">Read More →</Link>
          </Button>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-2">GRE Prep Courses</h2>
          <p className="text-gray-600 mb-4">Expert reviews of the top GRE prep courses available today.</p>
          <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
            <Link to="/reviews/gre">Read More →</Link>
          </Button>
        </Card>
      </div>
    </main>
  )
}
