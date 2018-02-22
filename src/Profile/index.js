import Loadable from 'react-loadable';
import Loading from '../Loading';

const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "profile" */ './Profile'),
    loading: Loading,
});

export default LoadableComponent;