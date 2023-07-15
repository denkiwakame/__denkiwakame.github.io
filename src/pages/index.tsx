import Header from '../components/header'
import Education from '../components/education'
import Experiences from '../components/experiences'
import Publications from '../components/publication'
import Preprints from '../components/preprints'
import AcademicService from '../components/academic'

export default () => (
  <>
    <div className="container">
      <Header titlePre="ABOUT" />
      <Experiences />
      <Education />
      <Publications />
      <Preprints />
      <AcademicService />
    </div>
  </>
)
