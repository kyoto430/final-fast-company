export const calcTotalPrice = (items) =>
    items.reduce((a, event) => (a += parseInt(event.price)), 0);
