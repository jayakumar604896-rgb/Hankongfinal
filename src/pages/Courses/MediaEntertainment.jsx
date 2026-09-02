import { Link } from 'react-router-dom'
import Hero from '../../components/courses/media-entertainment/hero'
import METabsStatic from '../../components/courses/media-entertainment/me-tab-section'
import IconSlider from '../../components/courses/media-entertainment/icons-slider'
import CustomerStories from '../../components/courses/CustomerStories'
import ResourcesLibrary from '../../components/courses/media-entertainment/ResourcesLibrary'
// import BlogSection from '../../components/courses/blog'
// import FormSection from '../../components/courses/formsection'
import ContactSection from '../../components/ContactUs'

const MediaEntertainment = () => {
  return (
    <>
      <Hero />
      <METabsStatic />
      <IconSlider/>
      <CustomerStories />
      {/* <ResourcesLibrary /> */}
      {/* <BlogSection /> */}
      <ContactSection  defaultCourse="Media & Entertainment" hideCourseSelect={true} />
      {/* <ContactSection /> */}
    </>
  )
}

export default MediaEntertainment;