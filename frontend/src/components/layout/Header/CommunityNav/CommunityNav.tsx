import { Nav, Items, Item } from "./CommunityNav.style";
import { useAnimation, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";

const CommunityNav = () => {
  const ani = useAnimation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (Y) => {
    if (Y > 460) {
      ani.start({ position: "fixed", top: "70px", opacity: 1 });
    } else {
      ani.start({ position: "static" });
    }
  });

  return (
    <Nav animate={ani}>
      <Items>
        <Link to="/community">
          <Item>Home</Item>
        </Link>
        <Link to="board">
          <Item>게시판</Item>
        </Link>
      </Items>
    </Nav>
  );
};

export default CommunityNav;
