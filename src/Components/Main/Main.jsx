import React from "react";
import './main.css'

import img1 from '../../Assets/img1.jpg'

import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";

const Data = [
    {
      id:1,
      imgSrc: img1,
      planTitle: 'qwerty',
      destTitle: 'Mountains',
      location: 'Nigeria',
      grade: 'Weekend Getaway',
      fees: '\u20A8 13999',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    },
    
    // {
    //   id:2,
    //   imgSrc: img2,
    //   planTitle: 'qwerty',
    //   location: 'Nigeria',
    //   grade: 'Weekend Getaway',
    //   fees: '\u20A8 13999',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    // },
  
    // {
    //   id:3,
    //   imgSrc: img3,
    //   planTitle: 'qwerty',
    //   location: 'Nigeria',
    //   grade: 'Weekend Getaway',
    //   fees: '\u20A8 13999',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    // },
  
    // {
    //   id:4,
    //   imgSrc: img4,
    //   planTitle: 'qwerty',
    //   location: 'Nigeria',
    //   grade: 'Weekend Getaway',
    //   fees: '\u20A8 13999',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo inventore vitae iure libero eum accusantium cum exercitationem nulla quibusdam ex nemo impedit, pariatur nobis minima eligendi quod similique! Quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in excepturi, distinctio ratione nisi iste tempore rem quia, sed nesciunt dolore, ea autem explicabo dicta voluptatum? Et molestiae est aperiam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto quae, autem vero suscipit, temporibus quas similique est alias impedit deleniti nemo aspernatur numquam et officiis voluptas molestiae provident illum.'
    // }
]

const Main = () => {
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, 
                    description }) => {
                        return (
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span continent flex>
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="flex fees">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main;