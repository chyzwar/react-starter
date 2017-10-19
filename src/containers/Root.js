import RootProd from './Root.prod';
import RootDev from './Root.dev';

let Root;

if (process.env.NODE_ENV === 'development') {
  Root = RootDev;
}

if (process.env.NODE_ENV === 'production') {
  Root = RootProd;
}


export default Root;
