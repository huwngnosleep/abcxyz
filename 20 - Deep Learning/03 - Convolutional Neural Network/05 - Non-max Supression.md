# When training using YOLO algorithm, we may encounter a problem that many square will think they have detected the center of the object

![yolo-problem](yolo-problem.png)

# When there are many border detected around an object, we should take a border which has the most pC value

![yolo-problem2](yolo-problem2.png)

![non-max-supression](non-max-supression.png)