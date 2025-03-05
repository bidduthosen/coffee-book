import toast from "react-hot-toast";

// get the fevorite item in localStorage
const storedCoffeeByLocalStorage = () =>{
    const storedCoffee = localStorage.getItem('fevorite');
    if(storedCoffee){
        return JSON.parse(storedCoffee);
    }
    else{
        return [];
    }
}


// set the fevorite item in localStorage
const setFevoriteCoffeByLocalStore = (coffee) => {
    const storedCoffees = storedCoffeeByLocalStorage();

    const isExistCoffee = storedCoffees.find(singleCF => singleCF.id === coffee.id);
    if(!isExistCoffee){
        storedCoffees.push(coffee);
        localStorage.setItem('fevorite', JSON.stringify(storedCoffees))
        toast.success('congress',{
            position: 'top-right'
        })
    }else{
        toast.error('Exists', {
            position: 'top-right'
        })
    }
}

// Remove the fevorite item in localStorage




export { setFevoriteCoffeByLocalStore, storedCoffeeByLocalStorage }