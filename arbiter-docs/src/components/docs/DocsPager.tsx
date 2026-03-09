import { Link, useLocation } from "react-router-dom"
import { getPrevNext } from "../../lib/docsNavigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function DocsPager() {
  const location = useLocation()

  const { prev, next } = getPrevNext(location.pathname)

  return (
    <div className="flex justify-between mt-16 border-t border-zinc-800 pt-6">

      {prev ? (
        <Link
          to={prev.path}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
        >
          <ChevronLeft size={16} />
          {prev.title}
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          to={next.path}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
        >
          {next.title}
          <ChevronRight size={16} />
        </Link>
      )}

    </div>
  )
}