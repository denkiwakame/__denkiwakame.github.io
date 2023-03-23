import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

const degrees = [
  {
    title: 'Ph.D. in informatics',
    university: 'Kyoto University',
    country: 'Japan',
    year: '2020-2023',
  },
  {
    title: 'M.E. in informatics',
    university: 'Kyoto University',
    country: 'Japan',
    year: '2013-2015',
  },
  {
    title: 'B.E. in Electrical and Electronic Engineering',
    university: 'Kyoto University',
    country: 'Japan',
    year: '2009-2013',
  },
]

export default () => (
  <>
    <div className={sharedStyles.layout}>
      <h2>Education</h2>
      {degrees.map(({ title, university, country, year }) => {
        return (
          <div className={sharedStyles.row}>
            <p>
              <b className="highlight-blue">{title}</b>,<span> at </span>
              <b>{university}</b>
              <span>, {country}, </span>
              <span className="highlight-red">{year}</span>
            </p>
          </div>
        )
      })}
    </div>
  </>
)
