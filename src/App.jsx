import { useState } from 'react';
import Loading from './Loading';
import Certs from './Certs';
import certificateData from './data/certificateData'; // Import the data

function App() {
  const [loading, setLoading] = useState(false);
  const [certs, setCerts] = useState(certificateData); // Initialize state with imported data

  // const removeTour = (id) => {
  //   const newCerts = certs.filter((cert) => cert.id !== id);
  //   setCerts(newCerts);
  // };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (certs.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button
            className='btn'
            style={{ marginTop: '2rem' }}
            onClick={() => setCerts(certificateData)} // Reset to initial data when refreshing
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Certs certs={certs} />
    </main>
  );
}

export default App;
