import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const allMessageUrl = "http://127.0.0.1:8000/json/";
const getALlMessage = async () => {
    const response = await axios.get(allDataUrl);
    return response.data;
};

export const UseGetAllMessage = () => {
    const {data, isLoading} = useQuery(['allMessage'], getALlMessage);
    return {data, isLoading};
}