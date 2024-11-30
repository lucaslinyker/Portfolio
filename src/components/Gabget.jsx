import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

library.add(fas, fab);

export function Gabget({ icon, type, skillOrLink }) {
  return (
    <div className='flex flex-col items-center'>
      {type === 'link' ? (
        <>
          <a
            href={skillOrLink}
            target='_blank'
            className='rounded-full shadow-md shadow-zinc-400 w-20 h-20 flex items-center justify-center'
          >
            <FontAwesomeIcon
              icon={icon.includes('fa-') ? icon.split(' ') : ['fas', icon]}
              size='2xl'
            />
          </a>

          <a
            href={skillOrLink}
            target='_blank'
            rel='noreferrer'
            className='text-lg font-semibold mt-1'
          >
            {skillOrLink}
          </a>
        </>
      ) : (
        <>
          <div className='rounded-full shadow-md shadow-zinc-400 w-20 h-20 flex items-center justify-center'>
            <FontAwesomeIcon
              icon={icon.includes('fa-') ? icon.split(' ') : ['fas', icon]}
              size='2xl'
            />
          </div>

          <p className='text-lg font-semibold mt-1'>{skillOrLink}</p>
        </>
      )}
    </div>
  );
}

Gabget.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['link', 'skill']).isRequired,
  skillOrLink: PropTypes.string.isRequired,
};
