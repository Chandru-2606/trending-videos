import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import { ImageContainer ,ImageWrapper } from "./dashboard.styled"
import Header from "../Header/header";


function Dashboard () {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedVideoURL, setSelectedVideoURL] = useState("")

    const dispatch = useDispatch();
    const post = useSelector((state)=>state.post.data);
    //  console.log("post", post)


    const data = [
        {
            "thumnail" : "https://www.shutterstock.com/image-photo/trust-teamwork-bees-linking-two-600w-262155599.jpg",
            "hoverVideo" : "https://mazwai.com/videvo_files/video/free/2018-01/small_watermarked/171124_H1_006_preview.webm",
            "video" : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
             },
             {
                "thumnail" : "https://mazwai.com/videvo_files/video/free/2018-01/thumbnails/171124_H1_006_small.jpg",
                "hoverVideo" : "https://mazwai.com/videvo_files/video/free/2018-01/small_watermarked/171124_H1_006_preview.webm",
                "video" : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                 },
                     {
                        "thumnail" : "https://www.shutterstock.com/image-photo/trust-teamwork-bees-linking-two-600w-262155599.jpg",
                        "hoverVideo" : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
                        "video" : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                         },
                         {
                            "thumnail" : "https://mazwai.com/videvo_files/video/free/2018-01/thumbnails/171124_H1_006_small.jpg",
                            "hoverVideo" : "https://mazwai.com/videvo_files/video/free/2018-01/small_watermarked/171124_H1_006_preview.webm",
                            "video" : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                             },
                             {
                                "thumnail" : "https://www.shutterstock.com/image-photo/trust-teamwork-bees-linking-two-600w-262155599.jpg",
                                "hoverVideo" : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
                                "video" : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                 },
                                 {
                                    "thumnail" : "https://mazwai.com/videvo_files/video/free/2018-01/thumbnails/171124_H1_006_small.jpg",
                                    "hoverVideo" : "https://mazwai.com/videvo_files/video/free/2018-01/small_watermarked/171124_H1_006_preview.webm",
                                    "video" : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                     },
                                                               
                    ]
                const getPost = () =>{
                    try{
                    dispatch({type:"CART",post:data});
                        return data;
                    }
                    catch(error)
                    {
                    //  rejectWithValue(error.response.data);
                    }
                }
                useEffect (()=>{
                    getPost()
                  },[])

                  const showModal = () => {
                    setIsModalVisible(true)
                  };
                  const handleOk = () => {
                    setIsModalVisible(false);
                  };
                  const handleCancel = () => {
                    setIsModalVisible(false);
                  };

    return (
        <div className="dashboard-div">
            <Header />
            <div className="main-container"> 
            <ImageWrapper>
            {post && post.map((item, index)=>{
                return(

                    
                      <ImageContainer /*key={index}*/ onClick={() => { setSelectedVideoURL(item.video); 
                        showModal() ;
                      console.log("triggered",item.video) }}>
                      <img src={item.thumnail} />
                      <video autoPlay muted loop>
                          <source src={item.hoverVideo} ></source>
                      </video>
                  </ImageContainer>
                );
            })}
 <Modal destroyOnClose={true} open={isModalVisible} footer={null} onCancel={(e) => { setIsModalVisible(false) }}>
               
                    <video width="430" height="240" autoPlay controls>
  <source src={selectedVideoURL} type="video/mp4"></source>
                </video>
            </Modal> 
              
            </ImageWrapper>
            </div>
        </div>
    )
}

export default Dashboard;