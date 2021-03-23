// the callback will be called every time the store.dispatch() is called

const incrs = () => count += 1
store.subscribe(incrs)