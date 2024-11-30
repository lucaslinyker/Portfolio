import PropTypes from 'prop-types';

export function CardOfProject({ image = '', alt = '' }) {
  return (
    <img
      src={image}
      alt={alt}
      width='600'
      className='w-[600px] h-80 rounded-lg bg-gradient-to-tr from-zinc-950 to-zinc-500'
    />
  );
}

CardOfProject.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};
