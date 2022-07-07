import {ReactComponent as MoreIcon} from '../images/icons/more.svg';
import React, {useContext, useState} from 'react';
import CommentContextMenu from './modals/CommentContextMenu';
import AppContext from '../AppContext';

const More = (props) => {
    const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
    const {member, admin} = useContext(AppContext);

    const toggleContextMenu = () => {
        setIsContextMenuOpen(current => !current);
    };

    const comment = props.comment;

    /*
     * Whether we have at least one action inside the context menu
     * (to hide the 'more' icon if we don't have any actions)
    */
    const show = (!!member && comment.status === 'published') || !!admin;

    return (
        <div className="relative">
            {show ? <button onClick={toggleContextMenu}><MoreIcon className='gh-comments-icon gh-comments-icon-more dark:fill-white' /></button> : null}
            {isContextMenuOpen ? <CommentContextMenu comment={comment} close={toggleContextMenu} toggleEdit={props.toggleEdit} /> : null}
        </div>
    );
};

export default More;
