import {
  CardDiv,
  CardImg,
  CardLine,
  DivImg,
  Image,
  LiCard,
  BtnCard,
  UserDiv,
  UlText,
  BtnText,
} from "./Card.styled.js";
import imgCard from "../img/cardTestTask.png";
import axios from "axios";
import { useState, useEffect } from "react";

export const Card = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const initialFollowers = localStorage.getItem("addedFollowers");
  const [addedFollowers, setAddedFollowers] = useState(
    initialFollowers ? JSON.parse(initialFollowers) : []
  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("addedFollowers", JSON.stringify(addedFollowers));
  }, [addedFollowers]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://649cb86d048075719238763c.mockapi.io/users"
      );
      setResult(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createAddFollowerHandler = (userId) => async () => {
    if (addedFollowers.includes(userId)) {
      try {
        const response = await axios.get(
          `https://649cb86d048075719238763c.mockapi.io/users/${userId}`
        );
        const currentUser = response.data;
        const currentFollowers = currentUser.followers;
        const newFollowers = currentFollowers - 1;
        const updateResponse = await axios.put(
          `https://649cb86d048075719238763c.mockapi.io/users/${userId}`,
          { followers: newFollowers }
        );
        console.log(updateResponse);

        setResult((prevResult) => {
          const updatedResult = [...prevResult];
          const updatedUser = updatedResult.find((user) => user.id === userId);
          if (updatedUser) {
            updatedUser.followers = newFollowers;
          }
          return updatedResult;
        });

        setAddedFollowers((prevFollowers) =>
          prevFollowers.filter((followerId) => followerId !== userId)
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.get(
          `https://649cb86d048075719238763c.mockapi.io/users/${userId}`
        );
        const currentUser = response.data;
        const currentFollowers = currentUser.followers;
        const newFollowers = currentFollowers + 1;
        const updateResponse = await axios.put(
          `https://649cb86d048075719238763c.mockapi.io/users/${userId}`,
          { followers: newFollowers }
        );
        console.log(updateResponse);

        setResult((prevResult) => {
          const updatedResult = [...prevResult];
          const updatedUser = updatedResult.find((user) => user.id === userId);
          if (updatedUser) {
            updatedUser.followers = newFollowers;
          }
          return updatedResult;
        });

        setAddedFollowers((prevFollowers) => [...prevFollowers, userId]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const isUserFollowed = (userId) => addedFollowers.includes(userId);

  return (
    !isLoading &&
    result.map(({ avatar, id, followers, tweets }) => (
      <div key={id}>
        <CardDiv>
          <CardImg src={imgCard} alt="Наповнення карточки" />

          <UserDiv>
            <CardLine></CardLine>
            <DivImg>
              <Image src={avatar} alt="Фото користувача" />
            </DivImg>
            <UlText>
              <LiCard>{tweets} tweets</LiCard>
              <LiCard>{followers} Followers</LiCard>
            </UlText>
            <BtnCard onClick={createAddFollowerHandler(id)}>
              <BtnText>{isUserFollowed(id) ? "FOLLOWING" : "FOLLOW"}</BtnText>
            </BtnCard>
          </UserDiv>
        </CardDiv>
      </div>
    ))
  );
};
