export const calcTotalPrice = (items) =>
    items.reduce((a, event) => (a += event.price), 0);
