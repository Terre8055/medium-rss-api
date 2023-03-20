import Parser from 'rss-parser';
import cheerio from 'cheerio';

// Initialize the Parser
const parser = new Parser();

// Define an asynchronous function that takes a Medium username as an argument
async function getMediumData(username) {
  try {
    // Fetch the RSS feed for the specified user using the parser
    const feed = await parser.parseURL(`https://medium.com/feed/@${username}`);

    // Map over the items in the feed and extract the necessary data
    const items = feed.items.map(item => {
      // Check if the 'content:encoded' field is present in the item, otherwise use 'description'
      const content = item['content:encoded'] ? item['content:encoded'] : item.description;
      // Load the HTML content using Cheerio and extract the text content
      const $ = cheerio.load(content || '');
      const textContent = $('*').text();
      // Return an object with the necessary fields
      return {
        title: item.title,
        url: item.link,
        date: item.pubDate,
        content: textContent
      };
    });
    
    // Log the extracted data to the console
    console.log(items);
  } catch (err) {
    // If an error occurs, log the error message to the console
    console.error('Error:', err);
  }
}

// Call the function and pass the username as an argument
getMediumData();
