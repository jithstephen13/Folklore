import { Box, Grid, Image, Img, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import React from 'react'

const MegaMenu = () => {
    return (
        <Box w={{base:"100%",lg:"95%"}} margin="auto" > 
        <Grid templateColumns={{base:"repeat(2, 1fr)", sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(19, 1fr)"}} gap="5px" >
        <Menu>
            <MenuButton >
                <Box display="flex" justifyContent="center" w="50px" >
                   
                    <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>New!</Text>
                </Box>
            </MenuButton>
                <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Accessories</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Beauty & Wellness </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Clothing   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Home & Furniture       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jewelry  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petites    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shoes      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >BHLDN WeddingsPlywoods    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" w="30px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Dresses</Text>
                </Box>
            </MenuButton>
            <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>



                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop All Dresses</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New! </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Top Rated Dressesg   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Lounge & Casual Dresses       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Occasion & Party Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petite Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus Dresses  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Dresses      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Wedding Guest Dresses    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" w="30px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Clothing</Text>
                </Box>
            </MenuButton>
            <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Accessories</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Beauty & Wellness </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Clothing   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Home & Furniture       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jewelry  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petites    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shoes      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >BHLDN WeddingsPlywoods    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" w="30px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Shoes</Text>
                </Box>
            </MenuButton>
            
            <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Accessories</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Beauty & Wellness </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Clothing   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Home & Furniture       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jewelry  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petites    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shoes      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >BHLDN WeddingsPlywoods    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="40px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Accessories</Text>
                </Box>
            </MenuButton>
            <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Accessories</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Beauty & Wellness </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Clothing   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Home & Furniture       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jewelry  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petites    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shoes      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >BHLDN WeddingsPlywoods    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="50px" >
                     <Text ml={"20px"} fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Weddings</Text>
                </Box>
            </MenuButton>
            <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Accessories</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Beauty & Wellness </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Clothing   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Home & Furniture       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jewelry  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petites    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shoes      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >BHLDN WeddingsPlywoods    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" alignItems={"center"} ml={4} w="120px">
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Home & Furniture</Text>
                </Box>
            </MenuButton>
            <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Accessories</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Beauty & Wellness </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Clothing   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Home & Furniture       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jewelry  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petites    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shoes      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >BHLDN WeddingsPlywoods    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex"  alignItems="center" w="130px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Beauty & Wellness</Text>
                </Box>
            </MenuButton>
            <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Accessories</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Beauty & Wellness </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Clothing   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Home & Furniture       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jewelry  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petites    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shoes      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >BHLDN WeddingsPlywoods    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="130px" ml={"-10px"} >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Garden & Outdoor</Text>
                </Box>
            </MenuButton>
            <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Accessories</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Beauty & Wellness </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Clothing   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Home & Furniture       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jewelry  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petites    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shoes      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >BHLDN WeddingsPlywoods    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="end" w="30px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Gifts</Text>
                </Box>
            </MenuButton>
            <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Accessories</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Beauty & Wellness </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Clothing   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Home & Furniture       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jewelry  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petites    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shoes      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >BHLDN WeddingsPlywoods    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="30px" >
                     <Text fontSize={{base:"12px",sm:"14px", md:"1 rem" }}>Sale</Text>
                </Box>
            </MenuButton>
            <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Accessories</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Beauty & Wellness </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Clothing   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Dresses    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Home & Furniture       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jewelry  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Petites    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Plus  </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shoes      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >BHLDN WeddingsPlywoods    </MenuItem>
                    </Box>
                    <Box alignItems={"center"}>
                    <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontWeight="200" fontSize={{base:"9px",sm:"10px",md:"30px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Shop by Category</MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >{'Spring'}Time to Celebrate      </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Citrus Shades </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Spring 2023: Sculpture + Shape    </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: Utility   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Trending: The Bubble       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Denim: Every Way, Every Day </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >New Today: Clothing & Accessories       </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >10 Steps to Spring-Forward Your Home   </MenuItem>
                        <MenuItem fontStyle="Arial,Helvetica,sans-serif" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"3px 0px 3px 5px", md:"4px 0px 4px 10px"}} >Jerrelle Guy for Anthropologie       </MenuItem>
                     </Box>
                    <Box alignItems={"center"}>
                      <Img src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp" h={"300px"} w={"300px"} />
                
                    </Box>
                    
                </Grid>
            </MenuList>
        </Menu>
       
        </Grid>
    </Box>
  )
}

export default MegaMenu






