import { Link } from 'react-router-dom'
import Hero from '../../components/courses/autocad/hero'
import AutoCADAdvantage from '../../components/courses/autocad/why-autocad'
import WhatsNewAutoCAD from '../../components/courses/autocad/WhatsNewAutoCAD'
import RatingsSection from '../../components/courses/autocad/ratings-section'
import WhyChoose from '../../components/courses/autocad/why-choose'
import FormaDataManagement from '../../components/courses/autocad/forma-data-management'
import ToolsetSlider from '../../components/courses/autocad/toolset-slider'
import AIInsightsSlider from '../../components/courses/autocad/insigts-slider'
import VideoSlider from '../../components/courses/autocad/video-slider'
import CustomerStories from '../../components/courses/CustomerStories'
import ResourcesLibrary from '../../components/courses/autocad/ResourcesLibrary'
// import BlogSection from '../../components/courses/autocad/autocad-blog'
// import FormSection from '../../components/courses/formsection'
//import FreeTrialSection from '../../components/courses/autocad/free-trial-section'
import AutoCADTabsStatic from '../../components/courses/autocad/autocad-tab-section'
import ContactSection from '../../components/ContactUs'
import AutoCADBentoGrid from '../../components/courses/autocad/AutoCADResources'

const AutoCAD = () => {
  return (
    <>
      <Hero />
      <AutoCADAdvantage />
      <AutoCADTabsStatic />
      <WhatsNewAutoCAD />
      <RatingsSection />
      <WhyChoose />
      <FormaDataManagement/>
      <AutoCADBentoGrid />
      <ToolsetSlider />
      {/* <AIInsightsSlider />
      <VideoSlider /> */}
      <CustomerStories />
      {/* <ResourcesLibrary /> */}
      {/* <BlogSection /> */}
      {/* <FreeTrialSection /> */}
      <ContactSection  defaultCourse="AutoCAD | 2D and 3D CAD" hideCourseSelect={true} />
    </>
  )
}

export default AutoCAD