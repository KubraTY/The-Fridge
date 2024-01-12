import { Grid } from '@mantine/core';
import { useViewportSize } from "@mantine/hooks";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import classes from '../styles/About.module.css'
import kubraPP from '../assets/kubra.jpg'
import cathPP from '../assets/catherine.jpeg'
import maximePP from '../assets/maxime.jpeg'

const About = () => {
    const {width} = useViewportSize()

/*     const handleOpenLink = (person) => {
      if (person=="Catherine"){
      window.open("https://www.linkedin.com/in/catherine-fournier-7245b563/", '_blank')
      }
      if (person=="Kubra"){
        window.open("https://www.linkedin.com/in/catherine-fournier-7245b563/", '_blank')
        }
      if (person=="Maxime"){
        window.open("https://www.linkedin.com/in/catherine-fournier-7245b563/", '_blank')
        }
    } */

    return(
    <div className={classes.container}>
      <h2>Welcome to The Fridge!</h2>
      <p>
        <strong>The Fridge</strong> was born from the innovative minds of three passionate students at IronHack, driven by a simple yet relatable problem: the hunger that strikes when you open your fridge and wonder what you can create with the ingredients staring back at you.
      </p>
      <p>
        Our mission is to <span className={classes.emphasize}>transform the daunting "What's for dinner?" question into an exciting opportunity to cook something delicious with what you already have.</span> Whether you're a carnivore, herbivore, or anywhere in between, "The Fridge" helps you discover personalized recipes that perfectly match your available ingredients and dietary choices.
      </p>
      <p>
        Join us on this flavorful journey and let "The Fridge" inspire your next culinary adventure!
      </p>
      <p>
      <span className={classes.emphasize}>Happy cooking,</span><br/>
        "The Fridge" Team
      </p>
    
    <h2>The team</h2>     
    <Grid className={classes.AboutGrid} cols={width > 1200 ? 3 : width > 800 ? 2 : 1}>
      <Grid.Col span={4}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={cathPP}
          height={160}
          alt="Catherine Fournier"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Catherine Fournier</Text>
        <Badge color="#f4612d">Web Developper</Badge>
      </Group>

      <Text size="sm" c="dimmed">
      Hey, I'm Catherine, a French native living in Zürich. After a long stint in marketing, I've switched gears to become a web developer. I'm all about cooking and rely on The Fridge app every day for awesome recipe ideas. Join me on this exciting journey of coding and creating delicious recipes!
      </Text>

      <a href="https://www.linkedin.com/in/catherine-fournier-7245b563/" target='blank' rel="noopener noreferrer">
      <Button color="blue" fullWidth mt="sm" radius="md" >
        Linkedin
      </Button>
      </a>
    </Card>
  </Grid.Col>
      <Grid.Col span={4}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={kubraPP}
          height={160}
          alt="Kübra Tokgözlü"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Kübra Tokgözlü</Text>
        <Badge color="#f4612d">Web Developper</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        I'm a Turkish native with a background in mathematics. Transitioning to IT, I've found excitement in problem-solving and coding. Family time is my greatest joy, and come summer, you'll catch me swimming in the Mediterranean. Join me in this journey where family, IT challenges, and seaside adventures intertwine.
      </Text>

      <a href="https://www.linkedin.com/in/kubra-tokgozlu/" target='blank' rel="noopener noreferrer">
      <Button color="blue" fullWidth mt="sm" radius="md">
        Linkedin
      </Button>
      </a>
    </Card>


      </Grid.Col>
      <Grid.Col span={4}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={maximePP}
          height={160}
          alt="Maxime Comptier"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Maxime Comptier</Text>
        <Badge color="#f4612d">Web Developper</Badge>
      </Group>

      <Text size="sm" c="dimmed">
      Greetings! I’m a French native with a rich background in Growth Marketing. By day, I navigate the digital landscape, crafting strategies for growth. By night, I transform into a DJ, unleashing beats and rhythms. Intrigued by nature and driven by curiosity, I find joy in the world of web development. Let’s explore and create together! 
      </Text>

      <a href="https://www.linkedin.com/in/maxime-comptier/" target='blank' rel="noopener noreferrer">
      <Button color="blue" fullWidth mt="sm" radius="md">
        Linkedin
      </Button>
      </a>
    </Card>

      </Grid.Col>
    </Grid>
  </div>
  );
  }
            


export default About;