
  /*!
   * json4all
   * Copyright(c) 2017 Santhosh Kumar
   * Copyright(c) 2017 Rashawn Evans
   * Copyright(c) 2017 Matthew Schupack

   * MIT Licensed
   */

   // More functions are yet to come

   // ------------------------------------------ Base Functions -----------------------------------------------

  function compareAndCount(object_1,object_2){
    if(object_1 === undefined || object_2 === undefined){
      try {
        throw new Error('The objects cannot be null or undefined');
      } catch (e) {
        return (e.name + ': ' + e.message);
      }
      return
    }
    if( (typeof object_1 === 'object' && object_1 != null) && (typeof object_2 === 'object' && object_2 != null) ){
      // Sorting the keys of elements to find the similarity in O(nlogn)
      // Returning the keys that are in common of both
      var objectOne         =   Object.keys(object_1).sort()
      var objectTwo         =   Object.keys(object_2).sort()
      // Returns the array of common keys in the json as an array
      var returnJson = {}
      returnJson.compare  = (objectOne.filter(function(element){
        return objectTwo.includes(element)
      }))
      returnJson.count    =  returnJson.compare.length
      return returnJson

    }else{
      try {
        throw new Error('The objects cannot be null or undefined');
      } catch (e) {
        return (e.name + ': ' + e.message);
      }
      return
    }

  }

  function changeSchema(object_1,schema){
    if(typeof object_1 == 'object' && object_1 != null && Object.keys(object_1).length >= 1){

      // Checking if the passed in object_1 has duplicate keys
      var object1Keys = Object.keys(object_1)
      var remove_duplicates_object = object1Keys.filter(function(item,index,inputArray){
        return inputArray.indexOf(item) == index
      })

      // Checkin if passed in schema has duplicate keys
      var remove_duplicates_schema = schema.filter(function(item,index,inputArray){
        return inputArray.indexOf(item) == index
      })

      // Check to see if the schema has all the keys that are specified in the object
      schema.forEach(function(value){
        if( value in object_1){
          // If present do nothing
        }else{
          throw new Error("The keys dosent match with the content")
        }
      })

      // Throwing error if the Schema or the object passed is not valid
      if(remove_duplicates_object.length === object1Keys.length && remove_duplicates_schema.length === schema.length){
        // 1. Check the object to find the keys
        // Declaring a new result_json object
        // Return the object when it is done
        var result_json = {}
        schema.forEach(function(value){
          result_json[value] = object_1[value]
        })
        return result_json

      }else{
        try{
            throw new Error("Object cannot have duplicates")
        }catch (e){
          return (e.name + ': ' + e.message);
        }
        return
      }
    }else{
      try {
        throw new Error('The objects cannot be null or undefined');
      } catch (e) {
        return (e.name + ': ' + e.message);
      }
    }
  }



  function compare(object_1,object_2){
    if(object_1 === undefined || object_2 === undefined){
      try {
        throw new Error('The objects cannot be null or undefined');
      } catch (e) {
        return (e.name + ': ' + e.message);
      }
      return
    }
    if( (typeof object_1 === 'object' && object_1 != null) && (typeof object_2 === 'object' && object_2 != null) ){
      // Do stuff here
    }else{
      throw new Error('The objects cannot be null or undefined');
    }


  }

  function merge(arr){
    
        //error checking
        if(!Array.isArray(arr)) {
            throw("argument must be of type 'array'");
        }
    
      return arr.reduce((prev, curr)=>{
    
            //error checking
            if(!curr){
                return prev;
            } else if(typeof curr !== "object"){
                throw ("all elements of array must be objects or null/undefined");
            }
    
    
        Object.keys(curr).forEach(key=>{
                //if the key is already in the accumulator just concat new data
                if(prev[key]){
                    //
                    if(!Array.isArray(prev[key])){
                        prev[key] = [prev[key]];
                    }
                    prev[key] = prev[key].concat(curr[key]);
                } else {
                    //if key not in accumulator create it
                    prev[key] = Array.isArray(curr[key]) ? curr[key] : [curr[key]];
                }
        })
        return prev;
      })
    }

  // ------------------------------------------ Exports functions --------------------------------------------

  exports.changeSchema = function(object_1,schema){
    return changeSchema(object_1,schema)
  }


  exports.compareAndCount = function(object_1,object_2){
    return compareAndCount(object_1,object_2)
  }

  exports.compare = function(object_1,object_2){
    return compare(object_1,object_2)
  }

  exports.merge = function(array){
    return merge(array);
  }
