import React, { useState, useEffect } from 'react'
import { Loader } from "semantic-ui-react";
import { size, map } from "lodash";
import { User } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { UserItem } from "../UserItem";



const userController = new User();

export function ListUsers(props) {
    const { userActive, reload } = props;
    const [users, setUsers] = useState(null);
    const { accessToken } = useAuth();



    useEffect(() => {
        (async () => {
            try {
                setUsers(null);
                const response = await userController.getUsers(
                    accessToken,
                    userActive
                );
                setUsers(response);
            } catch (error) {
                console.error(error);

            }
        })()
    },// eslint-disable-next-line
        [userActive, reload]);


    if (!users) return <Loader active inline="centered" />
    if (size(users) === 0) return "NO Users found";






    return map(users, (user) => <UserItem key={user._id} user={user} />);
}
