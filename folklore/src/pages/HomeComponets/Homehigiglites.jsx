
import React from 'react';



import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Badge, Box, Button, Flex, Icon, Image, Tooltip } from '@chakra-ui/react';






  
 

  function HighlitedProduct () {
   
    const navigate=useNavigate()

  
   const CompleteData=["https://images.urbndata.com/is/image/Anthropologie/82149154_004_b14?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698","https://images.urbndata.com/is/image/Anthropologie/4110089450047_035_b14?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698","https://images.urbndata.com/is/image/Anthropologie/4142437530126_045_b14?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698"]
  return ( 
    <> 
    

    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      w={"100%"}
      height={"100%"}
      

      
      pagination={{
        clickable: true,
        
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      }}
      modules={[Pagination]}
      className="mySwiper"
    >

    


            {
                CompleteData.map((item)=>{
                   return( 
                    <SwiperSlide  position={"relative"} key={Math.random()*10} > 
                     <Image
                            h={"100%"}
                            src={`${item}`}
                            alt={`Picture of ${item.minRentAmount}`}
                            
                            />
                            <Button position={"absolute"} bottom={2} onClick={()=>navigate("/dress")} left="42%">Shop now</Button>
                    </SwiperSlide>
                   
                    )
                })
            }

        
       
    </Swiper>
  </>
  );
};

export default HighlitedProduct;