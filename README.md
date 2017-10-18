# ChangeJSON

* ## Pass in an object and specify the schema -> Object is arranged in specified schema
  * ### `changeSchema(object,schema)`
    * Object you wish to change
    * Specify the schema as array of keys
      * Ex: ["One","two","three"]
    * ```
      console.log(JSON.stringify(val.changeSchema(
      {
          'x': 1,
          'y': 2
      },
      ['y','x']
      ),null,' ')
      ```

* ## Compare the two Objects and returns the count and the number of keys
   * ### `compare(object1,object2)`
      * returns the object with keys and count associated with it

