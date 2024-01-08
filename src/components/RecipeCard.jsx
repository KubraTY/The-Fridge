import React from "react";
import classes from '../styles/RecipeCard.module.css';
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const RecipeCard = ({ id, label, dietLabels, ingredients, remove }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`recipes/${id}`);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    remove();
  };

  return (
    <div className={classes.container} onClick={handleClick}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={'https://edamam-product-images.s3.amazonaws.com/web-img/17a/17a967f288150d3ddf5eae046a5b8057.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIFcYkwvSh%2BARsqxposjdjCFUETgFmK9RXmVQx9P%2F1QKzAiEA4ByP1Jbis%2FTlZtUPNdWcBvAiNP7wyaiYru%2BL6iGvTcQqwgUIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDJTeWq%2BShymFGtNz4yqWBQDe6nMJvBepNhA1MJFSaIXZtpX%2FAAicMsqjV6lwdgooQs250iaUQflsPMTgdP6B0I6HNl3Uf9SFF%2BpzEjP0iNdr1AOrPZ2yfwPnS4bdaa6ZOYCoGaXWNI2MKM8TRwaaq1lao%2BtLBA7QeUaejzZQXh%2BCQNBY4wAxPoqTjw6RCveFb3Qs0BVfP7KomW2D3xkPHYu5H%2B7RrOr1wAt7FVH1AlNZVlNqhGAkev3ez0MIXbAepEQUrjV%2BPv%2F3MVVqmtU45wA8QbWkcWX4aZR58VZudeezHuc5aLYqNyphG6YsEtelhKrn%2BR5aCqB9G2o1KYV2W6wxu4WuTYc7TXyMUBB5W%2FEtCbLfdrwYqGRKDNjQbE7f6d9lMYwH8c%2FW5vGIVe6smc%2Bn0SuU8Ll5fwyqEseky47IN4DQV6YUvuixuKm39QNqEjUVWZrFPR24clpo2zmHsnc0VDel7UdUlN3BbYPlGcViLl6w0Epj1pXiNLC9I7zZzqQrc9h9KmBtZISifctK%2B66vdzzkTDntEbSswv8QSs6XcACiCBq5vu8ors5DVUfSXcxtWoXylLOuUF1TjGNRTCjQ6ChJY7HxH5re4Tv9fPb83HV39nx%2FgMCgxPgASqqIUkIZcfr3B7kM1dmrKqk0j3KY%2BvERJ2SjagMu%2BqeA2uXfvwU%2Fkvn%2FdcfA8fizpF%2BooZnRQN3RsenAeJJAk5aIjuVvN09YMN6K4cxRdTlZPiMUVIyKQfeVjDpME8QMb6b0MqNbP6Cs3TC3StuwZ3NfVyd%2BFgnJssqi%2F3Q243X%2B0oCX8NmTVIQDkZ%2B9PbzZtwlplBO2Pk54jRlw3SUAgEL9OyIE6%2BHRLAyrEDT0wSpwYS2K8rOkcaVRbPiunjp5hwMz6paYIjnlMO6Y36wGOrEBR6wapOTkNGcMvGRT7tg2flAhbg2AaR5CxqVXXPhXAwCrjETFWumIhztrfGZ7L19UdaCxXDCl1BSTfuWDYz2VI7dlgfkO1d%2Fy9Ih5x4HlN4tIXLXYXv6RRK8MVAVqBLb0lqKD01bKrM1HMqU6L9AiYUECzx%2FurLp3oCNXpEp4n8TShPBK0k%2BfPK%2Fd59IRDnXnyVm6k38Bc%2Bsqtb2BF%2F%2BCtBWPs0VC99Q6s2Gh64STYQ2p&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240105T104751Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEPXFO7W6%2F20240105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=174c9288398f4294864f89eaa8619f51ee0c81266b2bdf3eefbc9add6e8835a3'}
            height={160}
            alt={label}
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{label}</Text>
        </Group>

        <Group justify="space-between" mt="md" mb="xs">
          {dietLabels && dietLabels.length > 0 && (
            <div>
              <Text size="sm" c="dimmed">
                Diet Labels:
              </Text>
              {dietLabels.map((label, index) => (
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