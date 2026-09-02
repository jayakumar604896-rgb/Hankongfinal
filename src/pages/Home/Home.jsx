import Hero from '../../components/home/Hero'
import InnovativeSection from '../../components/home/InnovativeSection'
import CoursesCard from '../../components/home/CoursesCard'
import AboutSection from '../../components/home/AboutUs'
import ContactSection from '../../components/ContactUs'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Home = () => {
  return (
    <>
      <Hero />
      <InnovativeSection />
      <CoursesCard />
      <AboutSection />
      <ContactSection />
    </>
  )
}

export default Home