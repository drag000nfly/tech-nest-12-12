import {
  Link
} from "react-router-dom";

export function ReviewsPage() {

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-6">Best Reviews</h1>
        <div className="mb-12 text-white flex flex-col text-xl gap-4">
          <Link to="/reviews/robot-vacuums" >Robot Vacuums</Link>
          <Link to="/reviews/robot-vacuums-and-mops" >Robot Vacuums and Mops</Link>
          <Link to="/reviews/gemini-bolt-robot-vacuums" >Robot Vacuums and Mops NEW</Link>
          <Link to="/reviews/packing-cubes">Best Packing Cubes for Travel</Link>
        </div>

      </div>
    </div>
  );
}
