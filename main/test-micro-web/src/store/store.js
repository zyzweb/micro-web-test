export const creatStore = (initData) => (() => {
  let store = initData;
  let observers = [];
  const getStore = () => {
    return store;
  }
  const updateStore = (newValue) => new Promise((res) => {
    if (newValue !== store) {
      let oldValue = store;
      store = newValue;
      res(store);

      observers.forEach(fn => fn(newValue, oldValue));
    }
  })

  const subscribeStore = (fn) => {
    observers.push(fn);
  }
  return { getStore, updateStore, subscribeStore }
})()


