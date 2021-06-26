/* 
 * Basic Rest Client
 */
export class RestClient {
    
    constructor() {
        
    }
    
    async get(path = "/"){
        let response = await fetch(path, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        let data = await response.json();
        return data;
    }
    
    async del(path = "/"){
        let response = await fetch(path, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
        });
        return response;
    }
    
    async form(path = "/", formParameters = {}){
        
        var formBody = [];
        for (var property in formParameters) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(formParameters[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        let response = await fetch(path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody,
            });
        let data = await response.json();
        return data;
    }
}