import { ProjectCard } from '@/components/project-card'
import { projects } from '@/data/work-data'

export function WorkSection() {
  return (
    <section id="work" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Work
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-shimmer" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
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
