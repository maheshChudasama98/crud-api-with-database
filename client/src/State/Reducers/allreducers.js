import { ADD_DATA, REMOVE_DATA, REMOVE_ALL, Edit_DATA } from "../Action";
import { APIADD, APICLEAR, APIREMOVE, APIEDIT, APIADDDATA } from "../Action/Apiaction";

const initialState = {
    notes: []
}

const allreducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            const { id, FirstName, LastName, Email, Mobile, Country, State } = action.payload;
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        id: id,
                        firstName: FirstName,
                        lastName: LastName,
                        email: Email,
                        mobile: Mobile,
                        country: Country,
                        state: State
                    }
                ],
            };
        case REMOVE_DATA:
            const newnotes = state.notes.filter((elm) => elm.id !== action.id)
            console.log(newnotes);
            return {
                ...state,
                notes: newnotes
            }
        case REMOVE_ALL:
            const removeall = state.notes.filter((elm) => null)
            return {
                ...state,
                notes: removeall
            }


        case Edit_DATA:
            const { id2, FirstName2, LastName2, Email2, Mobile2, Country2, State2 } = action.payload;
            const upList = state.notes.findIndex((elm) => elm.id === id2)
            state.notes[upList].firstName = FirstName2;
            state.notes[upList].lastName = LastName2;
            state.notes[upList].email = Email2;
            state.notes[upList].mobile = Mobile2;
            state.notes[upList].country = Country2;
            state.notes[upList].state = State2;

            return {
                ...state,
                notes: state.notes
            }



        case APIADD:
            console.log("this fun are working");
            return {
                ...state,
                notes: action.name
            };

        case APIADDDATA:
            const { id3, firstName, lastName, email, website } = action.payload;
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        id: id3,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        website: website,
                    }
                ],
            };

        case APICLEAR:

            break;
        case APIREMOVE:

            break;
        case APIEDIT:
            const { id4, firstName4, lastName4, email4, website4 } = action.payload;
            const upList1 = state.notes.findIndex((elm) => elm.id === id4)
            state.notes[upList1].firstName = firstName4;
            state.notes[upList1].lastName = lastName4;
            state.notes[upList1].email = email4;
            state.notes[upList1].website = website4;
            return {
                ...state,
                notes: state.notes
            }


            break;
        default:
            return state;
    }

}

export default allreducers;