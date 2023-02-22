//Importing what is needed from react and react-boostrap
import React from 'react'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
//importing image for page 
import food from '../image/Variety-fruits-vegetables.jpg'

//Fuction useing Card to display information about food.
const About = () => {
  return (
    <div>
    <Image fluid src={food}/>
    
    <div className="d-grid gap-2 p-3 ">
    <h1> What's In Food</h1>
    </div>
    
    <Card body >Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.

    Omnivorous humans are highly adaptable and have adapted to obtain food in many different ecosystems. The majority of the food energy required is supplied by the industrial food industry, which produces food with intensive agriculture and distributes it through complex food processing and food distribution systems. This system of conventional agriculture relies heavily on fossil fuels, which means that the food and agricultural system is one of the major contributors to climate change, accountable for as much as 37% of total greenhouse gas emissions.[1]

    The food system has significant impacts on a wide range of other social and political issues including: sustainability, biological diversity, economics, population growth, water supply, and access to food. Food safety and food security are monitored by international agencies like the International Association for Food Protection, World Resources Institute, World Food Programme, Food and Agriculture Organization, and International Food Information Council.
    </Card>;
  


  </div>
  )
}

export default About