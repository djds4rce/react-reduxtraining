const myLogger = (store)=> (next) => (action)=>{
    console.log("my logger triggered");
    console.log(action);
    console.log("Previous State: "+JSON.stringify(store.getState()));
    next(action);
    console.log("Next State: "+JSON.stringify(store.getState()));
}

export default myLogger;
