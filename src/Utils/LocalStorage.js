//get 
export const installedAppList = () => {
    try {
        const data = localStorage.getItem('applist')
        return data ? JSON.parse(data) : []
    } catch (err) {
        console.log(err);
        return []

    }
}

//set
export const updatelist = (app) => {
    const applist = installedAppList()

    try {
        const isDup = applist.some(a => a.id === app.id)
        if (isDup) return alert('App Is Already Installed!')
        const updatedApplist = [...applist,app]
        localStorage.setItem('applist',JSON.stringify(updatedApplist))
    } catch (err) {
        console.log(err);
    }
}

//remove
export const removeFromAppList = id => {
    const applist = installedAppList()
    try{
        const updatedApplist = applist.filter(a=> a.id !== id)
        localStorage.setItem('applist',JSON.stringify(updatedApplist))
    }catch(err){
        console.log(err);
        
    }
}
