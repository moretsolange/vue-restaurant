export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://www.culinaryhill.com/wp-content/uploads/2022/04/Beef-Gyros-Culinary-Hill-1200x800-1.jpg',
          title: 'Sajtos gyros',
          description:
            'Csípős öntet, Friss saláta, Gyros hús (marha), Hagyma, Tzatziki öntet, hasábburgonya',
          price: 2750,
        },
        {
          id: 'p2',
          image:
            'https://www.themanual.com/wp-content/uploads/sites/9/2023/07/Doner-Haus-chicken.jpg?p=1',
          title: 'Döner pitában',
          description:
            'Grillezett marhahús, jégsaláta, káposzta, paradicsom, hagyma, döner szósz',
          price: 2560,
        },
        {
          id: 'p3',
          image:
            'https://foxeslovelemons.com/wp-content/uploads/2023/06/Chicken-Shawarma-8-720x720.jpg',
          title: 'Shawarma',
          description:
            'Csirkehús, shawarma krém, kovászos uborkacsíkok, burgonya, tortillában',
          price: 3199,
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
