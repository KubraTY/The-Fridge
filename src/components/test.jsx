import React from "react";
import classes from '../styles/RecipeCard.module.css' 
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';


const Test = ({ id, title, image, remove }) => {
   const navigate = useNavigate()

  return (
  
    <div className={classes.container} onClick={(event) => {
        navigate(`recipes/${id}`)
    }}>
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
        <Badge color="pink">On Sale</Badge>
      </Group>

  
      <button className={classes.deleteButton} onClick={(event) => {
        event.stopPropagation
        remove()
    }}>
        Delete
      </button>
      </Card>
    </div>
    
  );
};

     
       
     


      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
  




export default Test;