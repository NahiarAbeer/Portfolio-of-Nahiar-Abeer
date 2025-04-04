        // Replace 'your-username' with your actual GitHub username
        const username = 'NahiarAbeer';
        const apiUrl = `https://api.github.com/users/${username}/repos`;
        const iframeContainer = document.getElementById('carousel');
        fetch(apiUrl)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const projectCard = document.createElement('div'); // Create a project card
                projectCard.classList.add('project-card');
    
                const projectImage = document.createElement('div');
                projectImage.classList.add('project-image');
    
                const projectTitle = document.createElement('div');
                projectTitle.classList.add('project-title');
                projectTitle.textContent = repo.name;
    
                if (repo.language === 'Python') {
                    // Display Python logo for Python projects
                    projectImage.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg')`;
                    projectImage.style.backgroundSize = 'contain';
                    projectImage.style.backgroundPosition = 'center';
                    projectImage.style.height = '200px';
                } else if (repo.language === 'HTML' || repo.language === 'CSS' || repo.language === 'JavaScript') {
                    // For web projects, show an iframe preview
                    const iframe = document.createElement('iframe');
                    iframe.src = repo.homepage || 'https://via.placeholder.com/300'; // Default placeholder if no homepage
                    iframe.style.width = '100%';
                    iframe.style.height = '200px';
                    iframe.frameBorder = '0';
                    iframe.sandbox = 'allow-same-origin allow-scripts'; // Restrict alerts and other unwanted behaviors
                    projectImage.appendChild(iframe);
    
                    // Create buttons for "Visit Website" and "Source Code"
                    const buttonContainer = document.createElement('div');
                    buttonContainer.style.marginTop = '10px';
    
                    const visitButton = document.createElement('a');
                    visitButton.href = repo.homepage || '#'; // Direct link to the website
                    visitButton.target = '_blank';
                    visitButton.textContent = 'Visit Website';
                    visitButton.style.marginRight = '20px';
                    visitButton.style.textDecoration = 'none';
                    visitButton.style.backgroundColor = '#3b82f6';
                    visitButton.style.color = "#fff"
                    visitButton.style.fontWeight = 'bold';
                    
                    const sourceButton = document.createElement('a');
                    sourceButton.href = repo.html_url; // Link to the repository
                    sourceButton.target = '_blank';
                    sourceButton.textContent = 'Source Code';
                    sourceButton.style.textDecoration = 'none';
                    sourceButton.style.backgroundColor = '#3b82f6';
                    sourceButton.style.color = "#fff"
                    sourceButton.style.fontWeight = 'bold';
    
                    buttonContainer.appendChild(visitButton);
                    buttonContainer.appendChild(sourceButton);
    
                    // Append buttons to the card
                    projectCard.appendChild(buttonContainer);
                } else {
                    // Display a default logo for non-web projects
                    projectImage.style.backgroundImage = `url('https://via.placeholder.com/300')`; // Default placeholder
                    projectImage.style.backgroundSize = 'contain';
                    projectImage.style.backgroundPosition = 'center';
                    projectImage.style.height = '200px';
                }
    
                // Append the project title and image to the card
                projectCard.appendChild(projectImage);
                projectCard.appendChild(projectTitle);
    
                // Append card to the carousel
                iframeContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching GitHub data:', error));