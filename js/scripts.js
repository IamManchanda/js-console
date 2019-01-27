window.onload = () => {
  $.ajax({
    url: 'https://reqres.in/api/users',
    type: 'GET',
    success(response) {
      console.assert(
        response.per_page === 3,
        '[Error]: Item number per page is not truthy',
      );

      console.clear();

      const label = 'Fun Fun Function';
      response.data.forEach(item => {
        console.log(item);
        console.count(label);
      });

      console.clear();

      console.dir(document.body);
      console.dirxml(document.body);
    },
  });
};