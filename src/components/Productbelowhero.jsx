import React, { useState } from "react";
import "../styles/Productbelowhero.css";

export default function Productbelowhero() {
  
  const productdata = [
    {
      icon: "/img/battery.png",
      title: "Battery Life",
      para: "Our range of laptops has been selected for their high-performance and long battery life.",
      id:1,
    },
    {
      icon: "/img/battery.png",
      title: "Performance",
      para: "Our range of laptops has been selected for their high-performance and long battery life.",
      id:2,
    },
    {
      icon: "/img/battery.png",
      title: "Battery Life",
      para: "Our range of laptops has been selected for their high-performance and long battery life.",
      id:3,
    },
    {
      icon: "/img/battery.png",
      title: "Performance",
      para: "Our range of laptops has been selected for their high-performance and long battery life.",
      id:4 ,
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
    }
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
