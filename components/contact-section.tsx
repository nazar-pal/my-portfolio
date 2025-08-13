import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-shimmer" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next
            project
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Looking for a skilled developer to build fast-performing,
            user-friendly applications? Need consultation on your next project?
            I&apos;m available for remote work and open to relocation.
            Let&apos;s discuss how I can help bring your ideas to life!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              asChild
              className="btn-primary px-8 py-4 text-lg animate-pulse-glow"
            >
              <a href="mailto:ua.nazar.palamarchuk.ua@gmail.com">
                <Mail className="mr-2" size={20} />
                ua.nazar.palamarchuk.ua@gmail.com
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-border hover:bg-accent transition-all duration-300 hover-lift bg-transparent"
            >
              <a href="tel:+380973328210">📞 +380-97-332-82-10</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent transition-all duration-300 hover-lift bg-transparent"
            >
              <a
                href="https://github.com/nazar-pal"
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
              className="border-border hover:bg-accent transition-all duration-300 hover-lift bg-transparent"
            >
              <a
                href="https://linkedin.com/in/naz-pal"
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
