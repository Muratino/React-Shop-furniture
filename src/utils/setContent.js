import { Spinner } from '../components/spinner/spinner';
// import { ErrorMessage } from '../components/';
import Skeleton from '../components/skeleton/Skeleton'

export const setContent = (process, Component) => {
    switch (process) {
        case 'waiting':
            return <Skeleton />;
        case 'loading':
            return <Spinner />;
        case 'confirmed':
            return <Component />;
        case 'error':
            return <div>Error!!!</div>;
        default:
            throw new Error('Unexpected process state')
    }
}