# For computer vision, first of all we need to detect edges of objects

![computer-vision-problem](computer-vision-problem.png)

# Convolution operation

We use a small matrix called "**filter**" to divide image matrix into "dark and light" area that can be detected later

![convolution-operation](convolution-operation.png)

# Learn filter

Instead of prefix a filter matrix, we can set it to a parameter and learn it

![para-filter](para-filter.png)

# Padding

Some pixels in the edges of matrix may not be counted as many as the others in the middle. This can cause some problems:
- Our image matrix will be shrinked after each layer
- Pixels in edges are not trained well  
 
so we add some **padding** to make them counted equally

![padding](padding.png)