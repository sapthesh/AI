# AI Image Generator Website

The AI Image Generator Website is a web application that integrates multiple AI image generators. It allows users to generate images by supplying prompts and select from different AI image generator options.

## Features

- Integration with multiple AI image generator APIs
- User-friendly interface to enter prompts and select the generator
- Generates and displays images based on the provided prompts
- Saves generated images in files
- Stores the random value and image link in a MySQL database

## Technologies Used

- Backend: PHP
- Frontend: HTML, CSS, JavaScript
- Database: MySQL

## Setup

1. Clone the repository:

   ```bash 
   git clone https://github.com/your-username/ai-image-generator-website.git
   ```

2. Set up the database:
   - Create a MySQL database with the name `your_database_name`.
   - Create a table named `generated_images` with the provided structure in the `index.php` file.

3. Update the backend configuration:
   - Open `index.php` and update the database credentials (`$dbHost`, `$dbUsername`, `$dbPassword`, `$dbName`) with your actual database details.

4. Update the AI image generator API keys:
   - Replace the placeholder API keys (`YOUR_DALL_E_API_KEY`, `YOUR_DEEPART_API_KEY`, `YOUR_CLOUD_VISION_API_KEY`) with your actual API keys in the `callImageGeneratorAPI` function.

5. Start a web server:
   - Copy the project files to your web server's document root directory.
   - Ensure PHP is installed and configured on your web server.

6. Access the website:
   - Open a web browser and navigate to the website URL (e.g., http://localhost/ai-image-generator-website/).

## Usage

1. Select an AI image generator from the dropdown list.
2. Enter a prompt in the input field.
3. Click the "Generate Image" button.
4. The generated image will be displayed, along with a random value for identification.

## Customization

- You can modify the HTML, CSS, and JavaScript files to change the website's appearance and functionality.
- To add or remove AI image generator options, update the `<select>` element in the HTML file (`index.php`) with the desired options.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize the README.md file according to your project's requirements and add any additional sections or information as needed.
