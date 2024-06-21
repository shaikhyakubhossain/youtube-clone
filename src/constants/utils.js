export const checkIfMaxResAvailableInAllItems = (items) => {
      let hasMaxRes = true;
      items.forEach((item) => {
        if(item.thumbnails.maxres === undefined){
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

export const videoDurationCalculator = (duration) => {
  let finalDuration = "";
    if (duration.length <= 5 && duration[duration.length - 1] === "S") {
      finalDuration = "0:" + duration.slice(2, duration.length - 1)
      return finalDuration;
    }
    if (duration.length > 5) {

      for(let i = duration.length - 2; i > 1 ; i--){
        if (!Number.isInteger(parseInt(duration[i - 1]))) {
          finalDuration = (duration[i - 1] !== "T" ? ":" : "") + (duration[i - 1] !== "T" ? "0" : "") + duration[i] + finalDuration;
          i--;
        }
        else if (Number.isInteger(parseInt(duration[i - 1]))) {
          finalDuration = (duration[i - 2] !== "T" ? ":" : "") + duration[i - 1] + duration[i] + finalDuration;
          i = i - 2;
        }
      }
      return finalDuration;
    }
}