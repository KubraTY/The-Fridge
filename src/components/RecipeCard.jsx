import React from "react";
import classes from '../styles/RecipeCard.module.css';
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Group } from '@mantine/core';

const RecipeCard = ({ id, title, diets, image, ingredients }) => {
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
            alt={title}
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{title}</Text>
        </Group>

        <Group justify="space-between" mt="md" mb="xs">
          {diets && diets.length > 0 && (
            <div>
              <Text size="sm" c="dimmed">
                Diet Labels:
              </Text>
              {diets.map((label, index) => (
                <Badge key={index}>{label}</Badge>
              ))}
            </div>
          )}
        </Group>

        <Text size="sm" c="dimmed">
          {ingredients &&
            ingredients.map((ingredient, index) => (
              <div key={index}>
                {ingredient.text} - {ingredient.quantity} {ingredient.measure}
              </div>
            ))}
        </Text>
      </Card>
    </div>
  );
};

export default RecipeCard;