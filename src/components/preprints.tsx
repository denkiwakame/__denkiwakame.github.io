import sharedStyles from '../styles/shared.module.css'

const papers = [
  {
    authors: ['Mai Nishimura', 'Shohei Nobuhara', 'Ko Nishino'],
    title:
      'InCrowdFormer: On-Ground Pedestrian World Model From Egocentric Views',
    year: '2023',
    journal: 'arXiv',
    links: {
      paper: 'https://arxiv.org/abs/2303.09534',
    },
  },
  {
    authors: [
      'Yuta Yoshitake',
      'Mai Nishimura',
      'Shohei Nobuhara',
      'Ko Nishino',
    ],
    title:
      'TransPoser: Transformer as an Optimizer for Joint Object Shape and Pose Estimation',
    year: '2023',
    journal: 'arXiv',
    links: {
      paper: 'https://arxiv.org/abs/2303.13477',
    },
  },
  {
    authors: ['Kohei Honda', 'Ryo Yonetani', 'Mai Nishimura', 'Tadashi Kozuno'],
    title:
      'When to Replan? An Adaptive Replanning Strategy for Autonomous Navigation using Deep Reinforcement Learning',
    year: '2023',
    journal: 'arXiv',
    links: {
      paper: 'https://arxiv.org/abs/2304.12046',
    },
  },
]

export default () => (
  <>
    <div className={sharedStyles.layout}>
      <h2>Preprints</h2>
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
