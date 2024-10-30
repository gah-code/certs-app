// import { useState } from 'react';
// import Loading from './Loading';
// import Certs from './Certs';
// import certificateData from './data/certificateData'; // Import the data

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [certs, setCerts] = useState(certificateData); // Initialize state with imported data

//   // const removeTour = (id) => {
//   //   const newCerts = certs.filter((cert) => cert.id !== id);
//   //   setCerts(newCerts);
//   // };

//   if (loading) {
//     return (
//       <main>
//         <Loading />
//       </main>
//     );
//   }

//   if (certs.length === 0) {
//     return (
//       <main>
//         <div className='title'>
//           <h2>No tours left</h2>
//           <button
//             className='btn'
//             style={{ marginTop: '2rem' }}
//             onClick={() => setCerts(certificateData)} // Reset to initial data when refreshing
//           >
//             Refresh
//           </button>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main>
//       <Certs certs={certs} />
//     </main>
//   );
// }

// export default App;

// import { useState } from 'react';
// import Loading from './Loading';
// import Certs from './Certs';
// import certificateData from './data/certificateData'; // Import the data

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [certs, setCerts] = useState(certificateData);
//   const [filteredCerts, setFilteredCerts] = useState(certificateData);

//   // Extract unique categories from the data
//   const categories = [
//     'all',
//     ...new Set(certificateData.map((cert) => cert.category)),
//   ];

//   const filterItems = (category) => {
//     if (category === 'all') {
//       setFilteredCerts(certificateData);
//     } else {
//       setFilteredCerts(
//         certificateData.filter((cert) => cert.category === category)
//       );
//     }
//   };

//   if (loading) {
//     return (
//       <main>
//         <Loading />
//       </main>
//     );
//   }

//   if (certs.length === 0) {
//     return (
//       <main>
//         <div className='title'>
//           <h2>No certificates left</h2>
//           <button
//             className='btn'
//             style={{ marginTop: '2rem' }}
//             onClick={() => {
//               setCerts(certificateData);
//               setFilteredCerts(certificateData);
//             }} // Reset to initial data when refreshing
//           >
//             Refresh
//           </button>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main>
//       <Certs
//         certs={filteredCerts}
//         categories={categories}
//         filterItems={filterItems}
//       />
//     </main>
//   );
// }

// export default App;

import { useState } from 'react';
import Loading from './Loading';
import Certs from './Certs';
import certificateData from './data/certificateData'; // Import the data

function App() {
  const [loading, setLoading] = useState(false);
  const [certs] = useState(certificateData); // Original certificates data
  const [filteredCerts, setFilteredCerts] = useState(certificateData); // Certificates to be displayed

  // Extract unique categories from the data and add 'all' category
  // Extract unique categories from the data, filter out any empty values, and add 'all'
  const allCategories = [
    'all',
    ...new Set(
      certificateData
        .map((cert) => cert.category)
        .filter((category) => category)
    ),
  ];

  const filterItems = (category) => {
    if (category === 'all') {
      setFilteredCerts(certificateData);
    } else {
      const newItems = certificateData.filter(
        (cert) => cert.category === category
      );
      setFilteredCerts(newItems);
    }
  };

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
          <h2>No certificates left</h2>
          <button
            className='btn'
            style={{ marginTop: '2rem' }}
            onClick={() => setFilteredCerts(certificateData)} // Reset to initial data when refreshing
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Certs
        certs={filteredCerts}
        categories={allCategories}
        filterItems={filterItems}
      />
    </main>
  );
}

export default App;
