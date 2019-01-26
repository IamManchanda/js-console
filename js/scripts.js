window.onload = () => {
  $.ajax({
    url: 'https://reqres.in/api/users',
    type: 'GET',
    success(response) {
      console.log({ response });
      console.assert(
        response.per_page === 3,
        '[Error]: Item number per page is not truthy',
      );
    },
  });
};