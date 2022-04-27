import { createStore, action } from "easy-peasy";

export default createStore({
    posts: [],
    setPosts: action((state, payload) => {
        state.posts = payload
    }),
    search: '',
    setSearch: action((state, payload) => {
        state.search = payload
    })
});

