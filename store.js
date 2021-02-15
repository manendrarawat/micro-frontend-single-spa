window.myapp = {
    counter: 0,
    incrementor: () => {
        console.log('store incrementor ');
        window.myapp.counter += 1;
        window.dispatchEvent(new Event('onIncrement'));
    },
    decrementor: () => {
        window.myapp.counter -= 1;
        window.dispatchEvent(new Event('onDecrement'));
    }
};