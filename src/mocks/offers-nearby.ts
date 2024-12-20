import { OfferType } from '../type';

const OFFERS_NEARBY: OfferType[] = [
  {
    id: '8046e71f-52bc-4121-a05a-7ef2164726c4',
    title: 'Waterfront with extraordinary view',
    type: 'house',
    price: 904,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 5
  },
  {
    id: 'ae8aa68f-e61e-47e6-afe0-4e8a6dced84e',
    title: 'Perfectly located Castro',
    type: 'house',
    price: 343,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.4
  },
  {
    id: '13c02889-dd9f-4078-ac51-000ad9dd9c1d',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 475,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.225402,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2
  }
];

export default OFFERS_NEARBY;
