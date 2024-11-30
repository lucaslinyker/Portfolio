export function Header() {
  return (
    <header className='sticky top-0 bg-zinc-950 py-5 px-24 border-b flex gap-3 justify-between'>
      <a href='/'>
        <h1 className='text-2xl font-bold'>LL</h1>
      </a>

      <nav className='flex items-center'>
        <ul className='flex gap-7'>
          <li className='hover:underline'>
            <a href='#projetos'>Projetos</a>
          </li>
          <li className='hover:underline'>
            <a href='#sobre'>Sobre</a>
          </li>
          <li className='hover:underline'>
            <a href='#habilidades'>Habilidades</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
