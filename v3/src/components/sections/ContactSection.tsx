import { useState } from 'react'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@dineshwadhwani.com',
    href: 'mailto:contact@dineshwadhwani.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 • Available on request',
    href: '#',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India • Global Engagements',
    href: '#',
  },
]

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/dineshkwadhwani/',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com',
    label: 'Twitter',
  },
]

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    toast({
      title: 'Message received',
      description:
        'Thank you for reaching out. I will review your message and respond shortly.',
    })

    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-x-hidden py-20 md:py-32 bg-secondary/30"
    >
      <div className="container px-6 max-w-full">
        <div className="max-w-6xl mx-auto min-w-0">
          {/* Header */}
          <div className="text-center mb-14 px-2">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let’s Build <span className="text-primary">Impactful Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in AI platforms, cloud-scale systems, or engineering
              leadership? I’m always open to meaningful conversations.
            </p>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-w-0">
            {/* Form */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 max-w-full overflow-hidden min-w-0">
              <h3 className="text-2xl font-semibold mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="min-w-0">
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    rows={5}
                    placeholder="Briefly describe your idea, challenge, or opportunity…"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8 max-w-full overflow-hidden min-w-0">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors min-w-0 max-w-full overflow-hidden"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="font-medium truncate">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Connect
                </h4>

                <div className="flex flex-wrap gap-4 min-w-0">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 max-w-full overflow-hidden">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shrink-0" />
                  <span className="font-semibold">
                    Open to strategic conversations
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Available for leadership roles, advisory engagements,
                  and high-impact engineering initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-6 text-center text-sm text-muted-foreground border-t border-border bg-background/50 backdrop-blur-sm hidden md:block">
        © {new Date().getFullYear()} Dinesh Wadhwani. Built with{' '}
        <span className="text-primary">❤</span> using React & TailwindCSS
      </div>
    </section>
  )
}
