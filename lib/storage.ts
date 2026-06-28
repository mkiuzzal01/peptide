const KEY = "announcement-v1";

export const popupStorage = {
  hasSeen() {
    return localStorage.getItem(KEY) === "true";
  },

  markSeen() {
    localStorage.setItem(KEY, "true");
  },

  reset() {
    localStorage.removeItem(KEY);
  },
};
