import Login from './components/CredentialPage/Login.vue';
import Signup from './components/CredentialPage/Signup.vue';
import Sidenav from './components/Sidenav.vue';
import Home from './components/Body/Home.vue';
import Upload from './components/Body/Upload.vue';
import Header from './components/Header.vue';

export const routes = [
  {
    path:'/login',
    components:{
      default:Login
    }
  },
  {
    path:'/signup',
    components:{
      default: Signup      
    }
  },
  {
    path: '/',
    components:{
      header: Header,
      default: Home,
      sidenav: Sidenav
    }
  },
  {
    path:'/upload/images',
    components:{
      header: Header,
      default: Upload,
      sidenav: Sidenav
    }
  }
]