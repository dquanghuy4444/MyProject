import React from 'react';
import './Content.css';
import { Button, Container } from 'reactstrap';
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
    techid: [1],
    description: "Ứng dụng để tra cứu thông tin dịch covid 19 của từng nước và thế giới",
    isFavorited:false,
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
    time: "25h",
    tech: "ReactJS + MockAPI",
    techid: [1],
    description: "Đây là trang web để chưa đựng điều ước của người dùng",
    isFavorited:true,
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
    techid: [1],
    description: "Đây là trang web để chưa đựng điều ước của người dùng",
    isFavorited:true,
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
    techid: [0],
    description: "Đây là trang web để hiển thị cửa hàng gas , yêu cầu gọi gas của khách hàng",
    isFavorited:true,
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
    techid: [2],
    description: "Trang web để chat với mọi người",
    isFavorited:false,
    imgBg: "5.jpg",
    imgTech: ["nodejs.png","socketio.png"],
    linkPublicWeb: "https://pohipchatroom.herokuapp.com/",
    linkSourceCode: "https://github.com/dquanghuy4444/ChatRoom",
  },
  {
    id:6,
    name:"WebRTC",
    state: 1, // 0 : handmake , 1 : clone
    wasCompleted: true,
    wasPublish: false,
    time: "1h30",
    tech: "NodeJS + SocketIO + Express + ejs + PeerJS",
    techid: [2],
    description: "Trang web để video call với mọi người",
    isFavorited:false,
    imgBg: "6.jpg",
    imgTech: ["nodejs.png","socketio.png"],
    linkPublicWeb: "",
    linkSourceCode: "https://github.com/dquanghuy4444/WebRTCStream",
  },
  {
    id:7,
    name:"Posts",
    state: 1, // 0 : handmake , 1 : clone
    wasCompleted: true,
    wasPublish: true,
    time: "1h",
    tech: "NodeJS + Express + MongoDB + Handlebars",
    techid: [2],
    description: "CRUD Post",
    isFavorited:false,
    imgBg: "7.jpg",
    imgTech: ["nodejs.png","mongodb.png"],
    linkPublicWeb: "https://pohipposts.herokuapp.com/",
    linkSourceCode: "https://github.com/dquanghuy4444/Posts",
  },
]

function Content({filter , setFilter}) {

  const showProjects = () =>{
    let result = myprojects;
    if(filter.favorite){
      result = result.filter((project) =>
        project.isFavorited === true
      )
    }
    if(filter.state !== -1){
      result = result.filter((project) =>
        project.state === filter.state
      )
    }
    if(filter.techid !== -1){
      result = result.filter((project) =>
        project.techid.some(techid => techid === filter.techid)
      )
    }
    if(result.length > 0){
      return result.map((project) =>
        <ProjectCard project={ project } key={ project.id }></ProjectCard>
      )
    }
    return (
      <div className="noproject-area">
        <h4>Chưa có dự án nào phù hợp</h4>
        <Button onClick={ () => setFilter({state:-1,techid:-1})}>
          <i className="fas fa-arrow-circle-left"></i>
          {" "}
          Trở lại
          </Button>
      </div>
    )
  }

  return (
    <Container className="mb-3 mt-4">
      {
        showProjects()
      }
    </Container>
  );
}

export default Content;
