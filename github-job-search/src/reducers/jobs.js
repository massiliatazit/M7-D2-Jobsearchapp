 const jobsReducer = (state=[],action)=>{

    switch(action.type){
        case 'setJobs':
            return action.jobs;
        case 'loadmoreJobs':
            return [...state, ...action.jobs];
        default:
            return state;
    }
}
 export default jobsReducer;