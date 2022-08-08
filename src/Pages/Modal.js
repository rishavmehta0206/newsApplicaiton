import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 999;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  height: 70px;
  display: flex;
  padding: 0%;
`;
const TextContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.h1`
  font-size: 20px;
  text-align: justify;
  &::first-letter {
    font-size: 30px;
  }
`;
const IconContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: lightgray;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AuthorContainer = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Author = styled.h1`
  font-size: 20px;
  color: blue;
`;

const Date = styled.div``;
const ModalBody = styled.div`
  margin-top: 30px;
`;
const BodyWrapper = styled.div`
  padding: 20px;
  text-align: justify;
  &::first-letter {
    font-size: 30px;
  }
`;
const ImageWrapper = styled.div`
  height: 200px;
  float: left;
  margin: 0px 20px;
`;
const Image = styled.img`
  height: 70%;
  object-fit: cover;
`;
const Modal = ({ selectedNews, setModal }) => {
  const [singleNews, setSingleNews] = useState({});
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-07-08&sortBy=publishedAt&apiKey=90ea7071032846da88d2d8e95a1744e2"
      );
      setNews(response.data.articles);
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log(selectedNews);
  }, [selectedNews]);
  return (
    <Container>
      <ModalHeader>
        <TextContainer>
          <Text>{selectedNews.title?selectedNews.title:"John"}</Text>
        </TextContainer>
        <IconContainer>
          <Icon onClick={() => setModal(false)}>
            <i className="fa fa fa-solid fa-xmark"></i>
          </Icon>
        </IconContainer>
      </ModalHeader>
      <AuthorContainer>
        <Author>by: {selectedNews.author}</Author>
        <Date>{selectedNews.publishedAt}</Date>
      </AuthorContainer>
      <ModalBody>
        <ImageWrapper>
          <Image src={selectedNews.urlToImage} />
        </ImageWrapper>
        <BodyWrapper>{selectedNews.content}</BodyWrapper>
      </ModalBody>
    </Container>
  );
};

export default Modal;
