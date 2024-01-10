import classes from '../styles/RecipeCard.module.css';
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Group,Indicator } from '@mantine/core';


const RecipeCard = ({ id, title, image, readyInMinutes, servings, dishTypes, diets }) => {

  const titleMaxLength = 40;

  // Limiter le texte à maxLength caractères et ajouter des points de suspension si nécessaire
  
  const limitedTitle = 
    title && title.length > titleMaxLength ? `${title.slice(0, titleMaxLength)}...` : title;

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
       
  <Indicator inline label={`${readyInMinutes} min`} size={50}>
    <Group justify="space-between" mt="sm" mb="xs">
      <Text fw={700} c="#252525">{limitedTitle}
      </Text>
    </Group>
  </Indicator>

  <Text fw={500} c="#252525">
    Servings : {servings}
  </Text>
  
  <Group justify="space-between" mt="sm" mb="xs">
      <div>
      <p > 
        <span className={classes.dishtitle}>Diet :</span>
      {diets && diets.length > 0 && (
        diets.slice(0, 2).map((diet, index) => {
          return (
            <Badge key={index} color="#f4612d" style={{ marginRight: '4px' }}>
              {diet}
            </Badge>
          );
        })
      )}
      </p>
    </div>
      </Group>  
  <div>
    <p > <span className={classes.dishtitle}>Dish Type :</span>
    {dishTypes && dishTypes.length > 0 && (
      dishTypes.slice(0, 6).map((dishType, index) => {
        
        return (
          <Badge key={index} color="#f4612d" style={{ marginRight: '4px' }}>
           {dishType}
          </Badge>
        );
      })
    )}</p>
   
  </div>
  
      
      </Card>
     
    </div>
    
  
  );
};

export default RecipeCard;
