import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import Contact from '../components/contact'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'
import Education from '../components/education'
import Experiences from '../components/experiences'
import Publications from '../components/publication'

export default () => (
  <>
    <Header titlePre="ABOUT" />
    <div className="explanation">
      <Contact />
      <Education />
      <Experiences />
      <Publications />
    </div>
  </>
)
