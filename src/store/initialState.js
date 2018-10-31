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
  auth: {
    isAuthenticated: false,
    user: {},
  }
}

export default initialState;
