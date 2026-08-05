import type { Metadata } from 'next'
import { Suspense } from 'react'
// import { READEST_WEB_BASE_URL, SHARE_BASE_URL } from '@/services/constants'
// import { resolveActiveShare } from '@/libs/shareServer'
import ShareLanding from './ShareLanding'

// Server-rendered metadata for chat unfurls. Lives on the page (not the
// layout) because Next only passes `searchParams` to page-level
// `generateMetadata` — layout metadata is shared across child pages and
// can't see the query string.
//
// In the Tauri build (output: 'export'), this whole route is dropped because
// rewrites and dynamic metadata require a server. Tauri intercepts the
// readest://share/{token} deep link before /s ever loads.

// interface PageProps {
//   searchParams: Promise<Record<string, string | string[] | undefined>>
// }

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Open in Readest',
    description: 'Open-source ebook reader for everyone, on every device.',
  }
}

export default function Page() {
  // Client child uses useSearchParams, which Next 16 requires to be wrapped
  // in Suspense. Mirrors src/app/o/page.tsx.
  return (
    <Suspense fallback={null}>
      <ShareLanding />
    </Suspense>
  )
}
