import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Container = styled.div``;

const ModalContainer = styled.div`
  position: absolute;
  height: 80%;
  width: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px 0px black;
  background-color: lightgray;
`;

const ModalMain = styled.div`
  position: relative;
  height: 100%;
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
`;

const NewsContainer = styled.div`
  flex: 1;
  height: 380px;
  display: flex;
  flex-direction: column;
  width: 300px;
`;
const Image = styled.img`
  height: 40%;
  object-fit: cover;
`;
const Title = styled.h1`
  font-size: 15px;
  font-weight: bolder;
  color: darkblue;
  text-align: justify;
  margin: 10px 0px;
  &::first-letter {
    font-size: 30px;
  }
`;

const Description = styled.div`
  overflow: hidden;
`;

const News = (props) => {
  const [modal, setModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState(0);
  const modalHandler = (newsItem) => {
    setModal(true);
    setSelectedNews(newsItem);
  };

  return (
    <>
      {modal && (
        <ModalMain>
          <ModalContainer>
            <Modal setModal={setModal} selectedNews={selectedNews} />
          </ModalContainer>
        </ModalMain>
      )}

      <Container modal={modal}>
        <NewsContainer onClick={() => modalHandler(props.item)}>
          <Image alt="news image" src={props.item.urlToImage} />
          <Title>{props.item.title}</Title>
          <Description>{props.item.description}</Description>
        </NewsContainer>
      </Container>
    </>
  );
};

export default News;
