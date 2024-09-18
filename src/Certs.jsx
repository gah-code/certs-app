import Cert from './Cert';
import PropTypes from 'prop-types';

const Certs = ({ certs }) => {
  return (
    <section>
      <div className='title'>
        <h2>Certificates</h2>
        <div className='title-underline'></div>
      </div>
      <div className='certs'>
        {certs.map((cert) => {
          return <Cert key={cert.id} {...cert} />;
        })}
      </div>
    </section>
  );
};

Certs.propTypes = {
  certs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      // Add any additional props required by the Cert component here
    })
  ).isRequired,
};

export default Certs;
