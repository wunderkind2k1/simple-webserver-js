export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="z-10 max-w-xl w-full text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            This is a Beforeprod preview
          </h1>

          <span className="inline-block rounded-full border border-slate-300 bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-900">
      Next.js
    </span>

          <h2 className="text-2xl font-semibold">
            A Next.js app, deployed from GitHub Actions for this PR.
          </h2>

          <p className="text-lg text-gray-600">
            Real HTTPS. Torn down when the PR closes.
          </p>

          <p className="text-base">
            <a
                href="https://beforeprod.com"
                className="underline underline-offset-4 hover:text-slate-900"
            >
              beforeprod.com
            </a>
            {" · "}
            Early access
          </p>
        </div>
      </main>
  )
}
