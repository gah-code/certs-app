import React, { useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import certificateData from './data/certificateData'; // Import the data

function App() {
  const [loading, setLoading] = useState(false); // No need to load data, so set to false
  const [tours, setTours] = useState(certificateData); // Initialize state with imported data

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button
            className='btn'
            style={{ marginTop: '2rem' }}
            onClick={() => setTours(certificateData)} // Reset to initial data when refreshing
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
