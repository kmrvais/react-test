type LocalStorageData = {
    basket: number[],
    active_filters: {
        brands: string[],
        colors: string[],
        quantity_of_cameras: string[],
    }
};

const LocalStorageKey = 'localStorageData';

export const setLocalStorage = (data: LocalStorageData) => {
    localStorage.setItem(LocalStorageKey, JSON.stringify(data));
}

export const getLocalStorage = (): LocalStorageData => {
    const data = localStorage.getItem(LocalStorageKey)
    if (data) {
        return JSON.parse(data);
    }
    return {
        basket: [],
        active_filters: {
            brands: [],
            colors: [],
            quantity_of_cameras: [],
        }
    }
}
