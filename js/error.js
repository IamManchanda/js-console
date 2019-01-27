window.onload = () => {
  $.ajax({
    url: 'test.url.co.uk',
    type: 'GET',
    error(error) {
      console.error(error);
    }
  });
};