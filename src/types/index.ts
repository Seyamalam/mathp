export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  section: string;
}

export interface Slide {
  id: number;
  title: string;
  presenter: TeamMember;
}

