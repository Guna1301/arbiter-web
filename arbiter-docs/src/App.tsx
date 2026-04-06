import DocsRoutes from "./routes/DocsRoutes"
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div>
      <DocsRoutes />
      <Analytics />
    </div>
  )
}