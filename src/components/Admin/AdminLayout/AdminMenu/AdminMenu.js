import React from 'react'
import { Menu, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../../hooks";
import "./AdminMenu.scss";

export function AdminMenu() {
    const { pathname } = useLocation();

    const {
        user: { role },
    } = useAuth();
    const isAdmin = role === "admin";
    //console.log(" Es admin ?->", isAdmin);

    const isCurrentPath = (path) => {
        if (path === pathname) return true;
        return false;
    };

    return (
        <Menu fluid vertical icon text className='admin-menu'>
            {isAdmin && (
                <>

                    <Menu.Item as={Link} to="/admin/users" active={isCurrentPath("/admin/users")}>
                        <Icon name='user outline' />
                        User
                    </Menu.Item>


                    <Menu.Item as={Link} to="/admin/menu" active={isCurrentPath("/admin/menu")}>
                        <Icon name='bars' />
                        Menu
                    </Menu.Item>
                </>
            )}
            <Menu.Item as={Link} to="/admin/videos" active={isCurrentPath("/admin/videos")}>
                <Icon name='computer' />
                Videos
            </Menu.Item>


        </Menu>

    );
}
