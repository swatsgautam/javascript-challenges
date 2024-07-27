const library = [
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'The Power of Your Subconscious Mind',
      author: 'Joseph Murphy',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'The Monk Who Sold His Ferrari',
      author: 'Robin Sharma',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];

  //set read status to true

  library[0].status.read = true;
  document.getElementById('obj1').innerHTML = library[0].status.read;
  library[1].status.read = true;
  document.getElementById('obj2').innerHTML = library[0].status.read;
  library[2].status.read = true;
  document.getElementById('obj3').innerHTML = library[0].status.read;

  //Destructure the title from the first book and rename the variable to firstBook

  const {title:firstBook} = library[0];
  console.log('firstbook', firstBook);
  document.getElementById('rename').innerHTML =firstBook;

  const libJSON = JSON.stringify(library);
  console.log(libJSON)
  document.getElementById('jsonStr').innerHTML =libJSON;
  