import React from "react";
import classes from '../styles/RecipeCard.module.css';
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Group } from '@mantine/core';

const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};
//to delete elements of html code on summary 

const RecipeCard = ({ id, title, cuisines, image, summary, ingredients }) => {
  console.log("cuisines:", cuisines);
  const maxLength = 670;
  const titleMaxLength = 40;


  // Limiter le texte à maxLength caractères et ajouter des points de suspension si nécessaire
  const limitedSummary = summary.length > maxLength ? `${summary.slice(0, maxLength)}...` : summary;
  const limitedTitle = title.length > titleMaxLength ? `${title.slice(0, titleMaxLength)}...` : title;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`recipes/${id}`);
  };

  return (
    <div className={classes.container} onClick={handleClick}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={image}
            height={160}
            width={3000}
            alt={title}
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
  <Text fw={500}>{limitedTitle}</Text>
  </Group>
  <Group justify="space-between" mt="md" mb="xs">
  <div>
    {cuisines && cuisines.length > 0 && (
      cuisines.map((cuisine, index) => {
        console.log("Cuisine:", cuisine);
        return (
          <Badge key={index} color="#f4612d" style={{ marginRight: '4px' }}>
            {cuisine}
          </Badge>
        );
      })
    )}
  </div>
  </Group>

        <Text size="sm" c="dimmed">
          {stripHtml(limitedSummary)}
        </Text>
      </Card>
    </div>
  );
};

export default RecipeCard;
