import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';

export const SidebarMenu = [
  {
    id: "1",
    title_en: "About Me",
    title_th: "เกี่ยวกับฉัน",
    path: "/about",
    icon: <PersonIcon />
  },
  {
    id: "2",
    title_en: "My Skills",
    title_th: "ความสามารถ",
    path: "/skills",
    icon: <BadgeIcon />
  },
  {
    id: "3",
    title_en: "Work",
    title_th: "ผลงาน",
    path: "/work",
    icon: <WorkIcon />
  },
  {
    id: "4",
    title_en: "Contact",
    title_th: "ติดต่อ",
    path: "/contact",
    icon: <CallIcon />
  },
];
