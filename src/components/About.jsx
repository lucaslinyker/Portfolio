import { Gabget } from './Gabget';

export function About() {
  return (
    <section
      id='sobre'
      className='bg-zinc-100 text-zinc-900 px-24 py-12 text-center flex flex-col items-center scroll-m-44'
    >
      <h2 className='text-4xl font-semibold mb-7'>Sobre mim</h2>
      <p className='max-w-[1000px] text-pretty'>
        Atualmente, estou cursando o ensino técnico integrado ao ensino médio em{' '}
        <strong>Desenvolvimento de Sistemas</strong> na ETEC, onde me destaco
        entre os cinco melhores alunos de uma turma de 40. Ao longo do curso,
        tenho desenvolvido habilidades em PHP, SQL Server e RAD Studio Delphi,
        além de ter uma base sólida em lógica de programação com Pascal.
        <br />
        <br />
        Meu foco está em <strong>Desenvolvimento Web</strong>, onde aplico HTML5
        para construir sites semânticos e TailwindCSS para garantir que sejam
        responsivos. Também utilizo <strong>ReactJS</strong> para tornar as
        interfaces interativas e dinâmicas.
      </p>

      <div className='w-full flex gap-10 justify-evenly mt-10'>
        <Gabget
          icon='fab fa-github'
          type='link'
          skillOrLink='https://github.com/lucaslinyker'
        />
        <Gabget
          icon='fab fa-linkedin'
          type='link'
          skillOrLink='https://linkedin.com/in/lucaslinyker'
        />
        <Gabget
          icon='envelope'
          type='skill'
          skillOrLink='lucaslinyker@outlook.com'
        />
      </div>
    </section>
  );
}
