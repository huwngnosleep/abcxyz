# Node failures
- Fail-stop: a server get out of service and need external impact to bring system back to working state

![fail-stop](fail-stop.png)

- Fail-recovery: for some reasons, a node can not complete its computations. This might not have impact on correctness and success of computations. For instance, if a hard drive is damaged, just bring on another hard drive and no other step needed
 
![fail-recovery](fail-recovery.png)

- Byzantine: the computations result is different from expected

![byzantine](byzantine.png)

# Link failures
- Perfect Link: all send and received data is perfect

![perfect-link](perfect-link.png)

- Fair-loss Link: data transferred is missing for some reason
  
![fair-loss-link](fair-loss-link.png)

- Byzantine

![byzantine-link](byzantine-link.png)

# Fault Tolerance

### When error happen with a mapper or reducer, that mapper or reducer can be reassigned for another worker without stop the job entirely due to the benefit of Functional Programming

![fault-tolerance](fault-tolerance.png)

