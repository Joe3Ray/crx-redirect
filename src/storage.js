export const set = (key, val) => {
  chrome.storage.sync.set({
    [key]: val,
  });
};

export const get = key => (
  new Promise((resolve) => {
    chrome.storage.sync.get(key, (items) => {
      resolve(items);
    });
  })
);
