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

            }];

    //TOGGLE TODO - STEP 4

    case "TOGGLE_TODO":
        let Clicktoggle =
        state.map(item => {
            if(item.id === action.payload){
                return {
                    ...item,
                    completed: !item.completed
                }
            } else {
                return item;
            }
        })
        return Clicktoggle;
        
    case "TOGGLE_TODO":
            let Clear =
            state.filter(item => {
                if (item.completed === true){
                    return !item.completed
                }else{
                    return item;
                }
            })
            return Clear;

        default: 
        return state;     
    }
}