
import './App.css'
import { AuroraHero } from './components/AuroraHero '
// import { BouncyCardsFeatures } from './components/BouncyCardsFeatures'

import { DragCloseDrawerExample } from './components/DragCloseDrawerExample '
// import ExampleWrapper from './components/ExampleWrapper '
import Header from './components/Header'
// import HoriszontalScrollCarousel from './components/HorizontalScrollCarousel'
import Navbar from './components/Navbar'
import { RevealBento } from './components/RevealBento'
import { Reviews } from './components/Reviews'
// import ResponsiveComponent from './components/TabComponent'
// import TabComponent from './components/TabComponent'


// import { TextParallaxContentExample } from './components/TextParallaxContentExample'
import VerticalAccordion from './components/VerticalAccordion'
import ZPatternSection from './components/ZPatternSection'



function App() {


  return (
   <>
  <Navbar />
  <Header />
   {/* <TabComponent /> */}
   <ZPatternSection></ZPatternSection>
   {/* <ResponsiveComponent /> */}
    <AuroraHero />
    {/* <BouncyCardsFeatures /> */}
    {/* <HoriszontalScrollCarousel /> */}
    {/* <TextParallaxContentExample /> */}
    {/* <ExampleWrapper /> */}
    <Reviews />
    <VerticalAccordion />
    
    <RevealBento />
    <DragCloseDrawerExample />

   </>
  )
}

export default App
