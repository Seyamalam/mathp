export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface ThemeConfig {
  name: string
  description: string
  mainNav: MainNavItem[]
  links: {
    github: string
  }
}

