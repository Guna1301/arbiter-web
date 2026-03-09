import { docsNav } from "./docsConfig"

type Page = {
  title: string
  path: string
}

export function getAllDocsPages(): Page[] {
  return docsNav.flatMap(section => section.items)
}

export function getPrevNext(pathname: string) {
  const pages = getAllDocsPages()

  const index = pages.findIndex(p => p.path === pathname)

  return {
    prev: index > 0 ? pages[index - 1] : null,
    next: index < pages.length - 1 ? pages[index + 1] : null
  }
}