
import {useEffect,useState} from "react";
function InstagramPhotos(quantity, response) {
    const [photos,setPhotos]=useState(<p>Loading ...</p>);

    useEffect(()=>
        {
            if (response.data)
        
            // const imgTags = response.data.graphql.edge_owner_to_timeline_media.edges.map
            // (edge => 
            //     <img className="hover:opacity-75" src={edge.node.thumbnail_src} />
            // );
            // let imgTags = <p>OK!</p>
            setPhotos(<p>OK!</p>);
    
    }
    ,[response])
    return photos;
}

export default InstagramPhotos