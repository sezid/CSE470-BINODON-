<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    mode:"dark",
    user:null,
    token:null,
    posts:[],
};

export const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        changeMode:(state)=>{
            state.mode=state.mode==="light"?"dark":"light"
        },
        setLogin:(state,action)=>{
            state.user=action.payload.user;
            state.token=action.payload.token;
        },
        setLogout:(state)=>{
            state.user=null;
            state.token=null;
        },
        setFriends:(state,action)=>{
            if(state.user)
                state.user.friends=action.payload.friends;
            else console.error('User friends do not exit')
        },
        setPosts:(state,action)=>{
            state.posts=action.payload.posts
        },
        setLikes:(state,action)=>{
            const uId=action.payload.userId
            for(let p of state.posts)
                if(p._id===action.payload.postId){
                    p.likes[uId]?(delete p.likes[uId]):p.likes[uId]=true
                    break;
                }
        },
        updateComments:(state,action)=>{
            for(let p of state.posts)
                if(p._id===action.payload.postId){
                    ++p.commentsCount
                    break;
                }
        },
        clearPosts:state=>{
            state.posts=[]
        },
        reset:()=>initialState,
    }
});

export const { changeMode, setLogin, setLogout, setFriends, setPosts, setLikes, clearPosts, updateComments, reset } = authSlice.actions;
=======
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    mode:"light",
    user:null,
    token:null,
    posts:[],
};

export const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        setMode:(state)=>{
            state.mode=state.mode==="light"?"dark":"light"
        },
        setLogin:(state,action)=>{
            state.user=action.payload.user;
            state.token=action.payload.token;
        },
        setLogout:(state)=>{
            state.user=null;
            state.token=null;
        },
        setFriends:(state,action)=>{
            if(state.user)
                state.user.friends=action.payload.friends;
            else console.error('User friends do not exit')
        },
        setPosts:(state,action)=>{
            state.posts=action.payload.posts
        },
        setPost:(state,action)=>{
            const updatedPosts=state.posts.map(post=>{
                if(post._id===action.payload.post_id) return action.payload.post;
                return post;
            })
            state.posts=updatedPosts;
        }
    }
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;
>>>>>>> be4ece29ea09a84ee7ab4d0ef89ac3a3922309b8
export default authSlice.reducer;