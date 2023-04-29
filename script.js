// Tweetr user data, mimicking any data set. We are hard coding the data in our JavaScript file for now. Later on, we will be pulling data from files, APIs, and databases.
const user = {
  name: "Teutopolis Wooden Shoes",
  handle: "@woodenshoelife",
  joined: "January 2013",
  followers: 25,
  following: 17,
  avatar: "./assets/images/wooden-shoes-logo.png",
  tweets: [
    {
      date: "Oct 8",
      content:
        "hey this is CVS. we filled your prescription. can u come pick it up in the next 17 seconds or should we light it on fire in the parking lot",
      replies: 17,
      retweets: 200,
      likes: 567,
    },
    {
      date: "Oct 6",
      content: "mosquitoes really wake up every day and choose violence",
      replies: 8,
      retweets: 117,
      likes: 804,
    },
    {
      date: "Oct 4",
      content:
        'brain: "did we get anything done this weekend?" me: "no" brain: "ok then at least we relaxed" me: "somehow also no"',
      replies: 450,
      retweets: 873,
      likes: 999,
    },
  ],
};

const feed = document.getElementById("tweets");

// for a single tweet

// const tweet = document.createElement("div");
// tweet.classList.add("tweet");
// feed.appendChild(tweet);
// const image = document.createElement("img");
// image.classList.add("tweet__avatar");
// tweet.appendChild(image);
// const text = document.createElement("div");
// text.classList.add("tweet__text");
// tweet.appendChild(text);
// const userName = document.createElement("h3");
// userName.classList.add("tweet__name");
// userName.innerText = user.name;
// text.appendChild(userName);
// const paragraph = document.createElement("p");
// paragraph.classList.add("tweet__paragraph");
// paragraph.innerText = user.tweets[0].content;
// text.appendChild(paragraph);

// for all of the tweets

for (let i = 0; i < user.tweets.length; i++) {
  // Creating single tweet div
  const tweet = document.createElement("div");

  // Add single tweet container class
  tweet.classList.add("tweet");

  // Append single tweet container to feed
  feed.appendChild(tweet);

  // Create image element
  const image = document.createElement("img");

  // Add class to image element
  image.classList.add("tweet__avatar");

  // Append avatar to tweet
  tweet.appendChild(image);

  // Create container for text
  const text = document.createElement("div");

  // Add class to text container
  text.classList.add("tweet__text");

  // Append text container to tweet
  tweet.appendChild(text);

  // Create name element
  const userName = document.createElement("h3");

  // Add class to userName
  userName.classList.add("tweet__name");

  // Add userName text
  userName.innerText = user.userName;

  // Append userName to text container
  text.appendChild(userName);

  // Create element for paragraph
  const paragraph = document.createElement("p");

  // Add class to paragraph
  paragraph.classList.add("tweet__paragraph");

  // Add paragraph text
  paragraph.innerText = user.tweets[i].content;

  // Append paragraph to text container
  text.appendChild(paragraph);
}
