const APP_VERSION = '1.0.0'

const techStack = [
  { name: 'React', detail: 'UI library' },
  { name: 'TypeScript', detail: 'Type safety' },
  { name: 'Vite', detail: 'Build tool' },
  { name: 'Tailwind CSS', detail: 'Styling' },
]

const pipelineStages = [
  { name: 'Checkout', description: 'Pull source from Git' },
  { name: 'Install', description: 'npm install dependencies' },
  { name: 'Lint', description: 'npm run lint' },
  { name: 'Build', description: 'npm run build' },
  { name: 'Deploy', description: 'Ship build to EC2' },
]

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 font-bold">
              J
            </div>
            <span className="text-lg font-semibold">Jenkins Practice Lab</span>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            v{APP_VERSION}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Vite + React + Tailwind on EC2
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            A small playground app for practicing Git commits and building a
            Jenkins CI/CD pipeline end to end.
          </p>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-sm font-semibold text-slate-400">Tech Stack</h2>
            <ul className="mt-3 space-y-2">
              {techStack.map((tech) => (
                <li key={tech.name} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-100">{tech.name}</span>
                  <span className="text-slate-500">{tech.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-sm font-semibold text-slate-400">Deployment Status</h2>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Environment</span>
                <span className="font-medium">EC2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Build</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                  Passing
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Version</span>
                <span className="font-mono text-slate-300">{APP_VERSION}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-sm font-semibold text-slate-400">Pipeline Stages</h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-5">
            {pipelineStages.map((stage, index) => (
              <li
                key={stage.name}
                className="rounded-lg border border-slate-800 bg-slate-950 p-3"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-slate-300">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium">{stage.name}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{stage.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        Edit src/App.tsx, commit, and watch your Jenkins pipeline run.
      </footer>
    </div>
  )
}

export default App
