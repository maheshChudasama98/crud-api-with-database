export const APIADD = "addApi"
export const APIADDDATA = "addApiData"
export const APIREMOVE = "removeApiData"
export const APICLEAR = "clearApiData"
export const APIEDIT = "editApiData"

export const apiAdd = (items) => {
    console.log("id", items);
    return {
        type: APIADD,
        name: items
    }
}

export const apiAddData = (FirstName, LastName, email, website) => {
    console.log("id", email, website);
    return {
        type: APIADDDATA,
        payload: {
            id3: new Date().getTime().toString(),
            firstName: FirstName,
            lastName: LastName,
            email: email,
            website: website
        }
    }
}
export const apiRemove = () => {
    return {
        type: APIREMOVE
    }
}
export const apiClear = () => {
    return {
        type: APICLEAR
    }
}

export const apiEdit = (id, FirstName, LastName, Email, Website) => {
    return {
        type: APIEDIT,
        payload: {
            id4: id,
            firstName4: FirstName,
            lastName4: LastName,
            email4: Email,
            website4: Website
        }
    }
}