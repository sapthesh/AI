 // Frontend JavaScript code goes here
        const generateBtn = document.getElementById('generate-btn');
        const generatorSelect = document.getElementById('generator');
        const promptInput = document.getElementById('prompt');
        const generatedImage = document.getElementById('generated-image');
        const randomValueText = document.getElementById('random-value');

        generateBtn.addEventListener('click', () => {
            const prompt = promptInput.value;
            const generator = generatorSelect.value;

            fetch('index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `prompt=${prompt}&generator=${generator}`
            })
            .then(response => response.json())
            .then(data => {
                generatedImage.src = data.image_url;
                randomValueText.innerText = `Random Value: ${data.random_value}`;
            });
        });
