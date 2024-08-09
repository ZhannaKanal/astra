export default defineNuxtPlugin(() => {
  const dataStore = useDataStore();

  return {
    provide: {
      dataStore,
    },
  };
});
