export const initialValues = JSON.parse(localStorage.getItem('todos')) || [];

export const reducer = (state, action) => {
    switch (action.type) {
        case 'add': {
            const newState = [...state, {'title':action.title}]
            console.log(newState)
            localStorage.setItem('todos', JSON.stringify(newState));
            return newState;
        }

        case 'delete': {
            const deleteItem = state.filter((todo,index) => {
                return index !== action.id
            })
            localStorage.setItem('todos', JSON.stringify(deleteItem));
            return deleteItem;
        }

        default:
            return state;
    }
};
