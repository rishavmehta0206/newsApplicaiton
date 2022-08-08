import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import GlobalContext from "../Context/GlobalContext";
import News from "./News";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled.div`
  padding: 40px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const SearchContainer = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  padding: 15px;
  width: 60%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;
const CategotyContainer = styled.div``;
const Home = () => {
  const [cat, setCat] = useState("");
  const { newspaper, dispatch } = useContext(GlobalContext);
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-07-08&sortBy=publishedAt&apiKey=90ea7071032846da88d2d8e95a1744e2"
      );
      console.log(response.data.articles);
      dispatch({ type: "FETCH", payload: response.data.articles });
      //   setNews(response.data.articles);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const searchResponse = await axios.get(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=90ea7071032846da88d2d8e95a1744e2`
      );
      dispatch({ type: "FETCH", payload: searchResponse.data.articles });
    };
    fetchData();
  }, [search]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const searchResponse = await axios.get(
//         `https://newsapi.org/v2/everything/${cat}?q=${search}&apiKey=90ea7071032846da88d2d8e95a1744e2`
//       );
//       dispatch({ type: "CAT_FETCH", payload: cat });
//     };
//     fetchData();
//   }, [cat]);
  const getValueOfCat = (e) => {
    setCat(e.target.value);
  };
  return (
    <Container>
      <SearchContainer>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="enter to search"
        />
        <i className="fa fa-solid fa-magnifying-glass"></i>
      </SearchContainer>
      {/* <CategotyContainer>
        <select style={{ width: "200px" }} onChange={getValueOfCat}>
          <option disabled>select category</option>
          <option>business</option>
          <option>entertainment</option>
          <option>general</option>
          <option>health</option>
          <option>science</option>
          <option>sports</option>
        </select>
      </CategotyContainer> */}
      <Wrapper>
        {newspaper?.map((item, index) => {
          return <News key={index} item={item} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Home;
