// MainContent.js

// Import the fetchData function
import fetchData from '../api/tarkov.js';
import { gql } from 'graphql-request';

// Define your GraphQL query and variables
const query = gql`
query ($name: ItemType!){
  items(type: $name) {
    id
    name
    shortName
    basePrice
    width
    height
    weight
    containsItems {
      item {
        description
      }
    }
    image512pxLink
    gridImageLink
    wikiLink
  }
}

`;
const variables = { name: 'preset' };


// Use the fetchData function to get data from the Tarkov API
fetchData(query, variables)
    .then(data => {
        // Get the weapons-list tbody
        const weaponsList = document.getElementById('weapons-list');

        // Loop through the items array
        data.items.forEach(item => {
            // Create a new tr for the row
            const row = document.createElement('tr');

            // Create td elements for each piece of data
            const name = document.createElement('td');
            name.setAttribute('data-sort', item.name); // Add this line
            const img = document.createElement('img');
            img.src = item.image512pxLink; // Set the src to the image link
            img.alt = item.name; // Set the alt text to the weapon name
            img.title = item.name; // Set the title to the weapon name for the tooltip
            name.appendChild(img);
            row.appendChild(name);

            const basePrice = document.createElement('td');
            basePrice.textContent = item.basePrice;
            row.appendChild(basePrice);

            const gridSpace = document.createElement('td');
            gridSpace.textContent = item.width * item.height;
            row.appendChild(gridSpace);

            const weight = document.createElement('td');
            weight.textContent = item.weight;
            row.appendChild(weight);

            const wikiLink = document.createElement('td');
            const link = document.createElement('a');
            link.href = item.wikiLink;
            link.textContent = 'Go to Wiki';
            wikiLink.appendChild(link);
            row.appendChild(wikiLink);

            // Append the row to the weapons-list tbody
            weaponsList.appendChild(row);


        });
        $('#weapons-table').DataTable({
            columnDefs: [
                { targets: 0, type: 'alt-string' }
            ]
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

