/**
 * Recipe Default Store
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
export default {
  boards: [
    { 
      id: 1,
      title: 'General',
      threads: [
        {
          id: 1,
          slug: 'this-is-an-article',
          title: 'This is an Article',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          author: 'John Smith',
          category: 1,
          image: 'https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-1.jpg?alt=media&token=9f7c839b-2d40-4660-a2a0-bf6c2f64a2e5',
          updated: '2018-01-01 00:00:00',
          lastPost: '2018-01-01 00:00:00',
          pinned: false,
          posts: [
            {
              title: ''
            }
          ]
        }
      ], 
    },
  ],

  favourites: [2],
};
