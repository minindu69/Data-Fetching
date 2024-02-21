let resObj = {
    name: "sanoj",
    age: 28,
    status: false
}

const promise = ()=>{
    return new Promise((resolve, reject) => {
        
        if(resolve){
            // promise will be resolved after 5sec
            setTimeout(()=>{
                resObj.status = true;
                //pass the object as resolved value(response)
                resolve(resObj);
            },5000);
        }else{
            reject(resObj);
        }

    });
 }

const response = async()=>{
    try{
        const resObj = await promise(); // this wait relavent for this scope
        console.log(resObj);
        return resObj;
    }catch(resObjError){
        console.error("An error occurred:", resObjError);
        throw resObjError; // Re-throwing the error to be caught by the caller
    }
}

const fetchData = async() => {
    try {
        resObj = await response();
        console.log(resObj);
        console.log("Next line");
    } catch (resObjError) {
        // Handle the error thrown by throw error
        console.error("Error caught in top-level await:", resObjError);
        resObj = resObjError;
    }
};

await fetchData(); // top-level await

console.log("Top-level next line");

export{ resObj as responseObject } // all exports are must be at top-level of the module code
