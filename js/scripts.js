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
      console.log({ response });
    },
  });
};