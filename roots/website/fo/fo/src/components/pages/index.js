import Home01 from './Home01'
import Home02 from './Home02'
import Home03 from './Home03'
import Home04 from './Home04'
import Home05 from './Home05'
import Home06 from './Home06'
import Home07 from './Home07'
import AboutUs from './AboutUs'
import Services from './Services'
import ServicesSingle from './ServicesSingle'
import Case from './Case'
import CaseV2 from './CaseV2'
import CaseSingleV1 from './CaseSingleV1'
import CaseSingleV2 from './CaseSingleV2'
import Blog from './Blog'
import BlogV2 from './BlogV2'
import BlogSingle from './BlogSingle'
import History from './History'
import Partner from './Partner'
import TeamV1 from './TeamV1'
import TeamV2 from './TeamV2'
import Contact from './Contact'

const routes = [
    { path: '/', component: Home01},
    { path: '/index-v2', component: Home02},
    { path: '/index-v3', component: Home03},
    { path: '/index-v4', component: Home04},
    { path: '/index-v5', component: Home05},
    { path: '/index-v6', component: Home06},
    { path: '/index-v7', component: Home07},
    { path: '/overview', component: AboutUs},
    { path: '/services', component: Services},
    { path: '/services-single', component: ServicesSingle},
    { path: '/Case-v1', component: Case},
    { path: '/Case-v2', component: CaseV2},
    { path: '/case-single-v1', component: CaseSingleV1},
    { path: '/case-single-v2', component: CaseSingleV2},
    { path: '/blog', component: Blog},
    { path: '/blog-v2', component: BlogV2},
    { path: '/blog-single', component: BlogSingle},
    { path: '/history', component: History},
    { path: '/partner', component: Partner},
    { path: '/team-v1', component: TeamV1},
    { path: '/team-v2', component: TeamV2},
    { path: '/contact-v1', component: Contact},
    
    
]

export default routes;