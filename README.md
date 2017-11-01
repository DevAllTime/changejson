# ChangeJSON

* # Change schema of the object
  * This function will input the object, schema. returned object will be in the schema that is specified.
  * ### `changeSchema(object,schema)`
    * Object you wish to change
    * Specify the schema as array of keys
      * Ex: ["One","two","three"]
    * ```
      console.log(JSON.stringify(changeJson.changeSchema(
      {
          'x': 1,
          'y': 2
      },
      ['y','x']
      ),null,' ')
      ```
    * Output:
      ```
      {
        'y': 2,
        'x': 1
      }
      ```

* # Compares two objects
   * This function compares two objects are returns the intersection of keys
   * ### `compareAndCount(object1,object2)`
      * ```console.log(cj.compareAndCount({'x':1},{'x':2,'y':2}))```
      * returns : `{ compare: [ 'x' ], count: 1 }`

* # Merge object array

  * You can pass in an array of objects and get out a single object, with all the keys from every object and an array of the values

  * **Usage**.
    ```
    console.log(merge([
        {"first_name":"Frank", "last_name":"Billy", "friends":["Pam", "Susy"]},
        {"first_name":"Sally", "last_name":"Doe", "middle_name":"Krissy", "friends":["Rick", "Walter"]},
        {"first_name":"Don"}
    ]))
    ```
    would return 

    ```
    { first_name: [ 'Frank', 'Sally', 'Don' ],
      last_name: [ 'Billy', 'Doe' ],
      friends: [ 'Pam', 'Susy', 'Rick', 'Walter' ],
      middle_name: [ 'Krissy' ] }
    ```
