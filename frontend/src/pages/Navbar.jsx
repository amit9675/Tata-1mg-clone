import {
    Stack,
    Link,
    Box,
    Text,
    Flex,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    SimpleGrid,
    Image,
    Divider,
  } from "@chakra-ui/react";
  import React from "react";
  import logo from "../Assets/favicon.jpg"
  import { useNavigate } from "react-router-dom";
import Signupmodal from "../components/Signupmodal";
import Loginmodal from "../components/Loginmodal";
import {BsFillPersonFill} from "react-icons/bs"
// import { useNavigate } from "react-router-dom";
  const CAT_ITEMS = [
    {
      label: "Health Resource Center",
      children: [
        {
          label: "All Diseases",
          subLabel: [],
          href: "/medicine",
        },
        {
          label: "All Medicines",
          subLabel: [],
          href: "medicine",
        },
        {
          label: "Medicines by Therapeutic Class",
          subLabel: [],
          href: "/medicine",
        },
      ],
    },
    {
      label: "Vitamin & Nutrition",
      children: [
        {
          label: "Vitamins & Supplements",
          subLabel: [
            "Multi Vitamins",
            "Vitamins A-Z",
            "Minerals-Supplement",
            "Vitamin B-12 & B-Complex",
          ],
          href: "/medicine",
        },
        {
          label: "Nutritional Drinks",
          subLabel: [
            "Adult Daily Nutrition",
            "Kids Nutrition(2-15yrs",
            "Women Nutrition",
          ],
          href: "/medicine",
        },
        {
          label: "Health Food & Drinks",
          subLabel: [
            "Green Tea & Herbal Tea",
            "Apple Cider Vinegar",
            "Healthy Snacks",
          ],
          href: "/medicine",
        },
      ],
    },
    {
      label: "Diabetes",
      children: [
        {
          label: "Diabetes Monitoring",
          subLabel: [
            "Blood Glucose Monitors",
            "Test Strips & Lancets",
            "Syringes & Pens",
          ],
          href: "/medicine",
        },
       
        {
          label: "Diabetic Medicines",
          subLabel: ["Vitamins, Minerals & Antioxidants", "Homeopathy Medicines"],
          href: "/medicine",
        },
      ],
    },
    {
      label: "Healthcare Devices",
      children: [
        {
          label: "Top brands in Healthcare Devices",
          subLabel: [
            "Dr. Morepen Devices",
            "Accu-chek",
            "OneTouch",
            "Omron",
          ],
          href: "/medicine",
        },
        {
          label: "Masks (N95, Surgical and more)",
          subLabel: [
            "Face Shield",
            "Kids Nutrition(2-15yrs",
            "Women Nutrition",
          ],
          href: "/medicine",
        },
      ],
    },
    
    {
      label: "Personal Care",
      children: [
        {
          label: "Sexual Wellness",
          subLabel: [
            "Condoms",
            "Lubricants & Massage Gels",
            "Personal body massagers",
            "Men Performance Enhancers",
            "Sexual Health Supplements"
          ],
          href: "/medicine",
        },
        {
          label: "Skin Care",
          subLabel: [
            "Body Lotions",
            "Kids Nutrition(2-15yrs",
            "Women Nutrition",
          ],
          href: "/medicine",
        },
      ],
    },
    {
      label: "Health Conditions",
      children: [
        {
          label: "Ear Care",
          subLabel: [
            "Hearing Aid Devices",
            "Stomach Care",
            "Minerals-Supplement",
            "Bone, Joint & Muscle Care",
          ],
          href: "/medicine",
        },
        {
          label: "Pain Relief",
          subLabel: [
            "Heating Aids",
            "Omnigel products",
            
          ],
          href: "/medicine",
        },
      ],
    },
    {
      label: "Ayurveda Products",
      children: [
        {
          label: "Ayurveda Top Brands",
          subLabel: [
            "Dabar",
            "Sri Sri Tattva",
            "Minerals-Supplement",
            "Bone, Joint & Muscle Care",
          ],
          href: "/medicine",
        },
        {
          label: "Pain Relief",
          subLabel: [
            "Heating Aids",
            "Omnigel products",
            
          ],
          href: "/medicine",
        },
      ],
    },
    {
      label: "Homeopathy",
      children: [
        {
          label: "Homeopathy Popular Categories",
          subLabel: [
            "Multi Vitamins",
            "Vitamins A-Z",
            "Minerals-Supplement",
            "Vitamin B-12 & B-Complex",
          ],
          href: "/medicine",
        },
        {
          label: "Nutritional Drinks",
          subLabel: [
            "Adult Daily Nutrition",
            "Kids Nutrition(2-15yrs",
            "Women Nutrition",
          ],
          href: "/medicine",
        },
      ],
    }
  ];
  
  function Category() {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("#ff6f61", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
    const navigate=useNavigate()
    return (
      <Box
        // fontFamily={"sans-serif"}
        shadow={"sm"}
        display={{ base: "none", md: "block" }}
        // 
        zIndex={99}
        top={0}
        position={"sticky"}
        py="10px"
        backgroundColor={"skyblue"}
      >

        <Stack direction={"row"} spacing={4} justify="center" alignItems={'center'} width={'100%'} mr={'20px'} >
        <Image width={"40px"} mr={"10px"} src={logo} onClick={()=>navigate('/')}/>
          {CAT_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                  fontSize={'smaller'}
                    // p={0.5}
                    href={navItem.href ?? "/getdata"}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>
  
                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={2}
                    rounded={"xl"}
                    maxW={"min-content"}
                  >
                    {navItem.children.map((child, i) => (
                      <SimpleGrid column={2} key={i}>
                        <DesktopSubNav {...child} />
                      </SimpleGrid>
                    ))}
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}
        <Flex gap={'4px'} h='20px' fontSize={'smaller'}  >
            <Text color={'rgb(255, 111, 97)'} cursor={'pointer'} ><Signupmodal/></Text>
            <Divider orientation="vertical"  colorScheme={'grey'}/>
            <Text color={'rgb(255, 111, 97)'} cursor={'pointer'} ><Loginmodal/></Text> 
        </Flex>
        <BsFillPersonFill onClick={()=>navigate('/admin')}/>
        </Stack>
            
      </Box>
    );
  }
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Flex fontSize="14px">
        <Box width={"max-content"}>
          <Link
            href={href}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              color: "#ff6f61",
            }}
            textAlign="left"
          >
            <Text transition={"all .3s ease"} fontWeight="700">
              {label}
            </Text>
          </Link>
          {subLabel.length
            ? subLabel.map((sl, i) => (
                <Link
                  href={href}
                  role={"group"}
                  display={"block"}
                  p={2}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "#ff6f61",
                  }}
                  textAlign="left"
                  key={i}
                >
                  <Text fontSize={"sm"}>{sl}</Text>
                </Link>
              ))
            : null}
        </Box>
      </Flex>
    );
  };
  
  export default Category;
  