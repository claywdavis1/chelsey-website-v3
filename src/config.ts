import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Public Impact Partners",
  logo: "/logo2.webp",
  email: "chelsey@publicimpactpartners.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/TimWitzdam",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:chelsey@publicimpactpartners.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Public Impact Partners",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Homelessness and Continuum of Care Consulting",
  description:
    "We primarily provide technical assistance and consulting for organiztions working in homelessness. We provide governments, non-profits, and continuum's of care (COCs) with evidence based approaches to fight and end homelessness. Public Impact Partners also provides research and technical document creation.",
  socialLinks: socialLinks,
  links: [
    {
      title: "About",
      url: "/about",
    },{
      title: "Services",
      url: "/services",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Public Impact Partners",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Tim Witzdam, a full time student from Germany who also loves building cool things using code.
<br/><br/>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat est architecto tempora voluptatem sit suscipit aspernatur? <br/><br/>
Facere quibusdam reiciendis, distinctio sunt praesentium error accusantium consectetur nemo vero officia itaque.`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2021 - Present",
      },
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2019 - 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Public Impact Partners",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
