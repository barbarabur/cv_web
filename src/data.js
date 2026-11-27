export const perfil = {
  nombre: "Bárbara González",
  titulo: "Desarrolladora Web",
  sobreMi:
    "Fotógrafa reconvertida en desarrolladora web, me apasiona conectar la parte técnica con el diseño visual. Vengo de trabajar en entornos dinámicos y creativos, donde me he encargado de flujos de trabajo digitales, gestión de proyectos, diseño conceptual y el trato directo con clientes. Me gusta buscar soluciones prácticas a los problemas y busco un equipo en el que aportar esta combinación de técnica y criterio estético.",
  contacto: {
    telefono: "676 338 354",
    email: "gonzalezperez.barbara@gmail.com",
    linkedin: "https://www.linkedin.com/in/barbara-gonzalez-perez/",
    github: "https://github.com/barbarabur",
  },
};

export const aptitudes = [
  {
    titulo: "Habilidades Técnicas",
    items: [
      "Lenguajes y tecnologías: JavaScript, TypeScript, Node.js, PHP, AWS, HTML, CSS",
      "Frameworks: React, Redux, Angular, Laravel",
      "Bases de datos: SQL",
      "Control de versiones: GitHub, GitLab",
      "Herramientas: Trello, Notion",
      "Plataformas y ERPs: Microsoft Dynamics 365 Business Central, Holded",
      "Metodologías: TDD, Certified Scrum developer (CSD), Design Thinking",
      "Diseño: Adobe Creative Suite, Figma",
    ],
  },
  {
    titulo: "Competencias Profesionales",
    items: [
      "Gestión de proyectos",
      "Coordinación de equipos",
      "Organización y planificación",
      "Atención al detalle",
      "Comunicación y trabajo en equipo",
    ],
  },
  { titulo: "Idiomas", items: ["Inglés: B2", "Valenciano: B2"] },
  { titulo: "Otros", items: ["Vehículo propio"] },
];

export const experiencia = [
  {
    empresa: "Sopra Steria",
    puesto: "Prácticas formativas",
    lugar: "Valencia",
    fechas: "Mar 2026 - may 2026",
    tareas: ["Desarrollo front-end de aplicaciones utilizando Angular, React, JavaScript, TypeScript, Tailwind y Bootstrap. Integración con APIs y creación de tests"],
  },
  {
    empresa: "Saltarinas S.L.",
    puesto: "Gestión de Proyectos",
    lugar: "Valencia",
    fechas: "Feb 2022 - Nov 2024",
    tareas: [
      "Planificación y seguimiento de proyectos.",
      "Coordinación de equipos multidisciplinares con metodologías organizativas.",
      "Gestión administrativa, tramitación de licitaciones, documentación técnica y justificaciones.",
    ],
  },
  {
    empresa: "Estudio Fotográfico Carlos Gutiérrez, Attitude Fotografía, Arena Studio...",
    puesto: "Post-producción digital",
    lugar: "Valencia",
    fechas: "Jun 2008 - Feb 2022",
    tareas: [
      "Producción y postproducción digital orientada a resultados.",
      "Gestión integral de flujos digitales y coordinación del equipo de postproducción.",
      "Adaptación de contenidos a estándares técnicos y de plataforma.",
      "Maquetación, diseño y optimización de material digital.",
      "Soporte operativo en procesos creativos y tecnológicos.",
    ],
  },
];

export const educacion = [
  { titulo: "C.F.G.S. Desarrollo Aplicaciones Web", 
    centro: "CEED-CV", 
    fechas: "Sept 2021 - 2026" },
  {
    titulo: "Licenciatura Comunicación Audiovisual",
    centro: "Universitat Politècnica de València",
    fechas: "Sept 2001 - Jun 2006",
  },
  { titulo: "C.F.G.S Imagen", 
    centro: "Colegio Juan Comenius", 
    fechas: "Sept 1999 - Jun 2001" },
];

export const contenido = {
  es: {
    perfil,
    aptitudes,
    experiencia,
    educacion,
    titulos: {
      sobreMi: "_SOBRE_MI",
      aptitudes: "_APTITUDES",
      experiencia: "_EXPERIENCIA_LABORAL",
      educacion: "_EDUCACIÓN",
      menu: {
        perfil: "Sobre mí",
        aptitudes: "Aptitudes",
        educacion: "Educación",
        experiencia: "Experiencia",
        proyectos: "Proyectos",
      },
      idioma: "English version",
      proyectos: "_PROYECTOS_PERSONALES",
    },
    proyectos: {
      descripcion: "A continuación podéis visitar los diferentes proyectos que he hecho mientras estaba estudiando.",
      items: [
        {
          nombre: "Bressolium",
          imagen: "",
          url: "https://github.com/Michelle-Sebi/Bressolium",
        },
        {
          nombre: "Cocina para intolerantes",
          imagen: "",
          url: "https://github.com/barbarabur/cocina-para-intolerantes-DIW",
        },
      ],
    },
  },
  en: {
    perfil: {
      nombre: "Bárbara González",
      titulo: "Web Developer",
      sobreMi:
        "Photographer turned web developer. I am passionate about connecting the technical side with visual design. I come from dynamic and creative environments where I have worked with digital workflows, project management, conceptual design and direct client communication. I enjoy finding practical solutions and would like to join a team where I can contribute this combination of technical skill and aesthetic judgement.",
      contacto: {
        telefono: "676 338 354",
        email: "gonzalezperez.barbara@gmail.com",
        linkedin: "https://www.linkedin.com/in/barbara-gonzalez-perez/",
        github: "https://github.com/barbarabur",
      },
    },
    aptitudes: [
      {
        titulo: "Technical Skills",
        items: [
          "Languages and technologies: JavaScript, TypeScript, Node.js, PHP, AWS, HTML, CSS",
          "Frameworks: React, Redux, Angular, Laravel",
          "Databases: SQL",
          "Version control: GitHub, GitLab",
          "Tools: Trello, Notion",
          "Platforms and ERPs: Microsoft Dynamics 365 Business Central, Holded",
          "Methodologies: TDD, Certified Scrum Developer (CSD), Design Thinking",
          "Design: Adobe Creative Suite, Figma",
        ],
      },
      {
        titulo: "Professional Skills",
        items: [
          "Project management",
          "Team coordination",
          "Organisation and planning",
          "Attention to detail",
          "Communication and teamwork",
        ],
      },
      { titulo: "Languages", items: ["English: B2", "Valencian: B2"] },
      { titulo: "Other", items: ["Own vehicle"] },
    ],
    experiencia: [
      {
        empresa: "Sopra Steria",
        puesto: "Internship",
        lugar: "Valencia",
        fechas: "Mar 2026 - May 2026",
        tareas: ["Front-end application development using Angular, React, JavaScript, TypeScript, Tailwind and Bootstrap.  API integration and coverage tests"],
      },
      {
        empresa: "Saltarinas S.L.",
        puesto: "Project Management",
        lugar: "Valencia",
        fechas: "Feb 2022 - Nov 2024",
        tareas: [
          "Project planning and monitoring.",
          "Coordination of multidisciplinary teams using organisational methodologies.",
          "Administrative management, tender procedures, technical documentation and reporting.",
        ],
      },
      {
        empresa: "Estudio Fotográfico Carlos Gutiérrez, Attitude Fotografía, Arena Studio...",
        puesto: "Digital post-production",
        lugar: "Valencia",
        fechas: "Jun 2008 - Feb 2022",
        tareas: [
          "Digital production and post-production focused on results.",
          "Digital workflow management and coordination of the post-production team.",
          "Content adaptation to technical and platform standards.",
          "Layout, design and optimisation of digital material.",
          "Operational support for creative and technological processes.",
        ],
      },
    ],
    educacion: [
      {
        titulo: "Higher Technical Certificate in Web Application Development",
        centro: "CEED-CV",
        fechas: "Sep 2021 - 2026",
      },
      {
        titulo: "Bachelor's Degree in Audiovisual Communication",
        centro: "Universitat Politècnica de València",
        fechas: "Sep 2001 - Jun 2006",
      },
      {
        titulo: "Higher Technical Certificate in Image",
        centro: "Colegio Juan Comenius",
        fechas: "Sep 1999 - Jun 2001",
      },
    ],
    titulos: {
      sobreMi: "_ABOUT_ME",
      aptitudes: "_SKILLS",
      experiencia: "_WORK_EXPERIENCE",
      educacion: "_EDUCATION",
      menu: {
        perfil: "About me",
        aptitudes: "Skills",
        educacion: "Education",
        experiencia: "Experience",
        proyectos: "Projects",
      },
      idioma: "Versión española",
      proyectos: "_PERSONAL_PROJECTS",
    },
    proyectos: {
      descripcion: "Below you can visit the different projects I have made while studying.",
      items: [
        {
          nombre: "Bressolium",
          imagen: "",
          url: "https://github.com/Michelle-Sebi/Bressolium",
        },
        {
          nombre: "Cooking for intolerances",
          imagen: "",
          url: "https://github.com/barbarabur/cocina-para-intolerantes-DIW",
        },
      ],
    },
  },
};
