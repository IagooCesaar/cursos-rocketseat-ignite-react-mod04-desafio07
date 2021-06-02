import React, { ReactNode, useRef, useState } from "react";
import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import "./styles.css";

import SwiperCore, { Navigation, Pagination } from "swiper/core";

SwiperCore.use([Navigation, Pagination]);

interface CarouselProps {
  content: ReactNode[];
}

export default function Carousel({
  content,
}: CarouselProps) {
  return (
    <Box
      w='100%'
      h='100%'
      sx={{
        '--swiper-navigation-color': 'colors.default.highlight',
        '--swiper-pagination-bullet-active': 'colors.default.highlight',
        '--swiper-pagination-bullet': 'colors.default.dark.text',

        '.swiper-pagination-bullet': {
          'background-color': 'var(--swiper-pagination-bullet)'
        },

        '.swiper-pagination-bullet-active': {
          'background-color': 'var(--swiper-pagination-bullet-active)'
        },

        ".swiper-container": {
          'width': '100%',
          'height': '100%',
        },
        // '.swiper-slide': {
        //   'text-align': 'center',
        //   'font-size': '18px',
        //   'background': 'transparent',

        //   'display': 'flex',
        //   '-webkit-box-pack': 'center',
        //   '-ms-flex-pack': 'center',
        //   '-webkit-justify-content': 'center',
        //   'justify-content': 'center',
        //   '-webkit-box-align': 'center',
        //   '-ms-flex-align': 'center',
        //   '-webkit-align-items': 'center',
        //   'align-items': 'center',
        // },
        // '.swiper-slide img': {
        //   'display': 'block',
        //   'width': '100%',
        //   'height': '100%',
        //   'object-fit': 'cover',
        // }
      }}>
      <Swiper navigation={true} pagination={true} className="mySwiper">
        {content?.map(item =>
          <SwiperSlide>{item}</SwiperSlide>
        )}
      </Swiper>
    </Box >
  );
}
