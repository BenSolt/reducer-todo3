export const initialState = [
    
    {
        item: 'Learn about javaScript',
        completed: false,
        id: 1
      },

    {
        item: 'Learn about reducers',
        completed: false,
        id: 2
      },

]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
        return [...state,
            {
                item: action.payload,
                completed: false,
                id: Date.now()

            }
        ]



    }
}