/** ************************************************************************************ */
/**
place holder for framework reusable library
 * */
/** ************************************************************************************* */

// var xls_json = require('../node_modules/node-excel-to-json');
// var anyDB     = require('../node_modules/any-db');
// var anyDBJDBC = require('../node_modules/any-db-jdbc');
const xls_json = require('../node_modules/node-excel-to-json');

module.exports = {

  /** ************************************************************************************ */
  /*
   * method isEquals ( x, y )
   * Deep compare of two objects
   * @param {*} x
   * @param {*} y
   * @return {Boolean} Whether the two objects are equivalent, that is,
   *         every property in x is equal to every property in y recursively. Primitives
   *         must be strictly equal, that is "1" and 1, null an undefined and similar objects
   *         are considered different
   * */
  /** ************************************************************************************* */
  isEquals(x, y) {
    // If both x and y are null or undefined and exactly the same
    if (x === y) {
      return true;
    }

    // If they are not strictly equal, they both need to be Objects
    if (!(x instanceof Object) || !(y instanceof Object)) {
      return false;
    }

    // They must have the exact same prototype chain, the closest we can do is
    // test the constructor.
    if (x.constructor !== y.constructor) {
      return false;
    }

    for (var p in x) {
      // Inherited properties were tested using x.constructor === y.constructor
      if (x.hasOwnProperty(p)) {
        // Allows comparing x[ p ] and y[ p ] when set to undefined
        if (!y.hasOwnProperty(p)) {
          return false;
        }

        // If they have the same strict value or identity then they are equal
        if (x[p] === y[p]) {
          continue;
        }

        // Numbers, Strings, methods, Booleans must be strictly equal
        if (typeof (x[p]) !== 'object') {
          return false;
        }

        // Objects and Arrays must be tested recursively
        if (!equals(x[p], y[p])) {
          return false;
        }
      }
    }

    for (p in y) {
      // allows x[ p ] to be set to undefined
      if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
        return false;
      }
    }
    return true;
  },

  /** ************************************************************************************ */
  /*
   * method isArray(myArray)
   * @return {Boolean} Whether it a array or not
   * example - 	var foo1 = [{foundation: "GBI", model: "automation", week: 45, month: 7}];
   * 				var foo2 = {foundation: "GBI", model: "automation", week: 45, month: 7};
   * isArray(foo1)	- returns - true
   * isArray(foo2)	- returns - false
   * */
  /** ************************************************************************************* */
  isArray(myArray) {
    return myArray.constructor.toString().indexOf('Array') > -1;
  },

  /** ************************************************************************************ */
  /*
   * method getObjValues (myjson)
   * @param {myjson}  - either json Object or json array
   * returns the values from the json array or json objects - return type is always array
   * example - 	var foo = [{foundation: "GBI", model: "automation", week: 45, month: 7}];
   * 								or
   * 				var foo = {foundation: "GBI", model: "automation", week: 45, month: 7};
   * getObjValues (foo)
   * @return array will be - ['GBI', 'automation', 45, 7];
   * */
  /** ************************************************************************************* */
  getObjValues(myjson) {
    const outValuesInArray = [];

  	 if (this.isArray(myjson)) {
    		json = myjson[0];
    	} else { json = myjson; }
    	for (const x in json) {
        	outValuesInArray.push(json[x]);
        	}
        	// console.log(outValuesInArray);
        	return outValuesInArray;
  },

  /** ************************************************************************************ */
  /*
  * method getValueByKey (jsonObj, jsonKey)
  * @param {jsonObj}  - a json object
  * @param {jsonKey}  - json key to be searched
  * @return the key's value of the json object
  * example - var foo = {foundation: "GBI", model: "automation", week: 45, transport: "car", month: 7};
  * var jsonValue = getValueByKey(foo, 'foundation');
  * console.log(jsonValue);
  * @return value will be - "GBI";
  * */
  /** ************************************************************************************* */
  getValueByKey(jsonObj, jsonKey) {
    	// this.jsonKey = jsonKey;
    	let keyValue = '';

    	if (this.isArray(jsonObj)) {
    		var json = jsonObj[0];
    	} else { json = jsonObj; }
    	// console.log(json);
    	if (json.hasOwnProperty(jsonKey.toUpperCase())) {
    		return keyValue = json[jsonKey.toUpperCase()];
    	} if (json.hasOwnProperty(jsonKey.toLowerCase())) {
    		return keyValue = json[jsonKey.toLowerCase()];
    	} if (json.hasOwnProperty(jsonKey)) {
    		return keyValue = json[jsonKey];
    	} return undefined;
  },

  /** ************************************************************************************ */
  /*
   * method isContains (json, value)
   * @param {json} - a json or json-array from which search to be done
   * @param {value} - key value to be searched against the json Key
   * @return -	true if valueToSearch exists in the json else false
   * */
  /** ************************************************************************************* */
  isContains(json, value) {
  	let contains = false;
    Object.keys(json).some((key) => {
  		contains = typeof json[key] === 'object' ? isContains(json[key], value) : json[key] === value;
  	  return contains;
  	});
    return contains;
  },

  /** ************************************************************************************ */
  /*
   * method getObjFromList (jsonArray, KeyName, valueToSearch)
   * @param {jsonArray} - a json array from which search to be done
   * @param {KeyName} - is the key name in the json object
   * @param {valueToSearch} - key value to be searched against the json Key
   * @return -	a  single json object from the json array based on the key-value matches
   * */
  /** ************************************************************************************* */
  getObjFromList(jsonArray, KeyName, valueToSearch) {
  	for (let i = 0; i < jsonArray.length; ++i) {
     		if (jsonArray[i].hasOwnProperty(KeyName) && (jsonArray[i][KeyName] == valueToSearch)) {
      		// console.log(jsonArray[i]);
      		return jsonArray[i];
      	} continue;
  	}
  },

  /** ************************************************************************************ */
  /*
   * method findObjects (obj, targetProp, targetValue, finalResults)
   * @param {obj} - a json arraylist or json  object
   * @param {targetProp} - a json properties (i.e. key ) to be searched
   * @param {targetValue} - a json Value of a corresponding key  to be searched
   * @param {finalResults} - an arraylist to conain the results
   * for example -
                var finalResults = [];
                var result = findObjects(myObject, 'formId', '1025', finalResults);
                console.log('finalResults: ', finalResults);
    * it find any object inside of obj (also in the nested json) with property name and value matching to targetProp and targetValue -
    * - and will push it to the finalResults array.
   * */
  /** ************************************************************************************* */
  findObjects(obj, targetProp, targetValue, finalResults) {
    function getObject(theObject) {
      const result = null;
      if (theObject instanceof Array) {
        for (let i = 0; i < theObject.length; i++) {
          getObject(theObject[i]);
        }
      } else {
        for (const prop in theObject) {
          if (theObject.hasOwnProperty(prop)) {
            // console.log(prop + ': ' + theObject[prop]);
            if (prop === targetProp) {
              // console.log('--found id');
              if (theObject[prop] === targetValue) {
                // console.log('----found porop', prop, ', ', theObject[prop]);
                finalResults.push(theObject);
              }
            }
            if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
              getObject(theObject[prop]);
            }
          }
        }
      }
    }
    getObject(obj);
  },


  /** ************************************************************************************ */
  /*
   * method excel_getTableRow(fileName, sheetName, columnName, where, callback)
   * @param {fileName} - relative or absolute path of Excel file
   * @param {sheetName} - sheet anme of the Excel file from which data needs to be picked
   * @param {columnName} - name of the column in excel sheet
   * @param {where} - the column value against which the search to be done
   * @param {callback} callback method that contains command results (one excel row from the specified sheet name)
   * and gets called when the command finishes
   * Turn any xls or xlsx file or OpenDocument Spreadsheet (ODS) into a clean JSON file or Javascript Object.
   * */
  /** ************************************************************************************* */
  excel_getTableRow(fileName, sheetName, columnName, where, callback) {
    	xls_json(fileName, {
      convert_all_sheet: false,
      return_type: 'Object',
      sheetName,
    }, (err, result) => {
      		  if (err) {
        		    console.error(err);
      		  } else if (result) {
      			     for (let row = 0; row < result.length; ++row) {
       				         if (result[row].hasOwnProperty(columnName) && (result[row][columnName] == where)) {
        				             // console.log(result[row]);
        				              callback(result[row]);
        			          }
    			        }
        	    }
    	    });
  },

  /** ************************************************************************************ */
  /*
   * method excel_getTableRows(fileName, sheetName, callback)
   * @param {fileName} - relative or absolute path of Excel file
   * @param {sheetName} - sheet anme of the Excel file from which data needs to be picked
   * @param {callback} callback method that contains command results (all excel rows from the specified sheet name)
   * and gets called when the command finishes
   * Turn any xls or xlsx file or OpenDocument Spreadsheet (ODS) into a clean JSON file or Javascript Object.
   * */
  /** ************************************************************************************* */
  excel_getTableRows(fileName, sheetName, callback) {
    xls_json(fileName, {
      convert_all_sheet: false,
      return_type: 'Object',
      sheetName,
    }, (err, result) => {
    		    if (err) {
      		      console.error(err);
    		    } else if (result) {
    			      // console.log(result);
    			      return callback(result);
      		    }
  	    });
  },

  /** ************************************************************************************ */
  /*
   * method excel_getTableRows(fileName, sheetName, callback)
   * @param {fileName} - relative or absolute path of Excel file
   * @param {callback} callback method that contains command results (all sheet's rows from the specified sheet name)
   * and gets called when the command finishes
   * Turn any xls or xlsx file or OpenDocument Spreadsheet (ODS) into a clean JSON file or Javascript Object.
   * */
  /** ************************************************************************************* */
  excel_getAllSheetData(fileName, callback) {
    xls_json(fileName, {
      convert_all_sheet: true,
      return_type: 'Object',
    }, (err, result) => {
    		    if (err) {
      		      console.error(err);
    		    } else if (result) {
    			      // console.log(result);
    			      return callback(result);
      		    }
  	    });
  },

  /** ************************************************************************************ */
  /*
   * method multiSelector(selectotList)
   * @param {selectotList} - an arraylist object which contains different alternative selector
   *for example - ["[href='/guide.html1']", "//*[@id='userid']", "[@class='myclassname']"];
   * */
  /** ************************************************************************************* */
  multiSelector(selectorList) {
    for (const lookSelector in selectorList) {
      const elem = browser.element(selectorList[lookSelector]);
      if (elem.type != 'NoSuchElement' && elem.state != 'failure') {
        // console.log("the right selector is: "+elem.selector);
        return elem.selector;
      } console.log(`this selector does not exists: ${elem.selector}`);
    }
  },

  /** ************************************************************************************ */
  // method to generate timestamp in the format: mm/dd/yy hh:mi:ss
  /** ************************************************************************************ */
  getTimeStamp() {
    const now = new Date();
    return (`${now.getMonth() + 1}/${
      now.getDate()}/${
      now.getFullYear()} ${
      now.getHours()}:${
      (now.getMinutes() < 10)
        ? (`0${now.getMinutes()}`)
        : (now.getMinutes())}:${
      (now.getSeconds() < 10)
        ? (`0${now.getSeconds()}`)
        : (now.getSeconds())}`);
  },

  /** ************************************************************************************ */
  /**
 * function elementWait (locater, timeout)
 * This function will wait for an element for the provided amount of milliseconds to be present.
 *  * @param {*} locater        -  The locator is the xpath that need to verified for the presence.
 * */
  /** ************************************************************************************* */
  elementWait(locater, timeout) {
    try {
      // console.log(locater)
      browser.waitForExist(locater, timeout);
    } catch (e) {
      expect(false).toBe(true);
      throw new Error(`Timed out while waiting for control to load : ${e}`);
    }
  },

}; // end of module
