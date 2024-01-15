// Function to simulate creating a post
function createPost(post) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation (e.g., API call)
      setTimeout(() => {
        const newPost = { id: Math.random(), content: post };
        resolve(newPost);
      }, 1000);
    });
  }
  
  // Function to update the last user activity time
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation (e.g., database update)
      setTimeout(() => {
        const lastActivityTime = new Date().toISOString();
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  // Function to delete a post
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation (e.g., API call)
      setTimeout(() => {
        console.log(`Post with ID ${postId} deleted`);
        resolve();
      }, 1000);
    });
  }
  
  // Example usage
  async function main() {
    try {
      const newPost = await createPost("This is a new post");
      const lastActivityTime = await updateLastUserActivityTime();
  
      console.log("All Posts and Last Activity Time:", { newPost, lastActivityTime });
  
      // Simulate deleting the last post
      await deletePost(newPost.id);
  
      // Log remaining posts (in this case, an empty array)
      console.log("Remaining Posts:", []);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  // Run the example
  main();
  