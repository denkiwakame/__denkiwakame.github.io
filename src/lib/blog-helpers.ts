export const getBlogLink = (slug: string) => {
  return `/blog/${slug}`
}

// XXX
export const getAbsBlogLink = (slug: string) => {
  return `https://denkiwakame.github.io${getBlogLink(slug)}`
}

export const getDateStr = date => {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}

export const getDateMD = date => {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
  })
}

export const getDateYear = date => {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
  })
}

export const postIsPublished = (post: any) => {
  return post.Published === 'Yes'
}

export const normalizeSlug = slug => {
  if (typeof slug !== 'string') return slug

  let startingSlash = slug.startsWith('/')
  let endingSlash = slug.endsWith('/')

  if (startingSlash) {
    slug = slug.substr(1)
  }
  if (endingSlash) {
    slug = slug.substr(0, slug.length - 1)
  }
  return startingSlash || endingSlash ? normalizeSlug(slug) : slug
}
