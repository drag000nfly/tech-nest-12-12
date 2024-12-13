import React from 'react';
import ComparisonTable from './components/ComparisonTable';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      <div className="max-w-[90rem] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 text-center">
          Robot Vacuum and Mop Combo Comparison
        </h1>
        <ComparisonTable />
      </div>
    </div>
  );
}

export default App;