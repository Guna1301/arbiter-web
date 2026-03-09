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
      <div className="flex min-h-screen bg-zinc-950 text-zinc-100">

        <DocsSidebar />

        <main className="flex-1 px-12 py-10 max-w-4xl min-w-0 flex flex-col justify-between">

          <article className="prose prose-invert max-w-none">
            <Outlet />
          </article>

          <DocsPager />

        </main>

        <TableOfContents />

      </div>
    </MDXProvider>
  )
}