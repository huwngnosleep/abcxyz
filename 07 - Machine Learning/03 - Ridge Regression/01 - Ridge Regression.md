# 1, Balancing fit and magnitude of coefficients
A good model should balance between:
- How well function fits the data
- Magnitude of coefficients (avoid over-fitting)

![good-model](good-model.png)

The magnitude of regression coefficients should be measured by **Sum of squares (L2 norm)**

![L2-norm](L2-norm.png)

So this is the new objective to minimize, we introduce a **tunning parameter** to consider between which is more important to balance

![balancing](balancing.png)

Lambda and W-hat

![coeffients-path](coeffients-path.png)