import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'ABOUT', page: '/' },
  { label: 'BLOG', page: '/blog' },
]

const ogImageUrl = 'https://avatars0.githubusercontent.com/u/1871262?s=400'

export default ({ titlePre = '', title = '', description = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>
          {titlePre ? `${titlePre} | ` : ''}
          {title ? `${title}` : 'denkiwakame'}
        </title>
        <meta
          name="og:description"
          content={
            description
              ? `${description}`
              : 'computer vision, GPU-accelerated machine learning, and vim'
          }
        />
        <meta
          name="og:title"
          content={
            (titlePre ? `${titlePre} |` : '') +
            (title ? `${title}` : 'denkiwakame')
          }
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@denkiwakame" />
        <meta name="twitter:creator" content="@denkiwakame" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://denkiwakame.github.io" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡️</text></svg>"
        />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
