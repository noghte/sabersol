import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'https://sabersol.com',
    key: '20450952446dcb3fe3322fdb2f',
    version: "v3"
  });

  export default function Blog({limit}) {
    let posts = []
    api.posts
      .browse({limit: limit, include: 'tags,authors'})
      .then((posts) => {
          posts.forEach((post) => {
              posts.push(post.title);
              console.log(post.title);
          });
      })
      .catch((err) => {
          console.error(err);
      });
    return(
        <ul>
            {
                posts.map((p,index)=> 
                {
                    <li>p</li>
                })
            }
        </ul>
    )
  }