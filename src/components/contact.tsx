import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/denkiwakame',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/denkiwakame',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/mai-nishimura-86930b62/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:denkivvakame@gmail.com?subject=[from denkiwakame.github.io]',
  },
]

export default () => (
  <div className={sharedStyles.layout}>
    <h1>Mai Nishimura</h1>
    <div className={contactStyles.links}>
      {contacts.map(({ Comp, link, alt }) => {
        return (
          <ExtLink key={link} href={link} aria-label={alt}>
            <Comp height={32} />
          </ExtLink>
        )
      })}
    </div>
  </div>
)
