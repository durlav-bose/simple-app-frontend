import React, { useEffect } from "react" 
import { useQuery, gql } from "@apollo/client"
import { LOAD_USERS } from "../GraphQl/Query";

function GetUsers() {

    const {error, loading, data} = useQuery(LOAD_USERS)
    useEffect(() => {
        console.log("data...",data)
    }, [data])
    return (
        <div>
            hello boys
        </div>
    )
}

export default GetUsers