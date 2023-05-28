import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

const papers = [
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
  {
    authors: ['Hikaru Asano', 'Ryo Yonetani', 'Mai Nishimura', 'Tadashi Kozuno'],
    title:
      'https://arxiv.org/abs/2305.11465',
    year: '2023',
    journal: 'International Conference on Autonomous Agents and Multi-Agent Systems (AAMAS)',
    links: {
      paper: 'https://arxiv.org/abs/2111.05060v2',
      projectpage: 'https://omron-sinicx.github.io/ncf2/',
    },
  },
  {
    authors: ['Mai Nishimura', 'Shohei Nobuhara', 'Ko Nishino'],
    title:
      'View Birdification in the Crowd: Ground-Plane Localization from Perceived Movements',
    journal: 'International Journal of Computer Vision (IJCV)',
    year: '2023',
    links: {
      paper: 'https://arxiv.org/abs/2111.05060v2',
    },
  },
  {
    authors: ['Kazumi Kasaura', 'Ryo Yonetani', 'Mai Nishimura'],
    title: 'Periodic Multi-Agent Path Planning',
    journal: 'AAAI Conference on Artificial Intelligence (AAAI)',
    year: '2023',
    links: {
      paper:
        'https://github.com/omron-sinicx/PeriodicMAPP/blob/master/paper.pdf',
      projectpage: 'https://omron-sinicx.github.io/PeriodicMAPP/',
    },
  },
  {
    authors: ['Mai Nishimura', 'Shohei Nobuhara', 'Ko Nishino'],
    title:
      'ViewBirdiformer: Learning to recover ground-plane crowd trajectories and ego-motion from a single ego-centric view',
    journal: 'IEEE Robotics and Automation Letters (RA-L)',
    year: '2022',
    links: {
      paper: 'https://arxiv.org/abs/2210.06332',
    },
  },
  {
    authors: ['Kazumi Kasaura', 'Mai Nishimura', 'Ryo Yonetani'],
    title:
      'Prioritized Safe Interval Path Planning for Multi-Agent Pathfinding with Continuous Time on 2D Roadmaps',
    journal: 'IEEE Robotics and Automation Letters (RA-L)',
    year: '2022',
    links: {
      paper: 'https://ieeexplore.ieee.org/document/9811344',
      projectpage: 'https://omron-sinicx.github.io/PSIPP-CTC/',
    },
  },
  {
    authors: [
      'Keisuke Okumura',
      'Ryo Yonetani',
      'Mai Nishimura',
      'Asako Kanezaki',
    ],
    title:
      'CTRMs: Learning to Construct Cooperative Timed Roadmaps for Multi-agent Path Planning in Continuous Spaces',
    journal:
      'International Conference on Autonomous Agents and Multi-Agent Systems (AAMAS)',
    year: '2022',
    links: {
      paper: 'https://arxiv.org/abs/2201.09467',
      projectpage: 'https://omron-sinicx.github.io/ctrm/',
    },
  },
  {
    authors: [
      'Mutsuki Nakahara',
      'Mai Nishimura',
      'Yoshitaka Ushiku',
      'Takayuki Nishio',
      'Kazuki Maruta',
      'Yu Nakayama',
      'Daisuke Hisano',
    ],
    title:
      'Edge Computing-Assisted DNN Image Recognition System With Progressive Image Retransmission',
    journal: 'IEEE Access',
    year: '2022',
    links: {
      paper: 'https://ieeexplore.ieee.org/abstract/document/9869327',
    },
  },
  {
    authors: ['Mai Nishimura', 'Shohei Nobuhara', 'Ko Nishino'],
    title:
      'View Birdification in the Crowd: Ground-Plane Localization from Perceived Movements',
    journal: 'The British Machine Vision Conference (BMVC)',
    year: '2021',
    links: {
      paper: 'https://arxiv.org/abs/2111.05060',
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
    journal: 'International Conference on Machine Learning (ICML)',
    year: '2021',
    links: {
      paper: 'https://arxiv.org/abs/2009.07476',
      projectpage: 'https://omron-sinicx.github.io/neural-astar/',
    },
  },
  {
    authors: [
      'Mutsuki Nakahara',
      'Daisuke Hisano',
      'Mai Nishimura',
      'Yoshitaka Ushiku',
      'Kazuki Maruta',
      'Yu Nakayama',
    ],
    title:
      'Retransmission Edge Computing System Conducting Adaptive Image Compression Based on Image Recognition Accuracy',
    year: '2021',
    links: {
      paper: 'https://ieeexplore.ieee.org/document/9625464',
    },
    journal: 'VTC-Fall',
  },
  {
    authors: [
      'Hiroaki Minoura',
      'Ryo Yonetani',
      'Mai Nishimura',
      'Yoshitaka Ushiku',
    ],
    title: 'Crowd Density Forecasting by Modeling Patch-based Dynamics',
    journal: 'IEEE Robotics and Automation Letters (RA-L)',
    year: '2021',
    links: {
      paper: 'https://arxiv.org/abs/1911.09814',
    },
  },
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
