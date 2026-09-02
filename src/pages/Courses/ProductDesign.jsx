import { Link } from 'react-router-dom'
import Hero from '../../components/courses/product-design/hero'
import SoftwareSolutions from '../../components/courses/product-design/software-solutions'
import PDMTabsStatic from '../../components/courses/product-design/pdm-tab-section'
import IconSlider from '../../components/courses/product-design/icons-slider'
import FusionBanner from '../../components/courses/product-design/fusion-banner'
import ManufacturingSolutions from '../../components/courses/product-design/manufacturing-solutions-tabs'
import FusionExtensions from '../../components/courses/product-design/fusion-extensions'
import EngineeringSimulations from '../../components/courses/product-design/engineering-simulations-tabs'

import CustomerStories from '../../components/courses/CustomerStories'
import ResourcesLibrary from '../../components/courses/product-design/ResourcesLibrary'
// import BlogSection from '../../components/courses/product-design/autocad-blog'
// import FormSection from '../../components/courses/formsection'
import ContactSection from '../../components/ContactUs'

const ProductDesign = () => {
  return (
    <>
      <Hero />
      <SoftwareSolutions />
      <PDMTabsStatic />
      <IconSlider/>
      <FusionBanner />
      <ManufacturingSolutions />
      <FusionExtensions />
      <EngineeringSimulations />
      <CustomerStories />
      {/* <ResourcesLibrary /> */}
      {/* <BlogSection /> */}
      <ContactSection  defaultCourse="Product Design & Manufacturing" hideCourseSelect={true} />
      {/* <ContactSection /> */}
    </>
  )
}

export default ProductDesign;