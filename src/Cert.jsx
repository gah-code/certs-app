import { useState } from 'react';
import PropTypes from 'prop-types';

const Cert = ({ id, image, info, name, date }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-cert'>
      <img src={image} alt={name} className='img' />
      <span className='cert-price'>{date}</span>
      <div className='cert-info'>
        <h5>{name}</h5>

        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className='info-btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
      </div>
    </article>
  );
};

Cert.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default Cert;
