window.onload = () => {
  $.ajax({
    url: 'https://reqres.in/api/users',
    type: 'GET',
    success(response) {
      console.log(response);
    },
  });
};