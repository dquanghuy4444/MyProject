import React from 'react';
import './Content.css';
import { Container } from 'reactstrap';
import ProjectCard from '../components/ProjectCard';

const myprojects = [
  {
    id:1,
    name:"Covid-19 Tracker",
    state: 1, // 0 : handmake , 1 : clone
    wasCompleted: true,
    wasPublish: true,
    time: "2h",
    tech: "ReactJS ",
    description: "Ứng dụng để tra cứu thông tin dịch covid 19 của từng nước và thế giới",
    imgBg: "1.jpg",
    imgTech: ["reactjs.png"],
    linkPublicWeb: "https://dquanghuy4444.github.io/Covid19Tracker/",
    linkSourceCode: "https://github.com/dquanghuy4444/Covid19Tracker",
  },
  {
    id:2,
    name:"Wishy Wishy",
    state: 0, // 0 : handmake , 1 : clone
    wasCompleted: true,
    wasPublish: true,
    time: "30h",
    tech: "ReactJS + MockAPI",
    description: "Đây là trang web để chưa đựng điều ước của người dùng",
    imgBg: "2.jpg",
    imgTech: ["reactjs.png","api.png"],
    linkPublicWeb: "https://wishywishy.netlify.app/",
    linkSourceCode: "https://github.com/dquanghuy4444/WishyWishy",
  },
  {
    id:3,
    name:"PoShop Mobile",
    state: 0, // 0 : handmake , 1 : clone
    wasCompleted: false,
    wasPublish: true,
    time: "",
    tech: "ReactJS",
    description: "Đây là trang web để chưa đựng điều ước của người dùng",
    imgBg: "3.jpg",
    imgTech: ["reactjs.png"],
    linkPublicWeb: "https://poshopz.herokuapp.com/",
    linkSourceCode: "https://github.com/dquanghuy4444/PoShop-MobileStore",
  },
  {
    id:4,
    name:"Bản đồ gas",
    state: 0, // 0 : handmake , 1 : clone
    wasCompleted: false,
    wasPublish: false,
    time: "",
    tech: "Asp.net MVC + Asp.net Webservice + Leaflet",
    description: "Đây là trang web để hiển thị cửa hàng gas , yêu cầu gọi gas của khách hàng",
    imgBg: "4.jpg",
    imgTech: ["dotnet.png"],
    linkPublicWeb: "",
    linkSourceCode: "https://github.com/dquanghuy4444/GasMap",
  },
  {
    id:5,
    name:"Chat room",
    state: 1, // 0 : handmake , 1 : clone
    wasCompleted: true,
    wasPublish: true,
    time: "3h",
    tech: "NodeJS + SocketIO + Express + ejs",
    description: "Trang web để chat với mọi người",
    imgBg: "5.jpg",
    imgTech: ["nodejs.png","socketio.png"],
    linkPublicWeb: "https://pohipchatroom.herokuapp.com/",
    linkSourceCode: "https://github.com/dquanghuy4444/ChatRoom",
  },
]

function Content() {
  return (
    <Container className="mb-3 mt-4">
      {
        myprojects.map((project , index) =>{
          return <ProjectCard project={ project } key={ index }></ProjectCard>;
          }
        )
      }
    </Container>
  );
}

export default Content;
