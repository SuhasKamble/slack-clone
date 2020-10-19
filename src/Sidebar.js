import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import { Dvr } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [rooms,setRooms] = useState([])
    const [{user},dispatch] = useStateValue()

    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot=>{
            setRooms(snapshot.docs.map(doc=>({
                id:doc.id,
                name:doc.data().name,
            })))
        })
    },[])
 
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                <h2>Suhas Kamble</h2>
                <h3>
                    <FiberManualRecordIcon />
                   {user?.displayName}
                </h3>
                </div>
                <CreateIcon/>
            </div>
                <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
                <SidebarOption Icon={InboxIcon} title="Mention & reactions"/>
                <SidebarOption Icon={DraftsIcon} title="Saved items"/>
                <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser"/>
                <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
                <SidebarOption Icon={AppsIcon} title="Apps"/>
                <SidebarOption Icon={FileCopyIcon} title="File browser"/>
                <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
                <hr/>
                <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
                <hr/>
                <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>
                {/* Connect to Db  */}
                {
                    rooms.map(room=>(
                        <SidebarOption key={room.id} id={room.id} title={room.name}/>
                    ))
                }
                {/* <SidebarOptiom/>  */}

        </div>
    )
}

export default Sidebar