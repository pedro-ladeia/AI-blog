'use client'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
    try {
        const res = await axios.get('http://localhost:8080/post')
        return res?.data
    } catch (err:any) { 
        return err.message
    }
}


export function usePost() {
    const query = useQuery({
        queryKey:['post'],
        queryFn: () => fetchPosts
    })

    return query
}