import { Link } from 'react-router-dom'
import Hero from '../../components/courses/aec/hero'
import ConnectedDesign from '../../components/courses/aec/connected-design'
import AECTabsAnimated from '../../components/courses/aec/aec-collections'
import StreamlineCollaboration from '../../components/courses/aec/streamline-collaboration'
import IconSlider from '../../components/courses/aec/icons-slider'
import FormaSection from '../../components/courses/aec/FormaSection'
import CustomerStories from '../../components/courses/CustomerStories'
// import ResourcesLibrary from '../../components/courses/aec/ResourcesLibrary'
// import BlogSection from '../../components/courses/blog'
// import FormSection from '../../components/courses/formsection'
import ContactSection from '../../components/ContactUs'

const AEC = () => {
  return (
    <>
      <Hero />
      <ConnectedDesign />
      <AECTabsAnimated />
      <IconSlider />
      <StreamlineCollaboration />
      <FormaSection />
      <CustomerStories />
      {/* <ResourcesLibrary /> */}
      {/* <BlogSection /> */}
      {/* <ContactSection /> */}
      <ContactSection  defaultCourse="Architecture, Engineering & Construction" hideCourseSelect={true} />
    </>
  )
}

export default AEC