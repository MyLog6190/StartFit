import { useState, useRef, useEffect } from "react";
import { popularList } from "@/types/board";
import { isDarkMode } from "@/store/atom";
import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";

import {
  PopularWritingContainer,
  PopularWritingContainerItem,
  PopularWritingContent,
  ArrowLeftWrapper,
  ArrowRightWrapper,
} from "./PopularWriting.style";

import {
  TitleOfArticle,
  ProfileContainer,
  WriterProfilePhoto,
  Writer,
} from "../Profile/Prodfile.style";

import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";

function PopularWriting() {
  const [index, setIndex] = useState(0);
  const popularPostList = useRecoilValue(popularList);
  const isDark = useRecoilValue(isDarkMode);
  const componentRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<number>(0);

  const increaseIndex = (offset: number) => {
    const totalPost = popularPostList.length - 1;
    const maxIndex = Math.floor(totalPost / offset);
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const decreaseIndex = (offset: number) => {
    const totalPost = popularPostList.length - 1;
    const maxIndex = Math.floor(totalPost / offset);
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleResize = () => {
    const resize = componentRef.current?.getBoundingClientRect();
    if (resize !== undefined) setOffset(Math.floor(resize.width / 250));
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatePresence>
      <PopularWritingContainer ref={componentRef}>
        <ArrowLeftWrapper onClick={() => decreaseIndex(offset)}>
          <ArrowLeftCircle
            fontSize="30px"
            color={isDark ? "#fdfdfd" : "#141529"}
          />
        </ArrowLeftWrapper>
        <ArrowRightWrapper onClick={() => increaseIndex(offset)}>
          <ArrowRightCircle
            fontSize="30px"
            color={isDark ? "#fdfdfd" : "#141529"}
          />
        </ArrowRightWrapper>
        {popularPostList
          .slice(index * offset, index * offset + 4)
          .map((post) => (
            <PopularWritingContainerItem key={"PWC" + post.id}>
              <TitleOfArticle>{post.title}</TitleOfArticle>
              <PopularWritingContent>{post.content}</PopularWritingContent>
              <ProfileContainer>
                <WriterProfilePhoto />
                <Writer>{post.writer}</Writer>
              </ProfileContainer>
            </PopularWritingContainerItem>
          ))}
      </PopularWritingContainer>
    </AnimatePresence>
  );
}

export default PopularWriting;
