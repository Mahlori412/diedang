/**
 * Fetch data from the following endpoints:
 * - https://randomuser.me/api/
 * - http://numbersapi.com/random/math
 * - https://www.boredapi.com/api/activity
 * 
 * Combine the results into a single object with properties from each
 * and return a list of 5 items.
 * 
 * The APIResultInterface is the contract for each item in the list:
 * - Email
 * - First name
 * - Last name
 * - Gender
 * - Country
 * - Random Math Fact
 * - Random Activity
 * 
 * Use this array in your service to loop each item, hit the API 
 * and set the result property for each:
 * 
 *  private _endpoints: APIEndpoint[] = [
    { name: 'user', url: 'https://randomuser.me/api/', result: null },
    { name: 'math', url: 'http://numbersapi.com/random/math', result: null },
    { name: 'activity', url: 'https://www.boredapi.com/api/activity', result: null },
  ]
 * 
*/

import type { 
  APIEndpoint, 
  APIResultInterface,
  // [# Candidate to complete]
  // ..
} from "@/interfaces"

class Service {

  /**
   * Use this array and loop each item, hit the API 
   * and set the result property for each.
   */
  private _endpoints: APIEndpoint[] = [
    { 
      name: 'user', 
      url: 'https://randomuser.me/api/', 
      result: null 
    },
    { 
      name: 'math', 
      url: 'http://numbersapi.com/random/math', 
      result: null 
    },
    { 
      name: 'activity', 
      url: 'https://www.boredapi.com/api/activity', 
      result: null 
    },
  ]
  
  /**
   * Flesh out the following method.
   * Make sure you handle any exceptions
   * and return a list of 5 objects.
   */
  async fetchFromAPIs(): Promise<APIResultInterface [] | undefined> {
    try {
      // [# Candidate to complete v]
      // ..
    }
    catch(e) {
      // [# Candidate to complete]
      // ..
    }
    return
  }
  
}

// [# Candidate to complete]
// ..
export default new Service()