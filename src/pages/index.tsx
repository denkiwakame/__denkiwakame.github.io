import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import Contact from '../components/contact'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'
import Education from '../components/education'

export default () => (
  <>
    <Header titlePre="ABOUT" />
    <div className={sharedStyles.layout}>
      <Contact />

      <div className="explanation">
        <Education />
        <div class="container">
          <h2>Working Experiences</h2>
          <p>
            <b class="highlight-blue">Research Engineer</b> at{' '}
            <b>OMRON SINIC X</b>, Japan,{' '}
            <span class="highlight-red">2019-present</span>
            <br />
            <span class="highlight-gray">
              Mobile robot navigaion and GPU-accelerated Machine Learning
            </span>
            <br />
          </p>
          <p>
            <b class="highlight-blue">Senior Software Engineer</b> at{' '}
            <b>Fixstars</b>, Japan, <span class="highlight-red">2017-2019</span>
            <br />
            <span class="highlight-gray">
              CUDA/SIMD-powered computer vision algorithms for embedded systems
            </span>
          </p>
          <p>
            <b class="highlight-blue">Researcher</b> at <b>NTT Labs</b>, Japan,{' '}
            <span class="highlight-red">2015-2017</span>
            <br />
            <span class="highlight-gray">
              MRF optimization, large-scale graph processing
            </span>
          </p>
          <p>
            <b class="highlight-blue">Part-time Engineer</b> at <b>Hatena</b>,
            Japan, <span class="highlight-red">2013-2015</span>
            <br />
            <span class="highlight-gray">
              Backend/Frontend web application engineer at Hatena Blog Team
            </span>
          </p>
          <p>
            <b class="highlight-blue">Research Intern</b> at{' '}
            <b>IBM Tokyo Research Laboratory</b>, Japan,{' '}
            <span class="highlight-red">2013</span>
            <br />
            <span class="highlight-gray">
              Frugal traffic monitoring project
            </span>
          </p>
          <p>
            <b class="highlight-blue">Software Engineer Intern (BOLD)</b> at{' '}
            <b>Google</b>, Japan, <span class="highlight-red">2012</span>
            <br />
            <span class="highlight-gray">
              Native Client project at Chrome Team
            </span>
          </p>
        </div>
        <div class="container">
          <h2>Publications</h2>
          <p>
            <b class="highlight-blue">
              <u>Mai Nishimura</u>
            </b>
            <span class="highlight-gray">, Ryo Yonetani</span>
            <br />
            <b>
              “L2B: Learning to Balance the Safety-Efficiency Trade-off in
              Interactive Crowd-aware Robot Navigation”
            </b>
            <br />
            <span class="highlight-red">
              IEEE/RSJ International Conference on Intelligent Robots and
              Systems (IROS), 2020
            </span>
            <br />
            <a
              href="https://arxiv.org/abs/2003.09207"
              target="_blank"
              class="highlight"
            >
              [paper]
            </a>{' '}
            <a
              href="https://denkiwakame.github.io/l2b"
              target="_blank"
              class="highlight"
            >
              [project page]
            </a>
          </p>
          <p>
            <span class="highlight-gray">
              <b class="highlight-blue">
                <u>Mai Nishimura</u>
              </b>
              , Shohei Nobuhara, Takashi Matsuyama, Shinya Shimizu, and Kensaku
              Fujii
            </span>
            <br />
            <b>
              A Linear Generalized Camera Calibration from Three Intersecting
              Reference Planes”
            </b>
            <br />
            <span class="highlight-red">
              International Conference on Computer Vision (ICCV), 2015
            </span>
            <br />
            <a
              href="https://openaccess.thecvf.com/content_iccv_2015/papers/Nishimura_A_Linear_Generalized_ICCV_2015_paper.pdf"
              target="_blank"
              class="highlight"
            >
              [paper]
            </a>{' '}
            <a
              href="https://github.com/computer-vision/iccv2015"
              target="_blank"
              class="highlight"
            >
              [code]
            </a>
          </p>
          <p>
            <span class="highlight-gray">
              Ryo Yonetani, Tatsunori Taniai, Mohammadamin Barekatain,{' '}
              <b class="highlight-blue">
                <u>Mai Nishimura</u>
              </b>
              , Asako Kanezaki
            </span>
            <br />
            <b>“Path Planning using Neural A* Search”</b>
            <br />
            <span class="highlight-red">arXiv preprint, 2020</span>
            <br />
            <a
              href="https://arxiv.org/abs/2009.07476"
              target="_blank"
              class="highlight"
            >
              [paper]
            </a>
          </p>
          <p>
            <span class="highlight-gray">
              Y. Fujiwara, Y. Ida, J. Arai,{' '}
              <b class="highlight-blue">
                <u>Mai Nishimura</u>
              </b>
              , S. Iwamura
            </span>
            <br />
            <b>Fast Algorithm for the Lasso based L1-Graph Construction</b>
            <br />
            <span class="highlight-red">
              Proceedings of the Very Large Data Bases (PVLDB), 2016
            </span>
          </p>
        </div>
      </div>
    </div>
  </>
)
