import HomeIcon from "@mui/icons-material/Home";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const leftMenuMainSectionRow1 = [{
    name: "Home",
    logo: <HomeIcon />,
    link: "/"
}, {
    name: "Shorts",
    logo: <PlayCircleFilledWhiteOutlinedIcon />,
    link: "/shorts"
}, {
    name: "Subscriptions",
    logo: <SubscriptionsOutlinedIcon />,
    link: "/subscriptions"
}];

export const subContainer1RightPart = [
    
    {
        value: "Share",
        logo: <ReplyOutlinedIcon />
    },
    {
        value: "Download",
        logo: <FileDownloadOutlinedIcon />
    },
    {
        value: "",
        logo: <MoreVertIcon />
    }
    
]

export const leftMenuMainSectionRow2 = ["Library", "History", "Watch later", "Liked videos"];