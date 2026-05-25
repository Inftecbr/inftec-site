import { useEffect } from 'react'
import { COMPANY } from '../lib/constants'

type PageMetaProps = {
  title: string
  description: string
  path?: string
}

function ensureMeta(attributes: Record<string, string>, content: string) {
  const key = attributes.property ?? attributes.name ?? ''
  const attrName = attributes.property ? 'property' : 'name'
  const selector = `meta[${attrName}="${key}"]`
  let el = document.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    Object.entries(attributes).forEach(([k, v]) => el!.setAttribute(k, v))
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function ensureCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

export default function PageMeta({ title, description, path = '' }: PageMetaProps) {
  useEffect(() => {
    document.title = title

    ensureMeta({ name: 'description' }, description)
    ensureMeta({ property: 'og:title' }, title)
    ensureMeta({ property: 'og:description' }, description)
    ensureMeta({ property: 'og:image' }, COMPANY.ogImage)
    ensureMeta({ name: 'twitter:image' }, COMPANY.ogImage)

    const canonicalPath = path || '/'
    const canonicalUrl =
      canonicalPath === '/' ? `${COMPANY.siteUrl}/` : `${COMPANY.siteUrl}${canonicalPath}`
    ensureCanonical(canonicalUrl)
    ensureMeta({ property: 'og:url' }, canonicalUrl)
  }, [title, description, path])

  return null
}
