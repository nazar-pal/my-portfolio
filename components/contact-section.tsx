import { Button } from '@/components/ui/button'
import { env } from '@/env'
import { Github, Linkedin, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text mb-4 font-serif text-4xl font-bold md:text-5xl">
            Get in Touch
          </h2>
          <div className="bg-primary animate-shimmer mx-auto h-1 w-24 rounded-full" />
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            Ready to bring your ideas to life? Let&apos;s discuss your next
            project
          </p>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
            Looking for a skilled developer to build fast-performing,
            user-friendly applications? Need consultation on your next project?
            I&apos;m available for remote work and open to relocation.
            Let&apos;s discuss how I can help bring your ideas to life!
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              asChild
              className="btn-primary animate-pulse-glow px-8 py-4 text-lg"
            >
              <a href={`mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
                <Mail className="mr-2" size={20} />
                {env.NEXT_PUBLIC_CONTACT_EMAIL}
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-border hover:bg-accent hover-lift bg-transparent transition-all duration-300"
            >
              <a href={`tel:${env.NEXT_PUBLIC_CONTACT_PHONE_E164}`}>
                📞 {env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY}
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent hover-lift bg-transparent transition-all duration-300"
            >
              <a
                href={env.NEXT_PUBLIC_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent hover-lift bg-transparent transition-all duration-300"
            >
              <a
                href={env.NEXT_PUBLIC_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
