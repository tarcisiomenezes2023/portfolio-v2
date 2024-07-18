import styled from "styled-components";
import Sidebar from "./siderbar/Sidebar";
import { motion } from "framer-motion";

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Name = styled.span`
  font-weight: bolder;
`;

const SocialContainer = styled.div`
  background-color: white;
  height: 40%;
  width: auto;
  border-radius: 10px;
  padding: 2px;
`;

const Social = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Sidebar />
      <motion.Name initial={{opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} >
        Tarcísio Menezes
      </motion.Name>
      <SocialContainer>
        <a href="#"><Social src="./img/github1.png" alt="github" /></a>
        <a href="#"><Social src="./img/linkedin1.png" alt="linkedin" /></a>
        <a href="#"><Social src="./img/instagram1.png" alt="instagram" /></a>
        <a href="#"><Social src="./img/facebook2.png" alt="facebook" /></a>
        <a href="mailto:"><Social src="./img/outlook1.png" alt="email" /></a>
      </SocialContainer>
    </Container>
  );
};

export default Navbar;

