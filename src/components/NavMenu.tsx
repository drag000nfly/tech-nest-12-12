import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'

interface NavMenuProps {
  className?: string
}

interface MenuItem {
  label: string
  href: string
  subItems?: {
    section: string
    items: {
      label: string
      href: string
    }[]
  }[]
}

const menuItems: MenuItem[] = [
  {
    label: 'Guides',
    href: '/best',
    subItems: [
      {
        section: 'Test Prep',
        items: [
          { label: 'Best MCAT Prep Courses', href: '/best/mcat-prep-courses' },
          { label: 'Best LSAT Prep Courses', href: '/best/lsat-prep-courses' },
          { label: 'Best GRE Prep Courses', href: '/best/gre-prep-courses' },
          { label: 'Best GMAT Prep Courses', href: '/best/gmat-prep-courses' },
        ],
      },
      {
        section: 'Professional Licensure',
        items: [
          { label: 'Best CPA Review Courses', href: '/best/cpa-review-courses' },
          { label: 'Best Bar Prep Courses', href: '/best/bar-prep-courses' },
        ],
      },
      {
        section: 'Language Learning',
        items: [
          { label: 'Best Spanish Learning Apps', href: '/best/spanish-learning-apps' },
          { label: 'Best Japanese Learning Apps', href: '/best/japanese-learning-apps' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    subItems: [
      {
        section: 'Test Preparation',
        items: [
          { label: 'What Is A Good DAT Score?', href: '/resources/what-is-a-good-dat-score' },
          { label: 'What To Bring To The GMAT', href: '/resources/what-to-bring-to-the-gmat' },
          { label: 'When To Take The LSAT', href: '/resources/when-to-take-the-lsat' },
        ],
      },
      {
        section: 'Language Learning',
        items: [
          { label: 'Best Way To Learn Spanish', href: '/resources/best-way-to-learn-spanish' },
          { label: 'French vs German', href: '/resources/french-vs-german' },
          { label: 'Stages of Learning A Language', href: '/resources/stages-learning-language' },
        ],
      },
      {
        section: 'Study Tips',
        items: [
          { label: 'Healthy Study Habits', href: '/resources/healthy-study-habits' },
          { label: 'Optimize Learning', href: '/resources/optimize-learning' },
          { label: 'Successful Student', href: '/resources/successful-student' },
        ],
      },
    ],
  },
  {
    label: 'Reviews',
    href: '/reviews',
    subItems: [
      {
        section: 'Test Prep',
        items: [
          { label: 'MCAT Prep Course Reviews', href: '/reviews/mcat' },
          { label: 'LSAT Prep Course Reviews', href: '/reviews/lsat' },
          { label: 'GRE Prep Course Reviews', href: '/reviews/gre' },
        ],
      },
      {
        section: 'Professional',
        items: [
          { label: 'CPA Review Course Reviews', href: '/reviews/cpa' },
          { label: 'Bar Prep Course Reviews', href: '/reviews/bar' },
        ],
      },
      {
        section: 'Languages',
        items: [
          { label: 'Spanish Learning App Reviews', href: '/reviews/spanish' },
          { label: 'Japanese Learning App Reviews', href: '/reviews/japanese' },
        ],
      },
    ],
  },
  {
    label: 'Comparisons',
    href: '/comparisons',
    subItems: [
      {
        section: 'Test Prep',
        items: [
          { label: 'Blueprint vs Kaplan MCAT', href: '/comparisons/blueprint-vs-kaplan-mcat' },
          { label: '7Sage vs LSAT Max', href: '/comparisons/7sage-vs-lsat-max' },
        ],
      },
      {
        section: 'Professional',
        items: [
          { label: 'Becker vs Roger CPA', href: '/comparisons/becker-vs-roger-cpa' },
          { label: 'Barbri vs Kaplan Bar', href: '/comparisons/barbri-vs-kaplan-bar' },
        ],
      },
      {
        section: 'Languages',
        items: [
          { label: 'Babbel vs Duolingo', href: '/comparisons/babbel-vs-duolingo' },
          { label: 'Rosetta Stone vs Pimsleur', href: '/comparisons/rosetta-stone-vs-pimsleur' },
        ],
      },
    ],
  },
]

export default function NavMenu({ className = "" }: NavMenuProps) {
  const [openItem, setOpenItem] = useState<string | null>(null)
  
  // Handle escape key press
  const handleKeyDown = (event: globalThis.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpenItem(null)
    }
  }

  // Handle click outside
  const handleClickOutside = (event: globalThis.MouseEvent) => {
    if (!(event.target as Element).closest('.nav-menu-container')) {
      setOpenItem(null)
    }
  }

  // Add/remove event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <nav className={`${className} nav-menu-container`} role="navigation" aria-label="Main navigation">
      {menuItems.map((item) => (
        <div key={item.label} className="relative group w-full">
          <Button
            variant="ghost"
            className="text-white hover:text-gray-200 w-full justify-start"
            onClick={() => setOpenItem(openItem === item.label ? null : item.label)}
            aria-expanded={openItem === item.label}
            aria-haspopup="true"
            aria-controls={`submenu-${item.label}`}
            onKeyDown={(e: ReactKeyboardEvent<HTMLButtonElement>) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setOpenItem(openItem === item.label ? null : item.label)
              } else if (e.key === 'ArrowDown' && item.subItems) {
                e.preventDefault()
                setOpenItem(item.label)
              } else if (e.key === 'ArrowRight') {
                const nextButton = e.currentTarget.parentElement?.nextElementSibling?.querySelector('button')
                nextButton?.focus()
              } else if (e.key === 'ArrowLeft') {
                const prevButton = e.currentTarget.parentElement?.previousElementSibling?.querySelector('button')
                prevButton?.focus()
              }
            }}
          >
            <Link to={item.href}>{item.label}</Link>
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${openItem === item.label ? 'rotate-180' : ''}`} />
          </Button>

          {item.subItems && openItem === item.label && (
            <div 
              id={`submenu-${item.label}`}
              className={`${className.includes('flex-col') ? 'relative' : 'absolute'} left-0 mt-2 w-64 bg-white rounded-md shadow-lg transition-all duration-200 ease-in-out`}
              role="menu"
              aria-orientation={className.includes('flex-col') ? 'vertical' : 'horizontal'}>
              {item.subItems.map((section) => (
                <div key={section.section} className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{section.section}</h3>
                  <ul className="space-y-2">
                    {section.items.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          to={subItem.href}
                          className="text-gray-700 hover:text-blue-700 block"
                          onClick={() => setOpenItem(null)}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
