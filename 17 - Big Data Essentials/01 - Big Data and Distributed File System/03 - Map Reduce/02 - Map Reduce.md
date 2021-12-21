# Run Map Reduce in bash
```
HADOOP_STREAMING_JAR = "/path/to/jar/file"

yarn jar $HADOOP_STREAMING_JAR  \
    -files mapper.py,reducer.py \
    -mapper 'python mapper.py' \
    -reducer 'python reducer.py' \
    -input /path/to/input/file \ 
    -output /output/file
```

# We can distribute a file to other nodes with some methods
- -files
- -archives
- -libjars