import Loadable from 'react-loadable';
import Loading from '../Loading';

const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ './About'),
    loading: Loading
});

export default LoadableComponent;