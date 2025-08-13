import { ProjectCard } from '@/components/project-card'
import { projects } from '@/data/work-data'

export function WorkSection() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text mb-4 font-serif text-4xl font-bold md:text-5xl">
            My Work
          </h2>
          <div className="bg-primary animate-shimmer mx-auto h-1 w-24 rounded-full" />
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            Explore my journey through innovative projects that solve real-world
            challenges
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
