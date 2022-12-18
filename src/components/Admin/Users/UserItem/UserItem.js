import React, { useState } from 'react';
import { Image, Button, Icon, Confirm } from "semantic-ui-react";
import { image } from "../../../../assets"
import { ENV } from "../../../../utils";
import { BasicModal } from "../../../Shared";
import { UserForm } from "../UserForm";
import "./UserItem.scss";










export function UserItem(props) {
    const { user } = props;

    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("");

    const onOpenCloseModal = () => setShowModal((prevState) => !prevState);

    const openUpdateUser = () => {
        setTitleModal(`You are going to update the User: ${user.email}`);
        onOpenCloseModal();

    }









    return (
        <>
            <div className='user-item'>
                <div className='user-item__info'>
                    <Image
                        avatar src={user.avatar ? `${ENV.BASE_PATH}/${user.avatar}` : image.noAvatares} />
                    <div>
                        <p>{user.firstname} {user.lastname}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div>
                    <Button icon color='purple' onClick={openUpdateUser}>
                        <Icon name='edit outline' />
                    </Button>
                    <Button icon color={user.active ? "orange" : "green"}>
                        <Icon name={user.active ? "ban" : "check"} />
                    </Button>
                    <Button icon color='red'>
                        <Icon name='trash alternate outline' />
                    </Button>
                </div>
            </div>

            <BasicModal show={showModal} close={onOpenCloseModal} title={titleModal}>
                <UserForm
                    close={onOpenCloseModal}
                    onReload={() => console.log('RELOAD')}
                    user={user} />
            </BasicModal>
        </>
    );
}
