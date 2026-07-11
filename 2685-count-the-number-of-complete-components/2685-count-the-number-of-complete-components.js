/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
      const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = new Array(n).fill(false);
    let ans = 0;

    function dfs(node) {
        visited[node] = true;

        let nodes = 1;
        let degreeSum = graph[node].length;

        for (const nei of graph[node]) {
            if (!visited[nei]) {
                const [cnt, deg] = dfs(nei);
                nodes += cnt;
                degreeSum += deg;
            }
        }

        return [nodes, degreeSum];
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const [nodes, degreeSum] = dfs(i);
            const edgesInComponent = degreeSum / 2;

            if (edgesInComponent === (nodes * (nodes - 1)) / 2) {
                ans++;
            }
        }
    }

    return ans;
};