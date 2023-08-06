export default class Bike {
  static async getBike(zipCode) {
    try {
      const response = await fetch(`https://bikeindex.org/api/v3/search?page=1&per_page=50&location=${zipCode}&stolenness=proximity`)
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      } 
      return jsonifiedResponse;
    }
    catch (error) {
      return error;
    }
  }
}