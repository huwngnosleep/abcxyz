# Idea
Repeating the **Relax** operation to update the shortest path table
Table has 3 properties: DESTINATION, COST ESTIMATED and PI (Parent)

![bellman-ford-init-table](bellman-ford-init-table.png)

```
if (d[u] + w(u, v)) < d[v] => update d[v]
```

![bellman-ford-relax](bellman-ford-relax.png)

# Bellman-Ford Algorithm
- Init path table
- for i = 1 to n-1
  - for each edge e of E
    - relax(e)
- work for negative edge cycle

![bellman-ford-algorithm](bellman-ford-algorithm.png)