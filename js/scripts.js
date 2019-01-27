window.onload = () => {
  $.ajax({
    url: 'https://reqres.in/api/users?per_page=10',
    type: 'GET',
    success(response) {
      console.log(response);

      console.clear();

      console.assert(
        response.per_page === 11,
        '[Error]: Item number per page is not truthy',
      );

      console.clear();
      
      const label = 'Item Number';
      response.data.forEach((item) => {
        console.count(label);
        console.log({ item });
      });

      console.clear();

      console.dir(document.body);
      console.dirxml(document.body);

      console.clear();

      const users = response.data;
      users.forEach((user) => {
        console.groupCollapsed(`User: ${user.first_name} ${user.last_name}`);
          console.log({ id: user.id });
          console.log({ avatar: user.avatar });
          console.log({ first_name: user.first_name });
          console.log({ last_name: user.last_name });
        console.groupEnd();
      });
    },
  });
};