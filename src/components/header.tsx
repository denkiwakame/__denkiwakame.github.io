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

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Mai Nishimura</title>
        <meta name="description" content="Mai Nishimura, a research engineer" />
        <meta name="og:title" content="Mai Nishimura" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@denkiwakame" />
        <meta
          name="twitter:card"
          content="Mai Nishimura - a Research Engineer"
        />
        <meta name="twitter:image" content={ogImageUrl} />
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
