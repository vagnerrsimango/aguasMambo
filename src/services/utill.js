export function filterByValue(array, value) {
  return array.filter(
    (data) =>
      JSON.stringify(data.nome).toLowerCase().indexOf(value.toLowerCase()) !==
      -1
  );
}
