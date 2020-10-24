import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

const degrees = [
  {
    jobtitle: 'Research Engineer',
    institute: 'OMRON SINIC X',
    country: 'Japan',
    desc:
      'Research on mobile robot navigaion and GPU-accelerated machine learning',
    year: '2019-present',
  },
  {
    jobtitle: 'Senior Software Engineer',
    institute: 'Fixstars',
    country: 'Japan',
    desc:
      'Development of CUDA/SIMD-accelerated computer vision algorithms for embedded systems',
    year: '2017-2019',
  },
  {
    jobtitle: 'Researcher',
    institute: 'NTT Labs',
    country: 'Japan',
    desc:
      'Research on MRF optimization for low-level vision, large-scale graph processing',
    year: '2015-2017',
  },
  {
    jobtitle: 'Part-time Engineer',
    institute: 'Hatena',
    country: 'Japan',
    desc: 'Backend/Frontend web application development at Hatena Blog Team',
    year: '2013-2015',
  },
  {
    jobtitle: 'Research Intern',
    institute: 'IBM Tokyo Research Laboratory',
    country: 'Japan',
    desc: 'Research on low-resolution traffic image monitoring',
    year: '2013 Aug.-2013 Sep.',
  },
  {
    jobtitle: 'Software Engineer Intern',
    institute: 'Google',
    country: 'Japan',
    desc: 'Porting image APIs for Natiev Client project at Chrome Team.',
    year: '2012 Aug.-2012 Sep.',
  },
]

export default () => (
  <>
    <div className={sharedStyles.layout}>
      <h2>Working Experiences</h2>
      {degrees.map(({ jobtitle, institute, country, year, desc }) => {
        return (
          <div class={sharedStyles.row}>
            <p>
              <b class="highlight-blue">{jobtitle}</b>
              <span> at </span>
              <b>{institute}</b>
              <span>, {country}, </span>
              <span class="highlight-red">{year}</span>
              <br />
              <span class="highlight-gray">{desc}</span>
            </p>
          </div>
        )
      })}
    </div>
  </>
)
