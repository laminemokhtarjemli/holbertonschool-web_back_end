const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let endpointCalls = weakMap.get(endpoint);
  if (!endpointCalls) {
    endpointCalls = 0;
  }
  endpointCalls++;
  weakMap.set(endpoint, endpointCalls);
  if (endpointCalls >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export {weakMap, queryAPI};
