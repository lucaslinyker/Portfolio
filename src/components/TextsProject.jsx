import PropTypes from 'prop-types';

export function TextsProject({
  title = 'Name of the project',
  description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni debitis illo dolore dolor qui ab deserunt nihil temporibus quam alias. Atque ipsum dolorum aliquam aut voluptas, maiores esse perspiciatis accusantium. Aspernatur iusto adipisci sint itaque nam nisi, iste nemo molestias ducimus quia reiciendis. Quisquam quo cumque iure exercitationem aliquam dolor similique ab atque, id optio recusandae modi, asperiores voluptatum odit?',
  stack = 'React, Tailwind CSS, Figma, Vercel, Node.js',
  github = 'https://github.com',
  live = 'https://github.com',
}) {
  return (
    <div className='flex gap-5'>
      <div className='w-fit text-start'>
        <h3 className='text-2xl font-semibold mb-4'>{title}</h3>
        <p className='text-lg mb-3 text-wrap'>{description}</p>
        <p className='mb-4 text-zinc-500 font-bold'>Stack: {stack}</p>
        <div className='flex gap-2'>
          <a
            href={github}
            target='_blank'
            className='bg-zinc-500 text-zinc-200 px-4 py-1 rounded-full'
          >
            GitHub
          </a>
          <a
            href={live}
            target='_blank'
            className='bg-zinc-500 text-zinc-200 px-4 py-1 rounded-full'
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

TextsProject.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  stack: PropTypes.string,
  github: PropTypes.string,
  live: PropTypes.string,
};
