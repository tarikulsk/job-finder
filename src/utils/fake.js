//add data to local storage
const addToApply = id => {
    let appliesJobCart = {};
    const appliedJobs = localStorage.getItem('applied-job')

    if (appliedJobs) {
        appliesJobCart = JSON.parse(appliedJobs)
    }

    const apply = appliesJobCart[id]
    if (apply) {
        const newApply = apply + 1;
        appliesJobCart[id] = newApply
    } else {
        appliesJobCart[id] = 1
    }

    localStorage.setItem('applied-job', JSON.stringify(appliesJobCart))


}


const getAppliedjobs = () => {
    let appliesJobCart = {};
    const appliedJobs = localStorage.getItem('applied-job')

    if (appliedJobs) {
        appliesJobCart = JSON.parse(appliedJobs)
    }

    return appliesJobCart

}



export { addToApply, getAppliedjobs };