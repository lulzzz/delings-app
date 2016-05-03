import Login from './components/login/Login'
import Gallery from './components/gallery/Gallery'
import SendMessage from './components/message/SendMessage'

const routes = {

  Login: {
    component: Login,
    title: 'Logg inn',
    navigationBarHidden: true,
  },

  Gallery: {
    component: Gallery,
    title: 'Delings',
  },

  SendMessage: {
    component: SendMessage,
    title: 'Send melding',
  },

}

export default routes
