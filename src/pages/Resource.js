//Importing React and React-bootstrap needed for this page
import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

//Funtion using a table to display information with a link at the bottom using an anchor because going to a page outside this site
function BasicExample() {
  return (
    <div className="d-grid gap-2 p-3 text-center color:black" >
      <h1> Weight and Measure Equivalents</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Equivalent</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dash or pinch</td>
          <td>=</td>
          <td>less than 1/8 teaspoon</td>
        </tr>
        <tr>
          <td>1 1/2 teaspoons</td>
          <td>=</td>
          <td>1/2 tablespoon</td>
        </tr>
        <tr>
          <td>3 teaspoons</td>
          <td >=</td>
          <td>1 tablespoon; 1/2 fluid ounce</td>
        </tr>
        <tr>
          <td>2 tablespoons; 1 fluid ounce</td>
          <td >=</td>
          <td>1/8 cup</td>
        </tr>
        <tr>
          <td>16 tablespoons</td>
          <td >=</td>
          <td>1 cup; 8 fluid ounces; 1/2 pint</td>
        </tr>
        <tr>
          <td>2 cups</td>
          <td >=</td>
          <td>1 pint; 16 fluid ounces</td>
        </tr>

        <tr>
          <td>4 cups</td>
          <td >=</td>
          <td>2 pints; 1 quart; 32 fluid ounces</td>
        </tr>
        <tr>
          <td>4 quarts; 16 cups</td>
          <td >=</td>
          <td>1 gallon</td>
        </tr>
        <tr>
          <td>1/4 pound</td>
          <td >=</td>
          <td>4 ounces</td>
        </tr>
        <tr>
          <td>1 pound</td>
          <td >=</td>
          <td>16 ounces</td>
        </tr>
        <tr>
          <td>5 milliliters</td>
          <td >=</td>
          <td>1 teaspoon</td>
        </tr>
        <tr>
          <td>160°C</td>
          <td >=</td>
          <td>320°F</td>
        </tr>
        <tr>
          <td>190°C</td>
          <td >=</td>
          <td>375°F</td>
        </tr>
        <tr>
          <td>230°C</td>
          <td >=</td>
          <td>450°F</td>
        </tr>
      </tbody>
    </Table>
    <Card>
      <Card.Link href="https://www.tasteofhome.com/article/cooking-measurement-conversion/" target="_blank">More Converstions</Card.Link>
    </Card>
    </div>
    
  );
}

export default BasicExample;