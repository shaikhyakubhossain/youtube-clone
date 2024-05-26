export const checkIfMaxResAvailableInAllItems = (items) => {
      let hasMaxRes = true;
      items.forEach((item) => {
        if(item.snippet.thumbnails.maxres === undefined){
          hasMaxRes = false;
          return hasMaxRes;
        }
      });
}

// export const fetchMaxAvailableThumbnailResolutionForEachItem = (item) => {
//     const path = item.snippet.thumbnails;
//     if(path.maxres){
//       return path.maxres;
//     }
//     if(path.standard){
//       return path.standard;
//     }
//     if(path.high){
//       return path.high;
//     }
//     if(path.medium){
//       return path.medium;
//     }
//     if(path.default){
//       return path.default;
//     }
//   }

export const toggleURL = (urls) => {
  const baseURL = window.location.href;
  const globalURL = urls[0]
  const localURL = urls[1]
  // console.log("hiiiiii", baseURL.slice(0, 17));
    if(baseURL.slice(0, 17) === localURL.slice(0, 17)){
        return localURL;
    }
    else{
      return globalURL;
    }
}