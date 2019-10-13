
/*** 
 * Modify Reducer state once action has finished with a spread operator
 */
export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};