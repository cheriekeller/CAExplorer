export const toggleSetItem = (set, item) => set.has(item) ? set.remove(item) : set.add(item)
