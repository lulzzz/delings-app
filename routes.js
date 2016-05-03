import Login from './components/login/Login'
import Gallery from './components/gallery/Gallery'
import SendMessageView from './components/message/SendMessageView'

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
    component: SendMessageView,
    title: 'Send melding',
  },

}

export default routes
