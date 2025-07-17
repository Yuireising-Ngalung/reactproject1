export const initialValues = ['TODO - 1 ', 'TODO - 2'];

export const reducer = (state, action) => {
    switch(action.type){
        case 'add':
            return [...state, action.todo]

        case 'delete': 
            const deleteItem = state.filter((todo,index)=>{
                return index !== action.id
            })
            return deleteItem;

        default:
            return state;
    }

}