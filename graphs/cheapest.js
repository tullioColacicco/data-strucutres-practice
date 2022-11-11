var findCheapestPrice = function (n, flights, src, dst, K) {
  const { graph, seen, minHeap } = buildGraph(n, flights, src, dst, K);

  return search(graph, src, dst, seen, minHeap);
};

var initGraph = (n) => ({
  graph: new Array(n).fill().map(() => []),
  seen: new Map(),
  minHeap: new MinPriorityQueue(),
});

var buildGraph = (n, flights, src, dst, K) => {
  const { graph, seen, minHeap } = initGraph(n);

  for (const [src, dst, cost] of flights) {
    graph[src].push([dst, cost]);
  }

  const priority = 0;
  const node = [priority, src, K + 1];

  minHeap.enqueue(node, priority);

  return { graph, seen, minHeap };
};
