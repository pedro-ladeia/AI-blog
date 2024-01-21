'use client'

import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:false,
            staleTime: 100 * 60 * 30
        }
    }
})