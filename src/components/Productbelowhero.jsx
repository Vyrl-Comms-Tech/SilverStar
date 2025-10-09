import React, { useState } from "react";
import "../styles/Productbelowhero.css";

export default function Productbelowhero() {
  
  const productdata = [
    {
      icon: "/img/battery.png",
      title: "Business Laptops & Desktops",
      para: "Equip your teams with high performance devices designed for reliability and long term efficiency featuring the latest models from Dell, HP, and Lenovo.",
      id:1,
    },
    {
      icon: "/img/battery.png",
      title: " Servers & Storage Solutions",
      para: "Build a resilient backbone for your business with enterprise grade servers and scalable storage designed for speed, uptime, and data integrity.",
      id:2,
    },
    {
      icon: "/img/battery.png",
      title: "Networking Equipment",
      para: "Stay connected with advanced switches, routers, and access points that deliver secure, high speed performance for offices of any size.",
      id:3,
    },
    {
      icon: "/img/battery.png",
      title: "Software Licensing & Subscriptions",
      para: "Simplify your operations with genuine software licenses from Microsoft, Adobe, and other global vendors fully managed and compliance-ready.",
      id:4 ,
    },
    {
      icon: "/img/battery.png",
      title: "Cybersecurity & Firewall Solutions",
      para: "Defend your infrastructure with trusted protection from brands like Fortinet and Sophos because securing IT is just as important as powering IT.",
      id:5 ,
    },
    {
      icon: "/img/battery.png",
      title: "Printers, Peripherals & Power Backup",
      para: "Boost productivity with efficient printing systems, accessories, and UPS solutions built for consistent performance and minimal downtime.",
      id:6 ,
    },
    {
      icon: "/img/battery.png",
      title: " Smart Office & Collaboration Tools",
      para: "Transform your workspace with conferencing systems, smart displays, and digital collaboration tools that bring teams together anywhere, anytime.",
      id:7 ,
    },
  ];

  const productimages=[
    {
      img:'/img/Rectangle 40.avif',
      id:'1'
    },
    {
      img:'/img/Frame 121.avif',
      id:'2'
    },
    {
      img:'/img/Group 1a.avif',
      id:'3'
    },
    {
      img:'/img/Group 16.avif',
      id:'4'
    },
    {
      img:'/img/Rectangle 40.avif',
      id:'5'
    },
    {
      img:'/img/Frame 121.avif',
      id:'6'
    },
    {
      img:'/img/Group 1a.avif',
      id:'7'
    },
  ]
  const [dataid,setdataid]=useState(1)
  const tabclick=(item)=>{
    setdataid(item.id)
    
  }
  return (
    <div className="Productbelowhero">
      <div className="productleft">
        {productdata.map((item) => {
          return (
            <div className={`producttab ${(dataid==item.id)?"redtab":""}`}  onClick={()=>tabclick(item)}>
              <div className="ptitlerow">
                <img src={item.icon} alt="" />
                <p>{item.title}</p>
              </div>
              <div className="pdescrow">
                <p>{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="productright">
          {
            productimages.map((item)=>{
              if(dataid==item.id){
                return<img src={item.img} alt="" />
              }
            })
          }
      </div>
    </div>
  );
}
