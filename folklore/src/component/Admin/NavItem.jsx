import { Flex, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


export const NavItem = ({ route, icon, children, ...rest }) => {
    return (
      <NavLink to={`/${route}`} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'orange.400',
            color: 'white',
            
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </NavLink>
    );
  };