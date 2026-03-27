import { Outlet } from "react-router-dom"
import DocsSidebar from "../components/docs/DocsSidebar"
import TableOfContents from "../components/docs/TableOfContents"
import DocsPager from "../components/docs/DocsPager"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/docs/CodeBlock"
import Heading from "../components/docs/Heading"

type PreProps = {
  children?: React.ReactElement<{ className?: string; children?: string }>
}

const components = {
  pre: ({ children }: PreProps) => {
    const language =
      children?.props?.className?.replace("language-", "") ?? "javascript"

    const code = children?.props?.children ?? ""

    return <CodeBlock language={language} code={code} />
  },

  h2: (props: { children: React.ReactNode }) => {
    const text = String(props.children)

    const id = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")

    return <Heading id={id}>{props.children}</Heading>
  },
}


export default function DocsLayout() {
  return (
    <MDXProvider components={components}>
      <div className="relative flex min-h-screen bg-zinc-950 text-zinc-100">
        
        <DocsSidebar />

        <div className="flex flex-1 min-w-0 justify-center">
          <main className="w-full max-w-4xl px-6 py-10 md:px-12 flex flex-col flex-1">
            
            <div className="h-14 md:hidden" /> 

            <article className="prose prose-invert max-w-none flex-1">
              <Outlet />
            </article>

            <div className="mt-auto pt-12">
              <DocsPager />
            </div>
            
          </main>

          <aside className="hidden xl:block w-64 shrink-0 px-6 py-10 sticky top-0 h-screen">
            <TableOfContents />
          </aside>
        </div>

      </div>
    </MDXProvider>
  )
}