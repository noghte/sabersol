import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'https://sabersol.com',
    key: '20450952446dcb3fe3322fdb2f',
    version: "v3"
  });

  export default () => {
    api.posts
      .browse({limit: 5, include: 'tags,authors'})
      .then((posts) => {
          posts.forEach((post) => {
              console.log(post.title);
          });
      })
      .catch((err) => {
          console.error(err);
      });
  }