import { api } from "../../api";

type PostModel = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const postsApi = api.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query<PostModel[], void>({
            query: () => '/posts',
        })

    }),
    overrideExisting: false
});

export const { useGetPostsQuery } = postsApi;
