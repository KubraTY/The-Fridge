import classes from '../styles/RecipeCard.module.css';
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Group,Indicator } from '@mantine/core';


const RecipeCard = ({
  id,
  title,
  image,
  readyInMinutes,
  servings,
  dishTypes,
  vegetarian,
  vegan,
  glutenFree,
  dairyFree,
}) => {
  const titleMaxLength = 35;

  const limitedTitle =
    title && title.length > titleMaxLength ? `${title.slice(0, titleMaxLength)}...` : title;


  return (
    <div className={classes.container}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={image} height={160} alt={title} />
        </Card.Section>

        <Indicator color="#f4612d" withBorder size={50} inline label={`${readyInMinutes} min`}>
          <Group justify="space-between" mt="sm" mb="xs">
            <Text fw={700} c="#252525">{limitedTitle}</Text>
          </Group>
        </Indicator>

        <Text fw={500} c="#252525">
          Servings: {servings}
        </Text>

        <Group justify="space-between" mt="sm" mb="xs">
          <div>
            <p>
              <span className={classes.dishtitle}>Diet:</span>

              {(vegetarian || vegan || glutenFree || dairyFree) && (
                  <>
                  {vegetarian && <Badge color="#f4612d" className={classes.badge}>Vegetarian</Badge>}
                  {vegan && <Badge color="#f4612d" className={classes.badge}>Vegan</Badge>}
                  {glutenFree && <Badge color="#f4612d" className={classes.badge}>Gluten-Free</Badge>}
                  {dairyFree && <Badge color="#f4612d" className={classes.badge}>Dairy-Free</Badge>}
                  </>
              )}
            </p>
          </div>
        </Group>
  <div>
    <p > <span className={classes.dishtitle}>Dish Type :</span>
    {dishTypes && dishTypes.length > 0 && (
      dishTypes.slice(0, 6).map((dishType, index) => {
        
        return (
          <Badge key={index} color="#f4c0b0" style={{ marginRight: '4px' }}>
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
