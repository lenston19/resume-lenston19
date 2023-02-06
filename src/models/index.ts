export interface ISkill {
  src: string
  alt: string
}
export interface ILink {
  url: string
  type: string
  icon: string
}
export interface IHackathon {
  name: string
  year: string
}

export interface IProjectContent {
  url: string
  github: string
  description: string
  contribution: string
  technologies: string

}

export interface IProject {
  id: number
  name: string
  content: IProjectContent
}
