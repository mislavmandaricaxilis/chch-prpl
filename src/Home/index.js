import Loadable from 'react-loadable';
import Loading from '../Loading';

const LoadableComponent = Loadable({
    loader: () => import('./Home'),
    loading: Loading
});

export default LoadableComponent;