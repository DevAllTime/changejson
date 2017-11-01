# changejson

![npm](https://badge.fury.io/js/changejson.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) ![github-issues](https://img.shields.io/github/issues/SSK001/changejson.svg) 

Function's to manipulate JSON for easy access.

[![NPM](https://nodei.co/npm/changejson.png?compact=true)](https://nodei.co/npm/changejson/)

## Features

 - Change the schema of the Json
 - Compare and count's the keys
 - Merge the same keys

## Change the schema of the Json

 - This function will input the object, schema. returned object will be in the schema that is specified.
 - Input: 
   ```
   console.log(JSON.stringify(changeJson.changeSchema(
      {
          'x': 1,
          'y': 2
      },
      ['y','x']
      ),null,' ')
   ```
 - Output: 
   ```
   {
     'y': 2,
     'x': 1
   }
   ```
## Compare and count's the keys

 - This function compares two objects are returns the intersection of keys
 - Input:
   ```
   console.log(cj.compareAndCount({'x':1},{'x':2,'y':2}))
   ```
 - Output:
   ```
   { compare: [ 'x' ], count: 1 }
   ```
   
## Merge the same keys

 - You can pass in an array of objects and get out a single object, with all the keys from every object and an array of the values
 - Input:
   ```
   console.log(merge([
        {"first_name":"Frank", "last_name":"Billy", "friends":["Pam", "Susy"]},
        {"first_name":"Sally", "last_name":"Doe", "middle_name":"Krissy", "friends":["Rick", "Walter"]},
        {"first_name":"Don"}
    ]))
   ```
 - Output:
   ```
   { first_name: [ 'Frank', 'Sally', 'Don' ],
      last_name: [ 'Billy', 'Doe' ],
      friends: [ 'Pam', 'Susy', 'Rick', 'Walter' ],
      middle_name: [ 'Krissy' ] }
   ```

