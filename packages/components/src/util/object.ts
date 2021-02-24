/**
 * Get value from a deeply nested object using a string path
 * @param obj - the object
 * @param path - the string path
 * @param def  - the fallback value
 */
export function get(obj: any, path: string | number, fallback?: any, index?: number) {
  //@ts-ignore
  path = (path?.split?.('.') ?? [path]) as string
  for (index = 0; index < path.length; index++) {
    obj = obj ? obj[path[index]] : undefined
  }
  return obj === undefined ? fallback : obj
}
