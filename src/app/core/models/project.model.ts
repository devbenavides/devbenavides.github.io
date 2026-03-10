export interface Project {
    id: number;
    title: string;
    description: string;
    keyFeatures: string[];
    technologies: string[];
    images: CarouselImage[];
    githubBackend?: string;
    githubFrontend?: string;
    demo?: string;
}
