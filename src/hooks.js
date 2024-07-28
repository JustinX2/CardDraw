import { useState } from 'react';
import axios from 'axios';

export function useFlip(initialFlipState=false){
    const [isFlipped, setIsFlipped] = useState(initialFlipState);

    const flip=()=>{
        setIsFlipped(isFlipped=>!isFlipped);
    };

    return [isFlipped, flip];
}

export function useAxios(baseUrl){
    const [responses, setResponses]=useState([]);

    const addResponseData=async (restOfUrl='')=>{
        try{
            const response=await axios.get(`${baseUrl}${restOfUrl}`);
            setResponses(data=>[...data, response.data]);
        } catch (error){
            setResponses(data=>[...data, {error}]);
        }
    };

    return [responses, addResponseData];
}