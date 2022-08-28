import { useHttp } from "../Hooks/http.hook";

export const ShopServers = () => {
    const { loading, request, error, clearError, process, setProcess } = useHttp();
    const _apiBase = 'https://62bdc6edc5ad14c110c685b7.mockapi.io/shop';
    const _basePage = 1;

    const getAllFurniture = async (page = _basePage) => {
        const res = await request(`${_apiBase}?page=${page}&limit=12`);
        return res;
    }
    const getCategoryItems = async (category, page = _basePage) => {
        const res = await request(`${_apiBase}?page=${page}&limit=12&${category === 'all' ? '' : `category=${category}`}`);
        return res
    }

    return {
        loading,
        error,
        getAllFurniture,
        getCategoryItems,
        clearError,
        process,
        setProcess
    };
}