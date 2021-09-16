import request from '@/request/request'

export const GetPosts = (params: any = '') => request.get(`/posts`, params)