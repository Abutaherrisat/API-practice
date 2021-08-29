const loadData = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data =>displayData(data))
}
loadData()
const displayData = data =>{
    const buddies = data.results
    console.log(data)
    const buddyDiv = document.getElementById('buddies')
    for(const buddy of buddies){
        // console.log(buddy.name.first)
        const p = document.createElement('p')
        p.innerText = `
        name:${buddy.name.first} ${buddy.name.last}  email:${buddy.email} gender: ${buddy.gender}

        
        
        `
        buddyDiv.appendChild(p)
    }
}