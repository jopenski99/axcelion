// Portfolio data - extracted from old HTML and Vue components
export const portfolioData = {
    profile: {
        name: "John Paul Perez",
        title: "Technical Lead",
        description: "Specializing in building high-performance web architectures and leading cross-functional engineering teams. Focused on the intersection of technical excellence and user experience.",
        role: "Technical Lead & Senior Web Developer",
        experience: "10+ Years",
        location: "Global / Remote",
        status: "Open for collaboration",
    },

    techStack: [
        {
            id: "typescript",
            name: "TypeScript",
            icon: "terminal",
            description: "Strongly typed architecture for scalable apps."
        },
        {
            id: "react",
            name: "React/Next.js",
            icon: "developer_board",
            description: "Modern SSR and component-driven UIs."
        },
        {
            id: "node",
            name: "Node/GraphQL",
            icon: "database",
            description: "Performant backend API development."
        },
        {
            id: "aws",
            name: "AWS/DevOps",
            icon: "cloud",
            description: "Cloud-native infra and CI/CD pipelines."
        },
        {
            id: "tailwind",
            name: "Tailwind CSS",
            icon: "view_quilt",
            description: "Rapid, utility-first UI orchestration."
        },
        {
            id: "vue",
            name: "Vue/Nuxt",
            icon: "code",
            description: "Modern, reactive frontend frameworks."
        },
        {
            id: "security",
            name: "Web Security",
            icon: "security",
            description: "OAuth, JWT, and pen-testing protocols."
        },
        {
            id: "leadership",
            name: "Team Leadership",
            icon: "groups",
            description: "Mentoring & Agile sprint management."
        }
    ],

    projects: [
        {
            id: 1,
            number: "01",
            category: "FINANCE TECHNOLOGY",
            title: "JAAIMS & JAACS",
            description: "Jaaims is an automated online trading application that analyses, predicts and makes calculated trades on your behalf on shares you choose to trade. By using a sophisticated artificial intelligence algorithm, Jaaims automatically buys and sells shares removing the emotion associated with making trading decisions yourself. We acknowledge the Traditional Custodians of Australia, and their continued connection to land, water and culture. We pay our respects to Elders past, present and emerging. ",
            image: "/assets/projects/jaaims.jpg",
            url: "https://jaaimsapp.com/", 
            impacts: [
                "Created JAACS for customer support.",
                "Refined UI for user experience.",
                "Managed AWS infrastructure.",
                "Fixed bugs and optimized performance."
            ],
            tags: ["Vue", "AWS Services", "Quasar Framework"],
            caseStudyUrl: "#"
        },
        {
            id: 2,
            number: "02",
            category: "COMMUNITY AND APARTMENT MANAGEMENT",
            title: "Codev - Quext",
            description: "Quext was built to modernize the apartment experience from the ground up. Instead of offering disconnected tools, we created an integrated ecosystem that brings together smart home automation, managed WiFi, energy intelligence, and AI-driven insights, all purpose-built for multifamily communities. Our approach is simple but powerful: technology should work quietly in the background, making life easier for residents and operations more efficient for owners and operators. From day one, we focused on building scalable, secure, and future-ready solutions that elevate both the resident experience and asset performance.",
            image: "/assets/projects/quext.jpg",
            url: "https://onequext.com/",
            impacts: [
                "Pioneered the backend for leads service.",
                "Implemented Auth and security integrations.",
                "Faceted cross-team collaboration for feature delivery.",
            ],
            tags: ["Vue", "Laravel", "Microservices"],
            caseStudyUrl: "https://onequext.com/category/case-studies/"
        },
        {
            id: 3,
            number: "03",
            category: "LABOR SHARING PLATFORM",
            title: "Eversun - ConX",
            description: "The first fully integrated labor-sharing ecosystem. We turn your fixed labor liabilities into flexible, revenue-generating assets.",
            image: "/assets/projects/conx.jpg",
            url: "https://conx-usa.com/",
            impacts: [
                "Pioneered the core functionality for labor marketplace.",
                "Led development of core labor marketplace features.",
                "Established the Database structure.",
                "Optimized platform performance and scalability.",
            ],
            tags: ["Nuxt", "Laravel", "Devops"],
            caseStudyUrl: "#"
        },
        {
            id: 4,
            number: "04",
            category: "HR AND PAYROLL SOFTWARE",
            title: "POSbang - WittyManager",
            description: "Overall, Witty's platform empowered the firm to optimize its service delivery, leading to better client outcomes, improved operational efficiency, and strengthened competitive advantage in the management services industry.",
            image: "/assets/projects/wittymanager.jpg",
            url: "https://wittymanager.com/",
            impacts: [
                "Delivered few key features",
                "Optimized database queries for performance.",
                "Collaborated on UI/UX improvements.",
            ],
            tags: ["Vue", "PHPYii2", "Devops"],
            caseStudyUrl: "#"
        },
    ],

    contact: {
        email: "jopenski99@gmail.com",
        social: [
            {
                name: "GitHub",
                icon: "terminal",
                url: "https://github.com/jopenski99",
                label: "github.com/jopenski99"
            },
            {
                name: "LinkedIn",
                icon: "link",
                url: "https://linkedin.com/in/john-paul-perez-123456789",
                label: "linkedin.com/in/john-paul-perez-123456789"
            },
            {
                name: "Email",
                icon: "mail",
                url: "mailto:jopenski99@gmail.com",
                label: "jopenski99@gmail.com"
            }
        ]
    },

    footer: {
        year: 2026,
        version: "2.4.0",
        status: "All systems operational"
    }
}
