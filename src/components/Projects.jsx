import { CardOfProject } from './CardOfProject';
import { TextsProject } from './TextsProject';
import PropTypes from 'prop-types';

import SportsGearImg from '../assets/projects/sports-gear.png';
import ToDoListImg from '../assets/projects/todo-list.png';
import BlogCardImg from '../assets/projects/blog-card.png';

export function Projects() {
  return (
    <section
      id='projetos'
      className='bg-zinc-100 text-zinc-900 px-24 py-12 text-center scroll-m-16'
    >
      <h2 className='text-4xl font-semibold mb-7'>Projetos</h2>
      <ul className='flex flex-col gap-11'>
        <Project>
          <CardOfProject
            image={SportsGearImg}
            alt='Imagem do site Sports Gear'
          />
          <TextsProject
            title='Sports Gear'
            description='Site de venda de equipamentos esportivos responsivo. Na qual tenho feito um simples sistema de autenticaçãoo com JSON Server, na qual pretendo refazer este com Firebase e futuramente implementar um sistema de carrinho de compras e pagamento com Stripe.'
            stack='HTML5, CSS3, BEM CSS, JS, Figma, Vercel, JSON Server'
            github='https://github.com/lucaslinyker/SportsGear'
            live='https://sports-gear.vercel.app'
          />
        </Project>
        <Project>
          <CardOfProject image={ToDoListImg} alt='Imagem do site TodoList' />
          <TextsProject
            title='ToDo List'
            description='Site de lista de tarefas responsivo. Futuramente irei implementar um sistema de notificações com Push API.'
            stack='HTML5, CSS3, CSS Modules, React, Vercel, Commit Convention'
            github='https://github.com/lucaslinyker/todoList'
            live='https://todo-list-lucaslinykers-projects.vercel.app/'
          />
        </Project>
        <Project>
          <CardOfProject image={BlogCardImg} alt='Imagem do site BlogCard' />
          <TextsProject
            title='Blog Card'
            description='Site de preview de cartão de blog responsivo.'
            stack='HTML5, CSS3, Tailwind CSS, React, Vercel'
            github='https://github.com/lucaslinyker/blog-preview-card'
            live='https://lucaslinyker.github.io/blog-preview-card'
          />
        </Project>
      </ul>
    </section>
  );
}

function Project({ children }) {
  return <li className='flex flex-col xl:flex-row gap-7'>{children}</li>;
}

Project.propTypes = {
  children: PropTypes.node.isRequired,
};
