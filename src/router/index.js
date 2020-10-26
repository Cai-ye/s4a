import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/what-we-do',
    name: 'what-we-do',
    component: () => import('../views/what we do/index.vue'),
    children: [
      {
        path: 'public/:year',
        name: 'professional-publiv-show',
        component: () => import('../views/what we do/PublicShow.vue')
      },
      {
        path: 'youth/:year',
        name: 'youth-theatre-programmes',
        component: () =>
          import('../views/what we do/YouthTheatreProgrammes.vue')
      },
      {
        path: 'school-touring/:year',
        name: 'school-touring-shows',
        component: () => import('../views/what we do/SchoolTouringShows.vue')
      },
      {
        path: 'collaborations/:year',
        name: 'collaborations',
        component: () => import('../views/what we do/Collaborations.vue')
      }
    ]
  },
  {
    path: '/annual/:contentId/:id',
    name: 'annual-gala',
    component: () => import('../views/gala/index.vue')
  },
  {
    path: '/apply',
    name: 'apply',
    component: () => import('../views/Apply.vue')
  },
  {
    path: '/media/:id',
    name: 'media',
    component: () => import('../views/Media')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import('../views/Testimonials')
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../views/Download')
  },
  {
    path: '/about',
    name: 'About',
    redirect: '/about/produce',
    component: () => import('../views/about/index.vue'),
    children: [
      {
        path: 'produce',
        name: 'Produce',
        component: () => import('../views/about/Produce.vue')
      },
      {
        path: 'chairman',
        name: 'Chairman',
        component: () => import('../views/about/Chairman.vue')
      },
      {
        path: 'members',
        name: 'Members',
        component: () => import('../views/about/Member.vue')
      },
      {
        path: 'art',
        name: 'Art',
        component: () => import('../views/about/ArtDirector.vue')
      },
      {
        path: 'team',
        name: 'Team',
        component: () => import('../views/about/Team.vue')
      },
      {
        path: 'volunteer',
        name: 'Volunteer',
        component: () => import('../views/about/Volunteer.vue')
      },
      {
        path: 'actor',
        name: 'Actor',
        component: () => import('../views/about/ActorLife.vue')
      }
    ]
  },
  {
    path: '/sponsors',
    name: 'sponsors',
    component: () => import('../views/Sponsors')
  },
  {
    path: '/contact',
    name: 'contact-us',
    component: () => import('../views/ContactUs')
  },
  {
    path: '/support',
    name: 'support-us',
    redirect: '/support/main',
    component: () => import('../views/support/index.vue'),
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('../views/support/Main.vue')
      },
      {
        path: 'single',
        name: 'one-off-donation',
        component: () => import('../views/support/Single.vue')
      },
      {
        path: 'project',
        name: 'project-sponsor',
        component: () => import('../views/support/Project.vue')
      },
      {
        path: 'soliloquy',
        name: 'soliloquy-patron',
        component: () => import('../views/support/Soliloquy.vue')
      },
      {
        path: 'school',
        name: 'sochool-sponsor',
        component: () => import('../views/support/School.vue')
      },
      {
        path: 'compaign',
        name: 'create-your-compaign',
        component: () => import('../views/support/Compaign.vue')
      },
      {
        path: 'legacy',
        name: 'legacy-giving',
        component: () => import('../views/support/Legacy.vue')
      }
    ]
  },
  {
    path: '/media-coverage/:id',
    name: 'media-coverage',
    component: () => import('../views/MediaCoverage')
  }
]

const router = new VueRouter({
  routes
})

export default router
