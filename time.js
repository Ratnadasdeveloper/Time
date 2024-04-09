fetch('data.json')
            .then(response => response.json())
            .then(data => {
                // Get the div element for child-3
                const child3Div = document.querySelector('.child-3');
                // Loop through each item in the JSON array
                data.forEach(item => {
                    // Create a new div for each JSON object
                    const itemDiv = document.createElement('div');
                    // Set the text content of the div to display the title and date
                    itemDiv.innerHTML = `
                        <p>${item.title}</p>
                        <p>${item.date}</p>
                    `;
                    // Append the new div to child-3 div
                    child3Div.appendChild(itemDiv);
                });
            })
            .catch(error => console.error('Error fetching JSON:', error));