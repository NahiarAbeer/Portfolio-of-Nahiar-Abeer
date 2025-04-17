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
    
                if (repo.language === 'HTML' || repo.language === 'CSS' || repo.language === 'JavaScript') {
                    const img = document.createElement('img');
                    img.src = `https://api.microlink.io/?url=${repo.homepage}&screenshot=true&meta=false&embed=screenshot.url`;
                    img.alt = repo.name;
                    img.style.width = '100%';
                    img.style.height = '200px';
                    img.loading = 'lazy';
                    img.onerror = function () {
                        this.src = 'https://via.placeholder.com/300'; // fallback image
                    };
                    projectImage.appendChild(img);
                
                    // Create buttons
                    const buttonContainer = document.createElement('div');
                    buttonContainer.style.marginTop = '10px';
                
                    const visitButton = document.createElement('a');
                    visitButton.href = repo.homepage || '#';
                    visitButton.target = '_blank';
                    visitButton.textContent = 'Visit Website';
                    visitButton.className = 'project-btn';
                
                    const sourceButton = document.createElement('a');
                    sourceButton.href = repo.html_url;
                    sourceButton.target = '_blank';
                    sourceButton.textContent = 'Source Code';
                    sourceButton.className = 'project-btn';
                
                    buttonContainer.appendChild(visitButton);
                    buttonContainer.appendChild(sourceButton);
                    projectCard.appendChild(buttonContainer);
                } else {
                    // Handle non-web projects
                    const img = document.createElement('img');
                    img.src = getLanguageLogo(repo.language); // Get the programming language logo
                    img.alt = repo.language || 'Unknown Language';
                    img.style.width = '100%';
                    img.style.height = '200px';
                    img.style.objectFit = 'contain';
                    img.loading = 'lazy';
                    projectImage.appendChild(img);
                
                    // Create a button for the GitHub repository
                    const buttonContainer = document.createElement('div');
                    buttonContainer.style.marginTop = '10px';
                
                    const sourceButton = document.createElement('a');
                    sourceButton.href = repo.html_url;
                    sourceButton.target = '_blank';
                    sourceButton.textContent = 'Source Code';
                    sourceButton.className = 'project-btn';
                
                    buttonContainer.appendChild(sourceButton);
                    projectCard.appendChild(buttonContainer);
                }
    
                // Append the project title and image to the card
                projectCard.appendChild(projectImage);
                projectCard.appendChild(projectTitle);
    
                // Append card to the carousel
                iframeContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching GitHub data:', error));
function getLanguageLogo(language) {
    const logos = {
        Python: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        Java: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
        JavaScript: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        C: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
        'C++': 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
        HTML: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        CSS: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        PHP: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
        Ruby: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg',
        Go: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
        Rust: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg',
    };

    return logos[language] || 'https://via.placeholder.com/300'; // Default placeholder if no logo is found
}