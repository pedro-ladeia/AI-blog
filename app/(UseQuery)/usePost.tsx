'use client'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {PostInterface} from './PostInterface'

const fetchPosts = async () => {
    try {
        const res = await axios.get<PostInterface>('http://localhost:8080/post')
        return res?.data
    } catch (err:any) { 
        return err.message
    }
}


export function usePost() {
    const query = useQuery({
        queryKey:['post'],
        queryFn: () => fetchPosts(),
        retry: false
    })

    return query
}