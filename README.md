# Medium RSS API

This project is a simple Node.js API that retrieves Medium posts from a user's RSS feed and returns the post titles, URLs, dates, and content in plain text.

## Prerequisites

To use this API, you'll need:

- Node.js installed on your machine
- A Medium account with published posts
- The username associated with your Medium account

## Installation

- Clone the repository: `git clone https://github.com/your-username/medium-rss-api.git`
- Navigate to the project directory: `cd medium-rss-api`
- Install dependencies: `npm install`

## Usage

To use the API, run the `api.js` file using Node.js:

```
node api.js
```
By default, this will retrieve posts from the Medium account associated with the username `michaeladev`. To retrieve posts from a different Medium account, modify the `getMediumData()` function in `api.js` to use a different username:

## Example Response

The API returns an array of objects containing the post title, URL, date, and content in plain text:

```
[
  {
    title: 'My First Post',
    url: 'https://medium.com/@michaeladev/my-first-post-12345',
    date: 'Sun, 20 Mar 2022 12:34:56 GMT',
    content: 'This is the plain text content of my first post on Medium.'
  },
  // ...
]
```

## License

This project is licensed under the MIT License 