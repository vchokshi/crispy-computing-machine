const menus = [
    {
        id: 1,
        name: 'Home',
        linkmenu: '/',
        namesub: [
            {
                id: 1,
                sub: 'DevOps',
                links: '/',
                submenu: undefined
            },
            {
                id: 2,
                sub: 'Cybersecurity',
                links: '/index-v2',
                submenu: undefined
            },
            {
                id: 3,
                sub: 'CI/CD',
                links: '/index-v3',
                submenu: undefined
            },
            {
                id: 4,
                sub: 'CSPM',
                links: '/index-v4',
                submenu: undefined
            },
            {
                id: 5,
                sub: 'CNAPP',
                links: 'index-v5',
                submenu: undefined
            },
            {
                id: 6,
                sub: 'Scaled Agile Framework',
                links: '/index-v6',
                submenu: undefined
            },
            {
                id: 7,
                sub: 'Penetration Testing',
                links: '/index-v7',
                submenu: undefined
            }
        ]
    },
    {
        id: 2,
        name: 'About Us',
        linkmenu: '/overview',
    },
    {
        id: 3,
        name: 'Services',
        linkmenu: '/services',
        namesub:  [
            {
                id: 1,
                sub: 'Services',
                links: '/services',
                submenu: undefined
            },
            {
                id: 2,
                sub: 'Services Single',
                links: '/services-single',
                submenu: undefined
            }
        ],
    },
    {
        id: 4,
        name: 'Cases',
        linkmenu: '/case-v1',
        namesub: [
            {
                id: 1,
                sub: 'Case V1',
                links: '/case-v1',
                submenu: undefined
            },
            {
                id: 2,
                sub: 'Case V2',
                links: '/case-v2',
                submenu: undefined
            },
            {
                id: 3,
                sub: 'Case Single V1',
                links: '/case-single-v1',
                submenu: undefined
            },
            {
                id: 4,
                sub: 'Case Single V2',
                links: '/case-single-v2',
                submenu: undefined
            }
        ],
    },
    {
        id: 5,
        name: 'News',
        linkmenu: '/blog',
        namesub: [
            {
                id: 1,
                sub: 'Blog V1',
                links: '/blog',
                submenu: undefined
            },
            {
                id: 2,
                sub: 'Blog V2',
                links: '/blog-v2',
                submenu: undefined
            },
            {
                id: 3,
                sub: 'Blog Single',
                links: '/blog-single',
                submenu: undefined
            },


        ],
    },
    {
        id: 6,
        name: 'Pages',
        linkmenu: '/partner',
        namesub: [
            {
                id: 1,
                sub: 'History',
                links: '/history',
                submenu: undefined
            },
            {
                id: 2,
                sub: 'Partner',
                links: '/partner',
                submenu: undefined
            },
            {
                id: 3,
                sub: 'Team V1',
                links: '/team-v1',
                submenu: undefined
            },
            {
                id: 4,
                sub: 'Team V2',
                links: '/team-v2',
                submenu: undefined
            },
            {
                id: 5,
                sub: 'Overview',
                links: '/overview',
                submenu: undefined
            }
        ],
    },
    {
        id: 7,
        name: 'Contact Us',
        linkmenu: '/contact-v1',
    },
]

export default menus;
