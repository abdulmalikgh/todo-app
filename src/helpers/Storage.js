class Storage {
    getSavedState(key) {
        let savedState = null;
        if(window.localStorage.getItem(key)) {
            savedState = JSON.parse(window.localStorage.getItem(key))
        }
        return savedState;
    }
    saveState(key, state) {
        window.localStorage.setItem(key, JSON.stringify(state))
      }
    clearSavedData(key){
        window.localStorage.removeItem(key)
    }
    clearAllSavedData(){
        window.localStorage.clear();
    }
}

let storage = new Storage()
export default  storage