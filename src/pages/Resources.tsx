import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

export default function Resources() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Education and e-Learning Resources</h1>
        <p className="text-xl text-gray-600">Helpful resource articles with practical advice and actionable tips to answer all your educational questions</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-2">Test Preparation</h2>
          <ul className="space-y-2">
            <li>
              <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
                <Link to="/resources/what-is-a-good-dat-score">What Is A Good DAT Score?</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
                <Link to="/resources/what-to-bring-to-the-gmat">What To Bring To The GMAT</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
                <Link to="/resources/when-to-take-the-lsat">When To Take The LSAT</Link>
              </Button>
            </li>
          </ul>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-2">Language Learning</h2>
          <ul className="space-y-2">
            <li>
              <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
                <Link to="/resources/best-way-to-learn-spanish">Best Way To Learn Spanish As An Adult</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
                <Link to="/resources/french-vs-german">French vs German: Which Language Should You Learn?</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
                <Link to="/resources/stages-learning-language">What Are The Stages of Learning A New Language?</Link>
              </Button>
            </li>
          </ul>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-2">Study Tips</h2>
          <ul className="space-y-2">
            <li>
              <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
                <Link to="/resources/healthy-study-habits">Five Tips For Healthy Study Habits</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
                <Link to="/resources/optimize-learning">Strategies To Optimize Student Learning Potential</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-blue-700 p-0 h-auto" asChild>
                <Link to="/resources/successful-student">Seven Strategies To Become A Successful Student</Link>
              </Button>
            </li>
          </ul>
        </Card>
      </div>
    </main>
  )
}
