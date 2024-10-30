// import Cert from './Cert';
// import PropTypes from 'prop-types';

// const Certs = ({ certs }) => {
//   return (
//     <section>
//       <div className='title'>
//         <h2>Certificates</h2>
//         <div className='title-underline'></div>
//       </div>
//       <div className='certs'>
//         {certs.map((cert) => {
//           return <Cert key={cert.id} {...cert} />;
//         })}
//       </div>
//     </section>
//   );
// };

// Certs.propTypes = {
//   certs: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       // Add any additional props required by the Cert component here
//     })
//   ).isRequired,
// };

// export default Certs;

// import React from 'react';
// import Cert from './Cert';
// import PropTypes from 'prop-types';

// const Certs = ({ certs, categories, filterItems }) => {
//   return (
//     <section>
//       <div className='title'>
//         <h2>Certificates</h2>
//         <div className='title-underline'></div>
//       </div>

//       {/* Categories filter buttons */}
//       <div className='btn-container'>
//         {categories.map((category, index) => (
//           <button
//             type='button'
//             className='filter-btn'
//             key={index}
//             onClick={() => filterItems(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className='certs'>
//         {certs.map((cert) => (
//           <Cert key={cert.id} {...cert} />
//         ))}
//       </div>
//     </section>
//   );
// };

// Certs.propTypes = {
//   certs: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       category: PropTypes.string.isRequired,
//       // Add any additional props required by the Cert component here
//     })
//   ).isRequired,
//   categories: PropTypes.arrayOf(PropTypes.string).isRequired,
//   filterItems: PropTypes.func.isRequired,
// };

// export default Certs;

import React from 'react';
import Cert from './Cert';
import PropTypes from 'prop-types';

const Certs = ({ certs, categories, filterItems }) => {
  return (
    <section className='section-center'>
      <div className='title'>
        <h2>Certificates</h2>
        <div className='title-underline'></div>
      </div>

      <div className='btn-container'>
        {categories.map(
          (category, index) =>
            category && (
              <button
                type='button'
                className='filter-btn'
                key={index}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            )
        )}
      </div>

      {/* Display the filtered certificates */}
      <div className='certs'>
        {certs.map((cert) => (
          <Cert key={cert.id} {...cert} />
        ))}
      </div>
    </section>
  );
};

Certs.propTypes = {
  certs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      category: PropTypes.string.isRequired,
      // Add any additional props required by the Cert component here
    })
  ).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterItems: PropTypes.func.isRequired,
};

export default Certs;
