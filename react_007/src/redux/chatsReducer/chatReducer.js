
const initialState = {
    chats: [
        {
            id: 1,
            name: 'Alex'
        },
        {
            id: 2,
            name: 'Anna'
        },
        {
            id: 3,
            name: 'Den'
        }
    ]
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'delete': 
            return {
                ...state,
                chats: state.chats.filter((chat) => chat.id !== action.payload)
            }
        case 'add':
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }

        default: 
            return state
    }
}