import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

const papers = [
  {
    authors: ['Mai Nishimura', 'Ryo Yonetani'],
    title:
      'L2B: Learning to Balance the Safety-Efficiency Trade-off in Interactive Crowd-aware Robot Navigation',
    journal:
      'International Conference on Intelligent Robots and Systems (IROS)',
    year: '2020',
    links: {
      paper: 'https://arxiv.org/abs/2003.09207',
      projectpage: 'https://denkiwakame.github.io/l2b',
    },
  },
  {
    authors: [
      'Mai Nishimura',
      'Shohei Nobuhara',
      'Takashi Matsuyama',
      'Shinya Shimizu',
      'Kensaku Fujii',
    ],
    title:
      'A Linear Generalized Camera Calibration from Three Intersecting Reference Planes',
    journal: 'International Conference on Computer Vision (ICCV)',
    year: '2015',
    links: {
      paper:
        'https://openaccess.thecvf.com/content_iccv_2015/papers/Nishimura_A_Linear_Generalized_ICCV_2015_paper.pdf',
      code: 'https://github.com/computer-vision/iccv2015',
    },
  },
  {
    authors: [
      'Ryo Yonetani',
      'Tatsunori Taniai',
      'Mohammadamin Barekatain',
      'Mai Nishimura',
      'Asako Kanezaki',
    ],
    title: 'Path Planning using Neural A* Search',
    journal: 'arXiv preprint',
    year: '2020',
    links: {
      paper: 'https://arxiv.org/abs/2009.07476',
    },
  },
  {
    authors: [
      'Yasuhiro Fujiwara',
      'Yasutoshi Ida',
      'Juny Arai',
      'Mai Nishimura',
      'Sotetsu Iwamura',
    ],
    title: 'Fast Algorithm for the Lasso based L1-Graph Construction',
    journal: 'Proceedings of the Very Large Data Bases (PVLDB)',
    year: '2016',
    links: {
      paper: 'http://www.vldb.org/pvldb/vol10/p229-fujiwara.pdf',
    },
  },
]

export default () => (
  <>
    <div className={sharedStyles.layout}>
      <h2>Publications</h2>
      {papers.map(({ authors, title, journal, year, links }) => {
        return (
          <div className={sharedStyles.pub}>
            <p>
              <span className="highlight-gray">
                {authors.map(author => {
                  return author == 'Mai Nishimura' ? (
                    <span>
                      <b className="highlight-blue">
                        <u>{author}</u>
                      </b>
                      ,{' '}
                    </span>
                  ) : (
                    <span>{author}, </span>
                  )
                })}
              </span>
              <br />
              <b>{title}</b>
              <br />
              <span className="highlight-red">
                {journal}, {year}
              </span>
              <br />
              {Object.entries(links).map(([key, val]) => {
                return (
                  <a href={val} target="_blank" className="highlight">
                    [{key}]{' '}
                  </a>
                )
              })}
            </p>
          </div>
        )
      })}
    </div>
  </>
)
