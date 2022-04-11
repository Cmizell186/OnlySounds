import React, { useEffect, useState, useRef } from 'react';
import './SongList.css';
import { NavLink } from 'react-router-dom';
import { getAllSongs } from '../../store/songs';
import { useDispatch, useSelector } from 'react-redux';
import image from '../../images/default-album-art.png';

// Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper";


function SongList() {
    const dispatch = useDispatch();
    const songList = useSelector(state => state.song.songs)
    // console.log(Array.isArray(songList));

    useEffect(() => {
        dispatch(getAllSongs())
    }, [dispatch])


    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {Object.values(songList)?.map((ele, idx) => (
                    <SwiperSlide key={idx}>
                        <NavLink to={`songs/${ele?.id}`}>
                        {ele?.imageUrl ?
                            <img src={ele?.imageUrl}  width='300px' height='300px'/>
                            :
                            <img src={image} width='300px' height='300px'/>
                        }
                        </NavLink>
                        <div>
                            <p>{ele?.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='instructions-h1'>
                <h1>🎧Select A Song🎧</h1>
            </div>
        </>
    )
}

export default SongList;
