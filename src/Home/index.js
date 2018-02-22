import Loadable from 'react-loadable';
import Loading from '../Loading';

const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ './Home'),
    loading: Loading
});

export default LoadableComponent;