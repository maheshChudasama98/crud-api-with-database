export const ADD_DATA = "ADD_DATA_SET";
export const REMOVE_DATA = 'REMOVE_NOTE';
export const REMOVE_ALL = " Remove_All";
export const Edit_DATA = " Edit_DATA";
export const GET = "GET";
export const UPDATE_DATA = "UPDATE_DATA";



export const AddData = (FirstName, LastName, Email, Mobile, Country, State) => {
    return {
        type: ADD_DATA,
        payload: {
            id: new Date().getTime().toString(),
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Mobile: Mobile,
            Country: Country,
            State: State

        }
    }
}


export const DeleteData = (id) => {
    return {
        type: REMOVE_DATA,
        id
    }
}

export const Remove = () => {
    return {
        type: REMOVE_ALL,
    }
}

export const Edit = (id, FirstName, LastName, Email, Mobile, Country, State) => {
  
    return {
        type: Edit_DATA,
        payload: {
            id2: id,
            FirstName2: FirstName,
            LastName2: LastName,
            Email2: Email,
            Mobile2: Mobile,
            Country2: Country,
            State2: State
        }
    }
}

export const Update = (data) => {
    return {
        type: UPDATE_DATA,
        payload: data
    }
}




export const Text = (item) => {
    return {
        type: GET,
        payload: {
            id: item.id,
            data: item.data,
            Lname: item.Lname
        }
    }
}
