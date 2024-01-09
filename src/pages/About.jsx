import { Grid } from '@mantine/core';
import { useViewportSize } from "@mantine/hooks";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import classes from '../styles/About.module.css'


const About = () => {
    const {width} = useViewportSize()

    return(
        
    <Grid className={classes.AboutGrid} cols={width > 1200 ? 3 : width > 800 ? 2 : 1}>
      <Grid.Col span={4}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://media.licdn.com/dms/image/C4D03AQFQYYDzyLSZ9Q/profile-displayphoto-shrink_400_400/0/1599212519165?e=1710374400&v=beta&t=Gnoq7f2MW6O5hyfqOU6dOIAh59ayaJEp2_ndgarHRQg"
          height={160}
          alt="Catherine Fournier"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Catherine Fournier</Text>
        <Badge color="#f4612d">Web Developper</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="sm" radius="md">
        Linkedin
      </Button>
    </Card>
  </Grid.Col>
      <Grid.Col span={4}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://media.licdn.com/dms/image/D4D35AQEdI5w-YbC7Cw/profile-framedphoto-shrink_400_400/0/1682181663995?e=1705330800&v=beta&t=hO-zFo6NbJhr6gzsPA2_-bHmRiRMMtaKNIlpPnoKEwA"
          height={160}
          alt="Kübra Tokgözlü"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Kübra Tokgözlü</Text>
        <Badge color="#f4612d">Web Developper</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="sm" radius="md">
        Linkedin
      </Button>
    </Card>


      </Grid.Col>
      <Grid.Col span={4}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://media.licdn.com/dms/image/C5603AQE37acVQZw8SQ/profile-displayphoto-shrink_400_400/0/1633614104331?e=1710374400&v=beta&t=PRphWC81pQvr4UIfZPTBQ_8RdtytI7PPiCElTv7lzkQ"
          height={160}
          alt="Maxime Comptier"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Maxime Comptier</Text>
        <Badge color="#f4612d">Web Developper</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="sm" radius="md">
        Linkedin
      </Button>
    </Card>

      </Grid.Col>
    </Grid>
  );
  }
            


export default About;