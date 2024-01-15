// Function to simulate creating a post
async function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newPost = { id: Math.random(), content: post };
      resolve(newPost);
    }, 1000);
  });
}

// Function to update the last user activity time
async function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lastActivityTime = new Date().toISOString();
      resolve(lastActivityTime);
    }, 1000);
  });
}

// Function to delete a post
async function deletePost(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Post with ID ${postId} deleted`);
      resolve();
    }, 1000);
  });
}

// New Promise for getting cold drinks after getting butter
async function getColdDrinks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Got cold drinks");
      resolve("Cold Drinks");
    }, 1000);
  });
}

// Main function using async/await and Promise.all
async function main() {
  try {
    const newPost = await createPost("This is a new post");
    const lastActivityTime = await updateLastUserActivityTime();

    console.log("All Posts and Last Activity Time:", { newPost, lastActivityTime });

    // Use Promise.all to run getColdDrinks and deletePost concurrently
    const [coldDrinks, deletedPost] = await Promise.all([
      getColdDrinks(),
      deletePost(newPost.id)
    ]);

    console.log("Got and Enjoyed:", coldDrinks);

    // Log remaining posts (in this case, an empty array)
    console.log("Remaining Posts:", []);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Run the example
main();
