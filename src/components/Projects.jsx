import { projects } from '../assets/data'
import SectionTitle from './SectionTitle'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='web creations' />
      <div className='py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((item) => {
          return <ProjectsCard key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
export default Projects
