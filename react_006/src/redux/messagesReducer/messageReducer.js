
const initialState = {
    messages: [
        {
            id: 1,
            title: 'What is that?',
            chatId: 2

        },
        {
            id: 2,
            title: 'Who you are?',
            chatId: 1

        },
        {
            id: 3,
            title: 'All ok',
            chatId: 3

        }
    ]
}


export const messageReducer = (state = initialState, action) => {
    switch (action.type) {


    default:
        return state
    }

}