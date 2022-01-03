# Accumulator variable
Accumulator variable is a read-write variable that is shared among tasks

Writes are restricted to increments, or some user defined operation
Write is applied through a delta

Writing can not be done during a task execution => guarantee for an update

# Applications

- Performance counter
- Control flow
- **Writing can not be done during a task execution**, which make it good for monitoring, debugging and profiling