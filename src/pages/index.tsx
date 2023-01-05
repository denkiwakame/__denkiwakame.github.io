import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import Education from '../components/education'
import Experiences from '../components/experiences'
import Publications from '../components/publication'
import AcademicService from '../components/academic'

export default () => (
  <>
    <div className="container">
      <Header titlePre="ABOUT" />
      <Experiences />
      <Education />
      <Publications />
      <AcademicService />
    </div>
  </>
)
