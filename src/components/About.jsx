import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element '>
        <img src={aboutSvg} alt='about' className='w-full h-64' />
        <section>
          <SectionTitle text=' code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
            suscipit debitis dolorem, voluptate recusandae natus sed cumque
            dicta, illo accusamus laboriosam. Repellat, quibusdam sit? Assumenda
            magnam eum magni minus delectus officia ad sequi laboriosam nesciunt
            accusantium asperiores, labore excepturi qui quis recusandae dolor
            iste, modi est perferendis dolorem architecto unde.
          </p>
        </section>
      </div>
    </section>
  )
}
export default About
