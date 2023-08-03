import React from 'react';
import {Users} from "../../components/Users/Users";
import {useFetch} from "../../hooks/useFetch";
import {urls} from "../../constants/urls";

const UsersPage = () => {
    const users = useFetch(urls.users);
    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export {UsersPage};