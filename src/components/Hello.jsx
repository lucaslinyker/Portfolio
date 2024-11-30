export function Hello() {
  return (
    <section className='flex flex-col items-center px-24 py-52'>
      <p className='font-light mb-7'>Hello World!</p>
      <h2 className='text-3xl mb-12'>
        Meu nome é Lucas Linyker, sou um desenvolvedor front-end
      </h2>
      <div className='flex flex-col gap-4 w-96 text-center'>
        <a
          href='#sobre'
          className='bg-zinc-300 hover:bg-zinc-400 text-zinc-700 text-lg transition-colors rounded-full py-1 px-4'
        >
          Entrar em Contato
        </a>
        <a
          href='/src/assets/cv.pdf'
          target='_blank'
          className='bg-zinc-300 hover:bg-zinc-400 text-zinc-700 text-lg transition-colors rounded-full py-1 px-4'
        >
          Ver Currículo
        </a>
      </div>
    </section>
  );
}
