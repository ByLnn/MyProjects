class Enes {
    constructor () {
        this.observers = []
    }
    
    updating = () => {
        this.observer.forEach(observer => observer())
    }

    delete = () => {}

}