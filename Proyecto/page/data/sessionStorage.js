export const setData = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
  };


export const getData = (key) =>{
    const res = JSON.parse(sessionStorage.getItem(key))
    return res ? res : [];
  };
  
