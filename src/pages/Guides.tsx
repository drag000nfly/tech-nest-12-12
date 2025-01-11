import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

export default function Guides() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Best Test Prep Guides</h1>
        <p className="text-xl text-gray-600">Expert recommendations and comprehensive comparisons to help you make informed decisions</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-2">Best MCAT Prep Courses</h2>
          <p className="text-gray-600 mb-4">Compare the top MCAT prep courses and find the perfect match for your study style.</p>
          <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
            <Link to="/best/mcat-prep-courses">Read More →</Link>
          </Button>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-2">Best LSAT Prep Courses</h2>
          <p className="text-gray-600 mb-4">Find the ideal LSAT prep course to help you achieve your target score.</p>
          <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
            <Link to="/best/lsat-prep-courses">Read More →</Link>
          </Button>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-2">Best GRE Prep Courses</h2>
          <p className="text-gray-600 mb-4">Discover the most effective GRE prep courses for your needs.</p>
          <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
            <Link to="/best/gre-prep-courses">Read More →</Link>
          </Button>
        </Card>
      </div>
    </main>
  )
}
