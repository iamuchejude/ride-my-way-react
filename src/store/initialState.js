const initialState = {
  components: {
    createRideModal: false,
    viewRideModal: false,
  },
  register: {
    status: null,
    message: null,
    loading: false,
  },
  login: {
    status: null,
    message: null,
    loading: false,
  },
  user: {
    isAuthenticated: true,
    user: {
      name: 'Uche Jude',
      email: 'iamuchejude@gmail.com',
      photo: null,
      phone: null,
      id: 'y9zT1zzeYd',
    },
    rides: []
  }
}

export default initialState;
