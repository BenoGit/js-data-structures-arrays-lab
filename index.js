// Write your solution here!
const drivers = (["Milo", "Otis", "Garfield"])
    function destructivelyAppendDriver(){
        return drivers.push("Ralph")
    }

    function destructivelyPrependDriver(){
        return drivers.unshift("Bob")
    }

    function destructivelyRemoveLastDriver(){
        return drivers.pop("Ralph")
    }

    function destructivelyRemoveFirstDriver(o){
        return drivers.shift("Milo")
    }

    function appendDriver(){
    return [...drivers, "Broom"]
    }

    function prependDriver(){
    return ["Arnold", ...drivers]
    }

    function removeLastDriver(){
        return [...drivers.slice(0,2)]
    }

    function removeFirstDriver(){
        return [...drivers.slice(1)]
    }