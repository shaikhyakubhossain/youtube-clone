export const fetchMaxAvailableThumbnailResolution = (item) => {
    const path = item.snippet.thumbnails;
    if(path.maxres){
      return path.maxres;
    }
    if(path.standard){
      return path.standard;
    }
    if(path.high){
      return path.high;
    }
    if(path.medium){
      return path.medium;
    }
    if(path.default){
      return path.default;
    }
  }