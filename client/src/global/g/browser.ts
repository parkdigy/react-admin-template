const browser = {
  /********************************************************************************************************************
   * getId
   * ******************************************************************************************************************/
  getId() {
    let id = localStorage.getItem('browserId');
    if (!id) {
      id = crypto.randomUUID().replace(/-/g, '');
      localStorage.setItem('browserId', id);
    }
    return id;
  },
};

export default browser;
